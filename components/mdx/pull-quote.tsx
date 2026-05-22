import type { ReactNode } from "react";

export function PullQuote({
  children,
  attribution,
}: {
  children: ReactNode;
  attribution?: string;
}) {
  return (
    <blockquote className="relative my-12 border-t-2 border-[color:var(--color-accent)] pt-8 not-italic">
      <span className="pointer-events-none select-none absolute -top-4 left-0 font-display text-8xl leading-none text-[color:var(--color-accent)] opacity-20">
        &ldquo;
      </span>
      <div className="font-display text-3xl sm:text-4xl leading-tight tracking-tight text-[color:var(--color-foreground)] [&>p]:m-0">
        {children}
      </div>
      {attribution && (
        <footer className="mt-6 text-sm text-[color:var(--color-muted)]">— {attribution}</footer>
      )}
    </blockquote>
  );
}
