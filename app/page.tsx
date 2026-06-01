import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { CaseStudyFilter } from "@/components/case-study-filter";
import { Testimonial } from "@/components/testimonial";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="border-t border-[color:var(--color-border)]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
              Overview
            </p>
            <div className="md:col-span-2 max-w-3xl space-y-6 text-lg leading-relaxed text-[color:var(--color-foreground)]">
              <p>
                With <strong>Lace Pro</strong>, I helped transform auditory
                training from an afterthought into the standard of care in over{" "}
                <strong>1,000 Audiology clinics</strong>. The message? Hearing
                isn&apos;t just about the ears, it&apos;s about the brain.
              </p>
              <p>
                I design systems end-to-end, from concept to execution, at
                speed. Systems that align teams, drive desired customer
                behavior, and capitalize on market opportunities.
              </p>
              <p>
                In regulated healthcare environments where complexity is common,
                I design clear and compelling experiences throughout the
                customer lifecycle, from onboarding to adoption to expansion,
                with measurable impact.
              </p>
              <p>
                My diverse expertise spans outcome-driven print, marketing,
                UI/UX, and front-end engineering. In my free time I explore my
                passion for music and visual arts.
              </p>
              <p className="font-display text-xl text-[color:var(--color-accent)]">
                Technology should elevate people. That&apos;s the work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="work"
        className="border-t border-[color:var(--color-border)] scroll-mt-20"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="grid md:grid-cols-3 gap-10 items-start mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
              Selected Work
            </p>
            <div className="md:col-span-2">
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
                Case studies
              </h2>
              <p className="mt-4 text-[color:var(--color-muted)] max-w-2xl">
                Four projects from my time at Neurotone, building Lace Pro
                into the standard-of-care platform for auditory training in over
                1,000 clinics.
              </p>
            </div>
          </div>
          <CaseStudyFilter />
        </div>
      </section>

      <section className="border-t border-[color:var(--color-border)]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
              Past Work
            </p>
            <div className="md:col-span-2 max-w-2xl">
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
                Work samples from a past life
              </h2>
              <p className="mt-4 text-[color:var(--color-muted)]">
                Before Neurotone, I spent several years in B2B SaaS: leading
                UX at <strong className="text-[color:var(--color-foreground)]">SharpSpring</strong>, a marketing automation platform serving thousands of agencies and SMBs, and contributing design work at{" "}
                <strong className="text-[color:var(--color-foreground)]">Constant Contact</strong>, one of the largest email marketing platforms in the world. At both, I managed 4–5 person design teams while remaining hands-on as an IC. That chapter shaped how I think about complex workflow UX, multi-stakeholder products, and designing for users who live inside software all day.
              </p>
              <p className="mt-4 text-[color:var(--color-muted)]">
                Earlier UX and product design work from that period lives on my Behance profile.
              </p>
              <a
                href="https://www.behance.net/drumartin"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-foreground)] hover:text-[color:var(--color-accent)] transition"
              >
                View Behance profile →
              </a>
              <a
                href="https://www.behance.net/drumartin"
                target="_blank"
                rel="noreferrer"
                className="mt-6 block rounded-2xl overflow-hidden border border-[color:var(--color-border)] hover:opacity-90 transition"
              >
                <Image
                  src="/images/behance-thumb.jpg"
                  alt="Behance portfolio preview"
                  width={1200}
                  height={800}
                  className="w-full object-cover"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--color-border)]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
              Testimonials
            </p>
            <div className="md:col-span-2 space-y-12">
              <Testimonial
                quote="I've had the privilege of working with Dru at both SharpSpring and Neurotone, and I can tell you: he's the design leader you want when the stakes are high and the problem is hard. At SharpSpring he led UX across a complex marketing automation platform. At Neurotone, he translated clinical research into an AI-powered digital health product, owning product design end-to-end. In both cases he brought the same thing: genuine range across UX, design systems, and engineering collaboration, paired with an ego-free approach that makes teams better. Dru knows when to lead and when to support, and he reads that instinctively. In complex, high-stakes product environments, that kind of judgment is as valuable as any technical skill. If you're building a serious product design team, Dru is someone you build around."
                author="Shane Bouchard"
                role="Worked with Dru at SharpSpring and Neurotone"
              />
              <Testimonial
                quote="I've had the chance to work closely with Dru at both SharpSpring and Neurotone, and he's one of those designers who really thinks like a product person. He doesn't just focus on the UI; he's always thinking about the bigger picture and how design decisions impact the product, the users, and the business. At Neurotone we worked together during the evolution of Lace Pro, where Dru played an important role in helping shape the experience as the platform grew into a scalable, AI-driven product used by over 1,000 clinics. He has a great ability to translate complex ideas into intuitive experiences, especially in a space like healthcare where there are a lot of constraints and moving parts. What I appreciate most about Dru is that he works well across teams. He collaborates easily with engineering, product, marketing, and leadership, and keeps everyone focused on building something that actually solves real problems for users. He's thoughtful about systems, not just screens, and that mindset has made a real difference in the products we've built together."
                author="Josh Jordan"
                role="Worked on the same team as Dru at SharpSpring and Neurotone"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--color-border)]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
              Contact
            </p>
            <div className="md:col-span-2 max-w-2xl">
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
                Let&apos;s build something that lasts.
              </h2>
              <dl className="mt-10 grid sm:grid-cols-2 gap-8 text-sm">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)] mb-2">
                    Email
                  </dt>
                  <dd>
                    <a
                      href="mailto:drumartin@me.com"
                      className="text-[color:var(--color-foreground)] hover:text-[color:var(--color-accent)] transition"
                    >
                      drumartin@me.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)] mb-2">
                    Phone
                  </dt>
                  <dd>
                    <a
                      href="tel:+13522832887"
                      className="text-[color:var(--color-foreground)] hover:text-[color:var(--color-accent)] transition"
                    >
                      (352) 283-2887
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)] mb-2">
                    Location
                  </dt>
                  <dd className="text-[color:var(--color-foreground)]">
                    Gainesville, FL
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)] mb-2">
                    Online
                  </dt>
                  <dd className="space-y-1">
                    <a
                      href="https://www.linkedin.com/in/drumartinshead/"
                      target="_blank"
                      rel="noreferrer"
                      className="block text-[color:var(--color-foreground)] hover:text-[color:var(--color-accent)] transition"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://www.behance.net/drumartin"
                      target="_blank"
                      rel="noreferrer"
                      className="block text-[color:var(--color-foreground)] hover:text-[color:var(--color-accent)] transition"
                    >
                      Behance
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="mailto:drumartin@me.com"
                  className="inline-flex items-center rounded-full bg-[color:var(--color-foreground)] text-[color:var(--color-background)] px-6 py-3 text-sm font-medium transition hover:opacity-90"
                >
                  Get in touch
                </a>
                <Link
                  href="/2026-resume.pdf"
                  className="inline-flex items-center rounded-full border border-[color:var(--color-border)] px-6 py-3 text-sm font-medium hover:border-[color:var(--color-foreground)] transition"
                >
                  Download resume (PDF)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
