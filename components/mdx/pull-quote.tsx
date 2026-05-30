import type { ReactNode } from "react";

export function PullQuote({
  children,
  attribution,
}: {
  children: ReactNode;
  attribution?: string;
}) {
  return (
    <blockquote className="relative my-12 pl-6 border-l-2 border-[color:var(--color-accent)] not-italic">
      <div className="font-display text-3xl sm:text-4xl leading-tight tracking-tight text-[color:var(--color-foreground)] [&>p]:m-0">
        {children}
      </div>
      {attribution && (
        <footer className="mt-6 text-sm text-[color:var(--color-muted)] text-right">— {attribution}</footer>
      )}
    </blockquote>
  );
}
