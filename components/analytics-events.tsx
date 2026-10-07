"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track } from "@vercel/analytics";

type Props = Record<string, string | number>;

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
  }
}

// The /for/[slug] page a visitor arrived from, if any (set by RememberAudience).
function currentAudience(): string | undefined {
  try {
    const raw = sessionStorage.getItem("audience");
    return raw ? JSON.parse(raw).slug : undefined;
  } catch {
    return undefined;
  }
}

// Sends each event to Vercel Analytics (custom events need a Pro plan) and to
// Microsoft Clarity, where it also tags the session recording.
export function send(name: string, props: Props = {}) {
  const audience = currentAudience();
  const all = audience ? { ...props, audience } : props;
  // Defer a tick so events fired during the first render reach the
  // analytics scripts, which initialize in later effects.
  setTimeout(() => {
    try {
      track(name, all);
    } catch {}
  }, 0);
  toClarity(["event", name], audience);
}

// Clarity loads after the page is interactive, so retry briefly until it exists.
function toClarity(args: unknown[], audience?: string, tries = 10) {
  try {
    if (window.clarity) {
      window.clarity(...args);
      if (audience) window.clarity("set", "audience", audience);
      return;
    }
  } catch {
    return;
  }
  if (tries > 0) setTimeout(() => toClarity(args, audience, tries - 1), 500);
}

function classify(href: string): { name: string; props: Props } | null {
  if (href.endsWith(".pdf")) return { name: "resume_download", props: { file: href.split("/").pop() ?? href } };
  if (href.startsWith("mailto:")) return { name: "contact_click", props: { method: "email" } };
  if (href.startsWith("tel:")) return { name: "contact_click", props: { method: "phone" } };
  if (href.includes("linkedin.com")) return { name: "outbound_click", props: { site: "linkedin" } };
  if (href.includes("behance.net")) return { name: "outbound_click", props: { site: "behance" } };
  return null;
}

// One delegated click listener for the whole site: resume downloads, contact
// links, and profile links, tagged with the page they were clicked on.
export function AnalyticsEvents() {
  const pathname = usePathname();

  useEffect(() => {
    const audience = currentAudience();
    if (audience) toClarity(["set", "audience", audience]);
  }, [pathname]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const link = (e.target as Element | null)?.closest?.("a");
      const href = link?.getAttribute("href");
      if (!href) return;
      const event = classify(href);
      if (event) send(event.name, { ...event.props, page: window.location.pathname });
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}

// Fires once per page view when a reader passes 50% and 90% of a case study.
export function ReadDepth({ slug }: { slug: string }) {
  useEffect(() => {
    const sent = new Set<number>();
    function onScroll() {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const pct = (window.scrollY / max) * 100;
      for (const mark of [50, 90]) {
        if (pct >= mark && !sent.has(mark)) {
          sent.add(mark);
          send("case_study_read", { slug, depth: mark });
        }
      }
      if (sent.size === 2) window.removeEventListener("scroll", onScroll);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [slug]);

  return null;
}
