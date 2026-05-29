import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Product design leader based in Gainesville, FL — healthcare digitalization, behavioral design, 0→1 product work.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">

      {/* Hero banner */}
      <div className="relative w-full aspect-[3/1] rounded-2xl overflow-hidden mb-12 bg-[color:var(--color-border)]">
        <Image
          src="/images/avatar-hero.png"
          alt="Dru Martin"
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover object-center"
          priority
        />
      </div>

      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)] mb-6">
        About
      </p>
      <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
        Designing products for the moments people are most vulnerable.
      </h1>

      <div className="prose prose-lg dark:prose-invert mt-12 max-w-none prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-[color:var(--color-foreground)] prose-p:leading-relaxed prose-a:text-[color:var(--color-accent)] prose-a:no-underline hover:prose-a:underline">
        <p className="lead">
          I&apos;m Dru — a product design leader based in Gainesville, FL. I&apos;ve
          spent the last several years focused on healthcare digitalization,
          translating clinically validated programs into experiences clinicians
          trust and patients return to.
        </p>

        <h2>How I work</h2>
        <p>
          I take ownership end-to-end: discovery, research synthesis, IA,
          interaction, visual, prototype, handoff, and the inevitable
          post-launch iteration. I care about the moments users are most
          vulnerable — the first session, the relapse, the unclear instruction
          — because that&apos;s where bad design does the most damage.
        </p>

        <h2>What I&apos;m good at</h2>
        <ul>
          <li>Zero-to-one product design in regulated environments</li>
          <li>Translating clinical and research protocols into product</li>
          <li>Behavioral design — habit loops, streaks, motivational scaffolding</li>
          <li>Design systems that hold up across long-running product surfaces</li>
          <li>Working closely with engineering and clinical/research stakeholders</li>
        </ul>

        <h2>Background</h2>
        <p>
          Most recently, I&apos;ve led design at Neurotone AI — including the
          redesign of LACE (a two-decade-old auditory training platform used in
          audiology clinics), the launch of AI voice cloning for personalized
          training, and a zero-to-one tinnitus management product.
        </p>

      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          href="/2026-resume.pdf"
          className="inline-flex items-center rounded-full bg-[color:var(--color-foreground)] text-[color:var(--color-background)] px-6 py-3 text-sm font-medium transition hover:opacity-90"
        >
          Download resume (PDF)
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full border border-[color:var(--color-border)] px-6 py-3 text-sm font-medium hover:border-[color:var(--color-foreground)] transition"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
}
