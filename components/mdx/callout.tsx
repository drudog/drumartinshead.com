import type { ReactNode } from "react";
import { Info, AlertTriangle, Lightbulb } from "lucide-react";

const variants = {
  info: { Icon: Info, classes: "border-[color:var(--color-accent)]" },
  warn: { Icon: AlertTriangle, classes: "border-amber-500" },
  insight: { Icon: Lightbulb, classes: "border-[color:var(--color-accent)]" },
};

export function Callout({
  variant = "info",
  children,
}: {
  variant?: keyof typeof variants;
  children: ReactNode;
}) {
  const { Icon, classes } = variants[variant];
  return (
    <aside
      className={`my-8 rounded-xl border-l-4 ${classes} bg-[color:var(--color-surface)] p-5 flex gap-4`}
    >
      <Icon className="h-5 w-5 mt-1 shrink-0 text-[color:var(--color-accent)]" />
      <div className="prose-p:my-0">{children}</div>
    </aside>
  );
}
