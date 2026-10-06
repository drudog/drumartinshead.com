import Link from "next/link";
import { ArrowDown } from "lucide-react";

const proof = [
  { value: "~1,500", label: "Audiology clinics using Lace Pro, which I designed from 0 to 1" },
  { value: "3×", label: "Hearing Technology Innovator Award for Lace Pro, 2024 to 2026" },
  { value: "38%", label: "Patient adherence vs. under 30% for physical therapy; 61% at top clinics" },
  { value: "~5 yrs", label: "Managing design, research, and content through an acquisition and a reorg" },
  { value: "Intern → lead", label: "A designer I hired as an intern now leads growth design at Noom" },
];

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-24 pb-16 sm:pt-32 sm:pb-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)] mb-6">
        Product Design Leader
      </p>
      <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight max-w-5xl leading-[1.08]">
        I build design teams{" "}
        <span className="text-[color:var(--color-accent)]">
          and still ship the work.
        </span>
      </h1>
      <p className="mt-6 max-w-3xl text-lg sm:text-xl leading-relaxed text-[color:var(--color-muted)]">
        Head of UX and Product Design Manager at SharpSpring and Constant
        Contact. Since 2024, leading design for an AI digital therapeutic now
        used in nearly 1,500 clinics.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Link
          href="#work"
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[color:var(--color-foreground)] text-[color:var(--color-background)] px-6 py-3 text-sm font-medium transition hover:opacity-90"
        >
          See selected work
          <ArrowDown className="h-4 w-4" />
        </Link>
        <Link
          href="/2026-resume.pdf"
          className="whitespace-nowrap text-sm font-medium text-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)] transition px-4 py-3"
        >
          Download resume →
        </Link>
      </div>
      <dl className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8 border-t border-[color:var(--color-border)] pt-10">
        {proof.map((item) => (
          <div key={item.value}>
            <dt className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[color:var(--color-accent)]">
              {item.value}
            </dt>
            <dd className="mt-2 text-sm leading-snug text-[color:var(--color-muted)]">
              {item.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
