import Link from "next/link";
import { Hero } from "@/components/hero";
import { CaseStudyFilter } from "@/components/case-study-filter";
import { Testimonial } from "@/components/testimonial";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="border-t border-[color:var(--color-border)]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
              01 · About
            </p>
            <div className="md:col-span-2 max-w-2xl">
              <p className="font-display text-2xl sm:text-3xl leading-snug tracking-tight">
                I&apos;m a product design leader based in Gainesville, FL. For
                the past several years I&apos;ve focused on healthcare
                digitalization — translating clinically validated programs into
                products people actually want to use.
              </p>
              <p className="mt-6 text-[color:var(--color-muted)] leading-relaxed">
                Most recently, I&apos;ve led design for Lace AI&apos;s suite of
                hearing rehabilitation tools — including the redesign of a
                two-decade-old clinical platform and the launch of AI voice
                cloning for personalized training.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-block text-sm font-medium text-[color:var(--color-foreground)] hover:text-[color:var(--color-accent)] transition"
              >
                More about me →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="border-t border-[color:var(--color-border)] scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="grid md:grid-cols-3 gap-10 items-start mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
              02 · Selected Work
            </p>
            <div className="md:col-span-2">
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
                Case studies
              </h2>
              <p className="mt-4 text-[color:var(--color-muted)] max-w-2xl">
                A few projects that show how I work — research, behavioral
                design, regulated environments, zero-to-one product thinking.
              </p>
            </div>
          </div>
          <CaseStudyFilter />
        </div>
      </section>

      <section className="border-t border-[color:var(--color-border)]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
              03 · Testimonials
            </p>
            <div className="md:col-span-2 space-y-10">
              <Testimonial
                quote="Dru is a rare combination of clinical empathy and product instinct. He's the designer I want in the room when we're building something patients will actually rely on."
                author="Shane Bouchard"
                role="Founder & CEO, Lace AI"
              />
              <Testimonial
                quote="He owns the design problem end-to-end — from research to handoff — and pushes the work beyond what we asked for, in a way that always lands."
                author="Josh Jordan"
                role="Head of Product"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--color-border)]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
              04 · Contact
            </p>
            <div className="md:col-span-2 max-w-2xl">
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
                Let&apos;s build something that lasts.
              </h2>
              <p className="mt-4 text-[color:var(--color-muted)]">
                Open to senior and lead product design roles in healthcare,
                regulated industries, and AI-native products.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:drumartin@me.com"
                  className="inline-flex items-center rounded-full bg-[color:var(--color-foreground)] text-[color:var(--color-background)] px-6 py-3 text-sm font-medium transition hover:opacity-90"
                >
                  drumartin@me.com
                </a>
                <Link
                  href="/resume.pdf"
                  className="inline-flex items-center rounded-full border border-[color:var(--color-border)] px-6 py-3 text-sm font-medium hover:border-[color:var(--color-foreground)] transition"
                >
                  Resume (PDF)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
