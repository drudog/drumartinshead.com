import type { ReactNode } from "react";

export function MetaGrid({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose my-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {children}
    </div>
  );
}

export function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 py-3 flex flex-col gap-1">
      <span className="text-[10px] font-semibold uppercase tracking-widest text-[color:var(--color-accent)]">
        {label}
      </span>
      <span className="text-sm font-medium leading-snug text-[color:var(--color-foreground)]">
        {value}
      </span>
    </div>
  );
}
