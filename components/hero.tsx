import Link from "next/link";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)] mb-6">
        00 · Introduction
      </p>
      <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight max-w-4xl leading-[1.05]">
        I evolve clinically proven concepts into{" "}
        <span className="text-[color:var(--color-accent)]">digital experiences that scale.</span>
      </h1>
      <p className="mt-8 max-w-2xl text-lg sm:text-xl text-[color:var(--color-muted)] leading-relaxed">
        Product design leader specializing in healthcare digitalization — from
        clinical research to launch-ready interfaces that clinicians trust and
        patients return to.
      </p>
      <div className="mt-12 flex items-center gap-4">
        <Link
          href="#work"
          className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-foreground)] text-[color:var(--color-background)] px-6 py-3 text-sm font-medium transition hover:opacity-90"
        >
          See selected work
          <ArrowDown className="h-4 w-4" />
        </Link>
        <Link
          href="/about"
          className="text-sm font-medium text-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)] transition px-4 py-3"
        >
          About me →
        </Link>
      </div>
    </section>
  );
}
