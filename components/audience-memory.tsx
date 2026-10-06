"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const KEY = "audience";

type Remembered = { slug: string; company: string };

// Set on a /for/[slug] page so case studies opened from it can link back there.
export function RememberAudience({ slug, company }: Remembered) {
  useEffect(() => {
    try {
      sessionStorage.setItem(KEY, JSON.stringify({ slug, company }));
    } catch {}
  }, [slug, company]);
  return null;
}

export function AudienceBackLink() {
  const [audience, setAudience] = useState<Remembered | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(KEY);
      if (raw) setAudience(JSON.parse(raw));
    } catch {}
  }, []);

  return (
    <Link
      href={audience ? `/for/${audience.slug}` : "/#work"}
      className="inline-flex items-center gap-2 text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)] transition"
    >
      <ArrowLeft className="h-4 w-4" />
      {audience ? `Back to work for ${audience.company}` : "Back to work"}
    </Link>
  );
}
