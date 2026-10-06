import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Product design leader based in Gainesville, FL: B2B SaaS, AI product design, design systems, and 0→1 work in regulated environments.",
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
        Designing products that hold up{" "}
        <span className="text-[color:var(--color-accent)]">under pressure.</span>
      </h1>

      <div className="prose prose-lg dark:prose-invert mt-12 max-w-none prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-[color:var(--color-foreground)] prose-p:leading-relaxed prose-a:text-[color:var(--color-accent)] prose-a:no-underline hover:prose-a:underline">
        <p className="lead">
          I make complicated software simple enough that people keep using
          it. That&apos;s the result I get hired for, whether the user is a
          small business running its marketing or a patient doing hearing
          therapy at home.
        </p>

        <p>
          Since 2024 I&apos;ve led design at Neurotone AI. I rebuilt a
          20-year-old hearing therapy program and took it from first sketch to
          launch in under six months. It&apos;s now used in nearly 1,500
          audiology clinics and won an industry innovation award three years
          in a row. I also designed what keeps patients coming back: 38% stick
          with their training, compared with under 30% for physical therapy,
          and 61% at the best clinics.
        </p>

        <p>
          Before that I spent over nine years at SharpSpring and Constant
          Contact, growing from UX designer to Head of UX to Product Design
          Manager. I hired and led a design team and kept it steady through an
          acquisition and a reorg. At Constant Contact, designers, researchers,
          and content designers reported to me. One
          designer I hired as an intern now leads growth design at Noom. I
          still do the work myself, from research to prototypes in code.
        </p>

        <h2>Outside of work</h2>
        <p>
          When I&apos;m not designing, I play drums for two local Gainesville
          bands: <strong className="text-[color:var(--color-foreground)]">Supertwin</strong> and{" "}
          <strong className="text-[color:var(--color-foreground)]">BAD DOG</strong>.
          My son has picked it up too and plays drums in a band of his own with
          a few of his pre-teen friends. The rest of my free time usually
          involves a mountain bike.
        </p>

        <figure className="not-prose my-8">
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[color:var(--color-border)]">
            <Image
              src="/images/about/20260221_Skeletizer_Record_Release-1587.JPG"
              alt="Dru playing drums with Supertwin / BAD DOG"
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-2 text-xs text-[color:var(--color-muted)]">
            Photo credit: unknown
          </figcaption>
        </figure>

        <figure className="not-prose my-8">
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[color:var(--color-border)]">
            <Image
              src="/images/about/02_-5-positive-Edit.JPG"
              alt="Dru mountain biking"
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-2 text-xs text-[color:var(--color-muted)]">
            Photo credit: David Pettit George
          </figcaption>
        </figure>

        <h2>Let&apos;s talk</h2>
        <p>
          Contact me if you&apos;re hiring a Product Design Manager, Head of
          Design, or Staff or Principal Product Designer, especially for B2B
          software, AI products, or healthcare. I&apos;m in Gainesville, FL and
          work remotely.
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
