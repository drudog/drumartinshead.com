import Link from "next/link";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-24 pb-16 sm:pt-32 sm:pb-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)] mb-6">
        00 · Executive Summary
      </p>
      <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight max-w-5xl leading-[1.08]">
        I evolve clinically proven concepts into{" "}
        <span className="text-[color:var(--color-accent)]">
          digital experiences that scale
        </span>{" "}
        — not just across markets, but across lives.
      </h1>
      <div className="mt-12 flex items-center gap-4">
        <Link
          href="#work"
          className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-foreground)] text-[color:var(--color-background)] px-6 py-3 text-sm font-medium transition hover:opacity-90"
        >
          See selected work
          <ArrowDown className="h-4 w-4" />
        </Link>
        <Link
          href="/2026-resume.pdf"
          className="text-sm font-medium text-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)] transition px-4 py-3"
        >
          Download resume →
        </Link>
      </div>
    </section>
  );
}
