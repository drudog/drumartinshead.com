import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { caseStudies, getCaseStudy, getAdjacentCaseStudies } from "@/lib/case-studies";
import { CaseStudyToc } from "@/components/case-study-toc";
import { AnimateFadeUp } from "@/components/animate-fade-up";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: cs.title,
    description: cs.summary,
    openGraph: {
      title: `${cs.title}: ${cs.subtitle}`,
      description: cs.summary,
      images: [cs.hero],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const { prev, next } = getAdjacentCaseStudies(slug);
  const { default: Content } = await import(`@/content/${slug}.mdx`);

  return (
    <div>
      {/* Constrained header */}
      <AnimateFadeUp>
        <div className="mx-auto max-w-6xl px-6 pt-12 sm:pt-16 pb-10">
          {/* Top nav row */}
          <div className="flex items-center justify-between mb-12">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)] transition"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to work
            </Link>
            <div className="flex items-center gap-6 text-sm">
              {prev && (
                <Link
                  href={`/work/${prev.slug}`}
                  className="inline-flex items-center gap-1.5 text-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)] transition"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span className="font-mono text-xs">{prev.number}</span>
                  <span className="hidden sm:inline">{prev.title}</span>
                </Link>
              )}
              {next && (
                <Link
                  href={`/work/${next.slug}`}
                  className="inline-flex items-center gap-1.5 text-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)] transition"
                >
                  <span className="hidden sm:inline">{next.title}</span>
                  <span className="font-mono text-xs">{next.number}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </div>
          </div>

          <div className="relative overflow-hidden">
            {/* Decorative case number */}
            <span className="pointer-events-none select-none absolute -top-6 right-0 hidden sm:block font-display font-bold leading-none text-[color:var(--color-border)]" style={{ fontSize: "18rem" }}>
              {cs.number}
            </span>

            <header className="relative max-w-4xl mb-12">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)] mb-6">
                Case Study · {cs.number}
              </p>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
                {cs.title}
              </h1>
              <p className="mt-4 text-xl sm:text-2xl text-[color:var(--color-muted)]">
                {cs.subtitle}
              </p>
              <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm border-t border-[color:var(--color-border)] pt-8">
                <Meta label="Year" value={cs.year} />
                <Meta label="Role" value={cs.role} />
                <Meta label="Tags" value={cs.tags.join(" · ")} />
              </dl>
            </header>
          </div>
        </div>
      </AnimateFadeUp>

      {/* Full-bleed hero */}
      <AnimateFadeUp delay={0.1}>
        <div className="relative w-full aspect-[21/9] overflow-hidden bg-[color:var(--color-border)] mb-16">
          <Image
            src={cs.heroPage ?? cs.hero}
            alt=""
            fill
            sizes="100vw"
            className="object-cover scale-110 blur-2xl opacity-60 pointer-events-none select-none"
            aria-hidden
          />
          <Image
            src={cs.heroPage ?? cs.hero}
            alt={cs.title}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>
      </AnimateFadeUp>

      {/* Constrained article */}
      <AnimateFadeUp delay={0.15}>
        <div className="mx-auto max-w-6xl px-6 pb-16 sm:pb-24">
          <div className="grid lg:grid-cols-[1fr_220px] gap-12">
            <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-tight prose-headings:scroll-mt-24 prose-h3:text-2xl prose-p:text-[color:var(--color-foreground)] prose-p:leading-relaxed prose-a:text-[color:var(--color-accent)] prose-a:no-underline hover:prose-a:underline prose-strong:text-[color:var(--color-foreground)] prose-img:rounded-xl">
              <Content />
            </article>
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <CaseStudyToc />
              </div>
            </aside>
          </div>

          {/* Bottom prev/next navigation */}
          {(prev || next) && (
            <div className="mt-16 pt-10 border-t border-[color:var(--color-border)]">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  {prev && (
                    <Link
                      href={`/work/${prev.slug}`}
                      className="group flex flex-col gap-2 p-6 rounded-2xl border border-[color:var(--color-border)] hover:border-[color:var(--color-accent)] hover:bg-[color:var(--color-surface)] transition"
                    >
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[color:var(--color-muted)] group-hover:text-[color:var(--color-accent)] transition">
                        <ArrowLeft className="h-3 w-3" />
                        Previous
                      </span>
                      <span className="font-mono text-xs text-[color:var(--color-muted)]">{prev.number}</span>
                      <span className="font-display text-lg sm:text-xl font-semibold tracking-tight text-[color:var(--color-foreground)] leading-tight">
                        {prev.title}
                      </span>
                      <span className="text-sm text-[color:var(--color-muted)]">{prev.role}</span>
                    </Link>
                  )}
                </div>
                <div>
                  {next && (
                    <Link
                      href={`/work/${next.slug}`}
                      className="group flex flex-col gap-2 p-6 rounded-2xl border border-[color:var(--color-border)] hover:border-[color:var(--color-accent)] hover:bg-[color:var(--color-surface)] transition text-right"
                    >
                      <span className="inline-flex items-center justify-end gap-1.5 text-xs font-mono uppercase tracking-widest text-[color:var(--color-muted)] group-hover:text-[color:var(--color-accent)] transition">
                        Next
                        <ArrowRight className="h-3 w-3" />
                      </span>
                      <span className="font-mono text-xs text-[color:var(--color-muted)]">{next.number}</span>
                      <span className="font-display text-lg sm:text-xl font-semibold tracking-tight text-[color:var(--color-foreground)] leading-tight">
                        {next.title}
                      </span>
                      <span className="text-sm text-[color:var(--color-muted)]">{next.role}</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </AnimateFadeUp>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)] mb-1">
        {label}
      </dt>
      <dd className="text-[color:var(--color-foreground)]">{value}</dd>
    </div>
  );
}
