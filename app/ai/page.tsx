import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How I Work with AI",
  description:
    "Designing the experience around AI in a regulated health product, from silent adaptation to consent flows, and how AI fits into my own design and prototyping practice.",
};

export default function AiPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)] mb-6">
        AI
      </p>
      <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
        How I work with AI,{" "}
        <span className="text-[color:var(--color-accent)]">in the product and in my practice.</span>
      </h1>

      <div className="prose prose-lg dark:prose-invert mt-12 max-w-none prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-[color:var(--color-foreground)] prose-p:leading-relaxed prose-li:text-[color:var(--color-foreground)] prose-a:text-[color:var(--color-accent)] prose-a:no-underline hover:prose-a:underline prose-strong:text-[color:var(--color-foreground)]">
        <p className="lead">
          I don&apos;t build models. I design the experience around them:
          deciding where AI should be visible, where it should stay out of the
          way, and where the person needs to be fully in control. In
          healthcare, getting that call right is most of the job.
        </p>

        <h2>Designing around AI in a regulated product</h2>

        <p>
          Lace Pro, the auditory training product I lead design for, uses AI in
          three places: an adaptive engine that picks each patient&apos;s next
          lesson and difficulty, AI voice cloning so patients can train with a
          loved one&apos;s voice, and AI trainers that guide and encourage
          patients. It&apos;s an FDA Class II device used in nearly 1,500
          clinics, so every one of those features has to earn trust from
          patients, audiologists, and regulators.
        </p>

        <h3>AI the patient never has to manage</h3>
        <p>
          The adaptive engine works silently. It uses the patient&apos;s
          performance to choose the next lesson and the next difficulty level,
          and it keeps adapting as they train. There are no settings to
          configure and no AI to talk to. The patient just keeps training, and
          the engine keeps them near the edge of their ability, which is where
          the therapy works.
        </p>
        <p>
          The design work was in how that feels. Sessions open with easier
          exercises so patients build confidence before difficulty ramps up,
          and they ease out at the end so patients finish feeling capable
          instead of frustrated. Lace Pro&apos;s patients are mostly older and
          not always confident with technology. For them, the best AI
          experience is one they don&apos;t have to think about.
        </p>

        <h3>Consent you can take back</h3>
        <p>
          Voice cloning is the most sensitive feature we have, so it&apos;s
          built as a consent flow: an invite to the person whose voice is
          used, a clear statement that the voice is AI-generated, a preview
          before use, control over when it&apos;s active, and the ability to
          revoke it. It&apos;s HIPAA and GDPR compliant, and it became the
          product&apos;s main differentiator.{" "}
          <Link href="/work/voices">Read the voice cloning case study</Link>.
        </p>

        <h2>AI in my own practice</h2>

        <p>
          I prototype in code, and Claude Code is my main prototyping
          environment. That changes what a prototype is: instead of a
          clickable picture, it&apos;s a working page built from real
          components that engineers can read and pick up.
        </p>
        <ul>
          <li>
            <strong>Prototypes from real components.</strong> The Lace Pro
            design system runs on variables for color, type, and sizing, which
            makes it readable by AI tools as well as people. Prototypes built
            on it look like the product because they are made of the product.
          </li>
          <li>
            <strong>Shipping code, not just mockups.</strong> I designed and
            built the{" "}
            <Link href="/work/pro-portal">ROI calculator&apos;s</Link> first
            working version, a{" "}
            <Link href="/work/certification-app">partner certification platform</Link>,
            and a{" "}
            <Link href="/work/pdf-system">case study generator</Link> that
            turned hours of layout into a single command.
          </li>
        </ul>

        <h2>Where AI fell short</h2>
        <p>
          We tried using AI to write lesson content for the auditory training
          itself. It came back fluent, but worded oddly in places, the facts
          were often wrong, and the jokes it added weren&apos;t tasteful or
          funny. We wrote the content ourselves and used AI for structure and
          editing only.
        </p>
        <p>
          That&apos;s the pattern I watch for. AI gets you to competent fast,
          and competent is where a lot of work stops. The judgment about what
          to ship still has to come from someone who knows the user.
        </p>

        <h2>What I&apos;d bring to a team</h2>
        <p>
          I haven&apos;t measured an AI velocity gain across a whole design
          team, and I&apos;m not going to invent one. What I&apos;d do is set a
          baseline first: how long work takes from brief to review today, and
          where the time actually goes. Then introduce AI where it removes
          real work, like prototyping from real components and first drafts of
          documentation, and measure against that baseline. Teams adopt tools
          when they can see the time they got back.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          href="/#work"
          className="inline-flex items-center rounded-full bg-[color:var(--color-foreground)] text-[color:var(--color-background)] px-6 py-3 text-sm font-medium transition hover:opacity-90"
        >
          See the work
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
