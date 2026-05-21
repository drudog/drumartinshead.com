import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-border)] mt-32">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row justify-between gap-6 text-sm text-[color:var(--color-muted)]">
        <p>© {new Date().getFullYear()} Dru Martin · Gainesville, FL</p>
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/drumartinshead/" target="_blank" rel="noreferrer" className="hover:text-[color:var(--color-foreground)] transition">
            LinkedIn
          </a>
          <a href="https://www.behance.net/drumartin" target="_blank" rel="noreferrer" className="hover:text-[color:var(--color-foreground)] transition">
            Behance
          </a>
          <Link href="/resume.pdf" className="hover:text-[color:var(--color-foreground)] transition">
            Resume
          </Link>
          <a href="mailto:drumartin@me.com" className="hover:text-[color:var(--color-foreground)] transition">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
