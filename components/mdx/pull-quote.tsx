import type { ReactNode } from "react";

export function PullQuote({
  children,
  attribution,
}: {
  children: ReactNode;
  attribution?: string;
}) {
  return (
    <blockquote className="my-10 border-l-2 border-[color:var(--color-accent)] pl-6 not-italic">
      <div className="font-display text-2xl sm:text-3xl leading-snug tracking-tight text-[color:var(--color-foreground)] [&>p]:m-0">
        {children}
      </div>
      {attribution && (
        <footer className="mt-4 text-sm text-[color:var(--color-muted)]">— {attribution}</footer>
      )}
    </blockquote>
  );
}
