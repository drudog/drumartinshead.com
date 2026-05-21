"use client";

import { useEffect, useState } from "react";

type Heading = { id: string; text: string; level: number };

export function CaseStudyToc() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLHeadingElement>("article h2[id], article h3[id]"),
    );
    setHeadings(
      nodes.map((node) => ({
        id: node.id,
        text: node.textContent ?? "",
        level: Number(node.tagName.slice(1)),
      })),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="text-sm">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)] mb-4">
        On this page
      </p>
      <ul className="space-y-2">
        {headings.map((h) => (
          <li key={h.id} style={{ paddingLeft: h.level === 3 ? 12 : 0 }}>
            <a
              href={`#${h.id}`}
              className={`block py-1 transition ${
                activeId === h.id
                  ? "text-[color:var(--color-accent)]"
                  : "text-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)]"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
