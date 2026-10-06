import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { audiences, getAudience } from "@/lib/audiences";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { CaseStudyCard } from "@/components/case-study-card";
import { CodeProjects } from "@/components/code-projects";
import { RememberAudience } from "@/components/audience-memory";

export const dynamicParams = false;

export function generateStaticParams() {
  return audiences.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const audience = getAudience(slug);
  if (!audience) return {};
  return {
    title: `For ${audience.company}`,
    description: `Selected work for the ${audience.role} role at ${audience.company}.`,
    robots: { index: false, follow: false },
  };
}

export default async function AudiencePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const audience = getAudience(slug);
  if (!audience) notFound();

  const featured = audience.featured
    .map((s) => getCaseStudy(s))
    .filter((cs) => cs !== undefined);
  const more = caseStudies.filter(
    (cs) => cs.section === "main" && !audience.featured.includes(cs.slug)
  );

  return (
    <div>
      <RememberAudience slug={audience.slug} company={audience.company} />

      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12 sm:pt-28">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)] mb-6">
          For {audience.company}
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08] max-w-4xl">
          Selected work for the{" "}
          <span className="text-[color:var(--color-accent)]">
            {audience.role}
          </span>{" "}
          role
        </h1>
        <div className="mt-8 max-w-3xl space-y-4 text-lg leading-relaxed text-[color:var(--color-muted)]">
          {audience.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={audience.resume}
            className="inline-flex items-center whitespace-nowrap rounded-full bg-[color:var(--color-foreground)] text-[color:var(--color-background)] px-6 py-3 text-sm font-medium transition hover:opacity-90"
          >
            Download resume (PDF)
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center whitespace-nowrap rounded-full border border-[color:var(--color-border)] px-6 py-3 text-sm font-medium hover:border-[color:var(--color-foreground)] transition"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <section className="border-t border-[color:var(--color-border)]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
              Your posting
            </p>
            <div className="md:col-span-2">
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
                What you asked for, and where to look
              </h2>
              <dl className="mt-10 divide-y divide-[color:var(--color-border)] border-y border-[color:var(--color-border)]">
                {audience.matches.map((m) => {
                  const cs = m.slug ? getCaseStudy(m.slug) : undefined;
                  return (
                    <div key={m.need} className="py-6 grid sm:grid-cols-[1fr_1.4fr] gap-3 sm:gap-8">
                      <dt className="font-medium text-[color:var(--color-foreground)]">
                        {m.need}
                      </dt>
                      <dd className="text-[color:var(--color-muted)] leading-relaxed">
                        {m.evidence}
                        {cs && (
                          <Link
                            href={`/work/${cs.slug}`}
                            className="mt-2 flex items-center gap-1.5 text-sm font-medium text-[color:var(--color-accent)] hover:underline"
                          >
                            {cs.title}
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        )}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--color-border)]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)] mb-10">
            Most relevant first
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {featured.map((cs) => (
              <CaseStudyCard key={cs.slug} caseStudy={cs} />
            ))}
          </div>
        </div>
      </section>

      {more.length > 0 && (
        <section className="border-t border-[color:var(--color-border)]">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)] mb-10">
              More work
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {more.map((cs) => (
                <CaseStudyCard key={cs.slug} caseStudy={cs} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-[color:var(--color-border)]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)] mb-10">
            Built in code
          </p>
          <CodeProjects />
        </div>
      </section>
    </div>
  );
}
