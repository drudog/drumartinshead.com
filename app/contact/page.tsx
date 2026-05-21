import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Dru Martin.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)] mb-6">
        Contact
      </p>
      <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
        Let&apos;s talk.
      </h1>
      <p className="mt-6 text-lg text-[color:var(--color-muted)] max-w-xl leading-relaxed">
        The best way to reach me is by email or phone.
      </p>

      <dl className="mt-12 grid sm:grid-cols-2 gap-8 text-sm">
        <ContactItem label="Email" value="drumartin@me.com" href="mailto:drumartin@me.com" />
        <ContactItem label="Phone" value="(352) 283-2887" href="tel:+13522832887" />
        <ContactItem label="Address" value={"2105 NW 9th Ave.\nGainesville, FL 32603"} />
        <ContactItem label="LinkedIn" value="linkedin.com/in/drumartinshead" href="https://www.linkedin.com/in/drumartinshead/" />
        <ContactItem label="Behance" value="behance.net/drumartin" href="https://www.behance.net/drumartin" />
      </dl>
    </div>
  );
}

function ContactItem({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div>
      <dt className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)] mb-2">
        {label}
      </dt>
      <dd className="whitespace-pre-line">
        {href ? (
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="text-[color:var(--color-foreground)] hover:text-[color:var(--color-accent)] transition"
          >
            {value}
          </a>
        ) : (
          <span className="text-[color:var(--color-foreground)]">{value}</span>
        )}
      </dd>
    </div>
  );
}
