import Link from "next/link";
import Image from "next/image";
import type { CaseStudy } from "@/lib/case-studies";
import { ArrowUpRight } from "lucide-react";

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link
      href={`/work/${caseStudy.slug}`}
      className="group block border border-[color:var(--color-border)] rounded-2xl overflow-hidden bg-[color:var(--color-surface)] transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[color:var(--color-border)]">
        <Image
          src={caseStudy.hero}
          alt={caseStudy.title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-between mb-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
            Case Study · {caseStudy.number}
          </p>
          <ArrowUpRight className="h-4 w-4 text-[color:var(--color-muted)] group-hover:text-[color:var(--color-accent)] transition" />
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mb-2">
          {caseStudy.title}
        </h3>
        <p className="text-[color:var(--color-muted)] mb-4">{caseStudy.subtitle}</p>
        <p className="text-sm text-[color:var(--color-foreground)]/80 leading-relaxed">
          {caseStudy.summary}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {caseStudy.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full border border-[color:var(--color-border)] text-[color:var(--color-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
