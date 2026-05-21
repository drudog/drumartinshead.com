import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { CaseStudyToc } from "@/components/case-study-toc";

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
      title: `${cs.title} — ${cs.subtitle}`,
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

  const { default: Content } = await import(`@/content/${slug}.mdx`);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)] transition mb-12"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to work
      </Link>

      <header className="max-w-4xl mb-12">
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

      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[color:var(--color-border)] mb-16">
        <Image
          src={cs.hero}
          alt={cs.title}
          fill
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="grid lg:grid-cols-[1fr_220px] gap-12">
        <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-tight prose-headings:scroll-mt-24 prose-h2:text-3xl prose-h3:text-2xl prose-p:text-[color:var(--color-foreground)] prose-p:leading-relaxed prose-a:text-[color:var(--color-accent)] prose-a:no-underline hover:prose-a:underline prose-strong:text-[color:var(--color-foreground)] prose-img:rounded-xl">
          <Content />
        </article>
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <CaseStudyToc />
          </div>
        </aside>
      </div>
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
