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
                Fourteen years of product design, most of it where the
                stakes are high and the workflows are messy: B2B SaaS platforms
                serving millions of small businesses, and AI healthcare
                products where the outcomes are clinical.
              </p>
              <p>
                I&apos;ve led design teams at <strong>SharpSpring</strong> and{" "}
                <strong>Constant Contact</strong>, going head-to-head with
                HubSpot in marketing automation, and stayed hands-on the whole
                time. Most recently, with <strong>Lace Pro</strong>, I helped
                transform auditory training from an afterthought into the
                standard of care in nearly <strong>1,500 audiology clinics</strong>.
              </p>
              <p>
                I design systems end-to-end, from concept to execution, at
                speed. Systems that give teams a shared direction, move users
                toward the right behavior, and don&apos;t fall apart when the
                product scales.
              </p>
              <p>
                Complex domains are complicated by default. My job is to make
                the experience feel otherwise: whether that&apos;s an agency
                managing fifty client campaigns or a patient finishing a
                twelve-week program.
              </p>
              <p>
                I&apos;ve done the work across the stack: print, marketing,
                UI/UX, and enough front-end engineering to ship my own tools.
                In my free time I explore my passion for music and visual arts.
              </p>
              <p className="font-display text-xl text-[color:var(--color-accent)]">
                Technology should elevate people. That&apos;s the work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--color-border)]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
              Leadership
            </p>
            <div className="md:col-span-2 max-w-2xl">
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
                Nine years in B2B SaaS, five-plus leading design
              </h2>
              <p className="mt-4 text-[color:var(--color-muted)]">
                At <strong className="text-[color:var(--color-foreground)]">SharpSpring</strong>, a marketing automation platform for agencies and SMBs, I grew from UX designer to Head of UX and built the design team: hiring, critique, reviews, and the routines it ran on. Designers, researchers, and content designers reported to me. I carried that team through the{" "}
                <strong className="text-[color:var(--color-foreground)]">Constant Contact</strong> acquisition, then took over a new team after the reorg that followed.
              </p>
              <ul className="mt-6 space-y-3 text-[color:var(--color-foreground)]">
                <li>A designer I hired as an intern now leads growth design at Noom.</li>
                <li>The team stayed intact through the acquisition and kept shipping through layoffs.</li>
                <li>My team designed Constant Contact&apos;s upsell flows, with daily active usage as a core metric.</li>
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Link
                  href="/work/leadership"
                  className="inline-flex items-center rounded-full bg-[color:var(--color-foreground)] text-[color:var(--color-background)] px-6 py-3 text-sm font-medium transition hover:opacity-90"
                >
                  Read the leadership case study
                </Link>
                <a
                  href="https://www.behance.net/drumartin"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)] transition"
                >
                  Earlier B2B work on Behance →
                </a>
              </div>
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
                Team leadership, AI product design, platform modernization,
                behavioral systems, and design engineering. Some of it shipped
                to nearly 1,500 clinics.
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
              Testimonials
            </p>
            <div className="md:col-span-2 space-y-12">
              <Testimonial
                quote="It's hard to overstate the impact Dru has had on my career. I can genuinely say I owe my career in Product to him. Dru hired me as an intern at SharpSpring when I was making the leap from graphic and web design into UX. Dru saw potential in me, took a chance on me, and then patiently gave me the space to grow into it. He has a calm, steady way of helping people grow without trying to shape them into a particular mold. Looking back, I realize how much of the way I lead designers today was shaped during those years."
                author="Savannah Chase"
                role="Growth Product Design Lead & Manager; reported to Dru at SharpSpring"
              />
              <Testimonial
                quote="Working with Dru was an exceptional experience. He was my manager at both SharpSpring and Constant Contact following the acquisition, and I can confidently say he's the best manager I've had in my entire career. Dru stands out because he genuinely values input, whether it's about strategy, design concepts, or concerns. He actively listens, strives to fully understand your perspective, and provides thoughtful responses, even if it means taking some time to gather additional insights. In stakeholder meetings, Dru consistently brings a unique viewpoint, often uncovering brilliant ideas that others overlook. His ability to think creatively and outside the conventional bounds significantly enhances team dynamics and project outcomes. If given the chance, I would jump at the opportunity to work with Dru again. He's not just a remarkable manager but also a skilled designer and a great friend. Any company would be lucky to have him."
                author="Aaron Cougle"
                role="Reported to Dru at SharpSpring and Constant Contact"
              />
              <Testimonial
                quote="I've had the privilege of working with Dru at both SharpSpring and Neurotone, and I can tell you: he's the design leader you want when the stakes are high and the problem is hard. At SharpSpring he led UX across a complex marketing automation platform. At Neurotone, he translated clinical research into an AI-powered digital health product, owning product design end-to-end. In both cases he brought the same thing: genuine range across UX, design systems, and engineering collaboration, paired with an ego-free approach that makes teams better. Dru knows when to lead and when to support, and he reads that instinctively. In complex, high-stakes product environments, that kind of judgment is as valuable as any technical skill. If you're building a serious product design team, Dru is someone you build around."
                author="Shane Bouchard"
                role="Dru's manager at SharpSpring, later a colleague at Neurotone"
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
                      href="mailto:parsley.hatchet_7n@icloud.com"
                      className="text-[color:var(--color-foreground)] hover:text-[color:var(--color-accent)] transition"
                    >
                      Send an email
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)] mb-2">
                    Phone
                  </dt>
                  <dd>
                    <a
                      href="tel:+13524485475"
                      className="text-[color:var(--color-foreground)] hover:text-[color:var(--color-accent)] transition"
                    >
                      (352) 448-5475
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
                  href="mailto:parsley.hatchet_7n@icloud.com"
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
