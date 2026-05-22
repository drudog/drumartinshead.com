import type { ReactNode } from "react";

export function StatBlock({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose my-10 grid grid-cols-2 md:grid-cols-3 gap-8 bg-[color:var(--color-surface)] border border-[color:var(--color-border)] rounded-2xl p-8 sm:p-10">
      {children}
    </div>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-t-2 border-[color:var(--color-accent)] pt-5">
      <p className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-[color:var(--color-accent)]">
        {value}
      </p>
      <p className="mt-2 text-sm text-[color:var(--color-muted)]">{label}</p>
    </div>
  );
}
