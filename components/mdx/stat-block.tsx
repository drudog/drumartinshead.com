import type { ReactNode } from "react";

export function StatBlock({ children }: { children: ReactNode }) {
  return (
    <div className="my-10 grid grid-cols-2 md:grid-cols-3 gap-6 border-y border-[color:var(--color-border)] py-8">
      {children}
    </div>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[color:var(--color-foreground)]">
        {value}
      </p>
      <p className="mt-1 text-sm text-[color:var(--color-muted)]">{label}</p>
    </div>
  );
}
