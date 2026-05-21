"use client";

import { useState, useMemo } from "react";
import { caseStudies, allTags, type CaseStudyTag } from "@/lib/case-studies";
import { CaseStudyCard } from "./case-study-card";

export function CaseStudyFilter() {
  const [active, setActive] = useState<CaseStudyTag | "all">("all");

  const filtered = useMemo(() => {
    if (active === "all") return caseStudies;
    return caseStudies.filter((cs) => cs.tags.includes(active));
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        <FilterChip label="All" active={active === "all"} onClick={() => setActive("all")} />
        {allTags.map((tag) => (
          <FilterChip
            key={tag}
            label={tag}
            active={active === tag}
            onClick={() => setActive(tag)}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {filtered.map((cs) => (
          <CaseStudyCard key={cs.slug} caseStudy={cs} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-[color:var(--color-muted)] text-center py-12">
          No case studies match that filter yet.
        </p>
      )}
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 text-sm rounded-full border transition ${
        active
          ? "bg-[color:var(--color-foreground)] text-[color:var(--color-background)] border-[color:var(--color-foreground)]"
          : "border-[color:var(--color-border)] text-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)] hover:border-[color:var(--color-foreground)]"
      }`}
    >
      {label}
    </button>
  );
}
