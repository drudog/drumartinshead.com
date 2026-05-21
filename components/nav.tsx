"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[color:var(--color-background)]/80 border-b border-[color:var(--color-border)]">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display font-semibold tracking-tight text-[color:var(--color-foreground)]"
        >
          Dru Martin
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => {
            const active =
              link.href === "/about" || link.href === "/contact"
                ? pathname === link.href
                : false;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm transition ${
                  active
                    ? "text-[color:var(--color-foreground)]"
                    : "text-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
