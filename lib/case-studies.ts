export type CaseStudyTag =
  | "AI"
  | "Behavioral Design"
  | "0→1"
  | "Platform"
  | "Regulated/Healthcare";

export type CaseStudy = {
  slug: "voices" | "evolution" | "retention" | "tinnitus-pro";
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  tags: CaseStudyTag[];
  hero: string;
  year: string;
  role: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "voices",
    number: "01",
    title: "AI Voice Cloning Initiative",
    subtitle: "Familiar Voice — personalization at scale in a regulated healthcare platform",
    summary:
      "Personalization improves clinical outcomes. Manual recording doesn't scale. I led the design of an AI voice cloning workflow that resolved both, becoming a primary market differentiator for Lace AI Pro.",
    tags: ["AI", "Regulated/Healthcare", "0→1"],
    hero: "/images/work/voices/screen-preview.png",
    year: "2025",
    role: "Lead Product Designer",
  },
  {
    slug: "evolution",
    number: "02",
    title: "Evolution",
    subtitle: "0→1 — Legacy LACE to Lace AI Pro",
    summary:
      "Legacy LACE had no AI roadmap, no scalability, and a fixed content library. I led the 0→1 redesign into Lace AI Pro, from strategy to clinical validation, in under a year.",
    tags: ["Platform", "Regulated/Healthcare", "0→1", "AI"],
    hero: "/images/work/evolution/product-page.png",
    year: "2024",
    role: "Lead Product Designer",
  },
  {
    slug: "retention",
    number: "03",
    title: "Gamified Retention",
    subtitle: "Training Map & Streak System",
    summary:
      "Patients needed 250+ exercises to reach clinical benefit. Most stopped before week two. I led the design of a behavioral retention system adapted from high-engagement consumer apps and tuned for a regulated healthcare context.",
    tags: ["Behavioral Design", "Regulated/Healthcare"],
    hero: "/images/work/retention/hero.svg",
    year: "2024",
    role: "Lead Product Designer",
  },
  {
    slug: "tinnitus-pro",
    number: "04",
    title: "Tinnitus Pro",
    subtitle: "From Zero — a tinnitus management platform",
    summary:
      "No existing product to reference. A patient population that's anxious, often older, and burned out on solutions that didn't work. I led the design of Tinnitus Pro from scratch, shaping everything from how patients first describe their symptoms to how the app earns their daily habit. And shipped it in under six months.",
    tags: ["0→1", "Regulated/Healthcare"],
    hero: "/images/work/tinnitus-pro/hero.svg",
    year: "2023",
    role: "Lead Product Designer",
  },
];

export const allTags: CaseStudyTag[] = [
  "AI",
  "Behavioral Design",
  "0→1",
  "Platform",
  "Regulated/Healthcare",
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
