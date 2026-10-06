import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";

export function CodeProjects() {
  const projects = caseStudies.filter((cs) => cs.section === "code");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {projects.map((cs) => (
        <Link
          key={cs.slug}
          href={`/work/${cs.slug}`}
          className="group flex gap-4 items-start p-4 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] transition hover:border-[color:var(--color-accent)]"
        >
          <div className="relative w-24 h-16 shrink-0 rounded-lg overflow-hidden bg-[color:var(--color-border)]">
            <Image
              src={cs.hero}
              alt=""
              fill
              sizes="96px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-display text-lg font-semibold tracking-tight leading-snug">
                {cs.title}
              </h3>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-[color:var(--color-muted)] group-hover:text-[color:var(--color-accent)] transition" />
            </div>
            <p className="mt-1 text-sm text-[color:var(--color-muted)] leading-snug">
              {cs.subtitle}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
