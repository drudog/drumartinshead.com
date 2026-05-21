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
    number: "00",
    title: "Familiar Voice",
    subtitle: "AI voice cloning for hearing rehabilitation",
    summary:
      "Designing a voice-cloning experience that helps people with hearing loss retrain their ears using the voices they love.",
    tags: ["AI", "Regulated/Healthcare", "0→1"],
    hero: "/images/work/voices/hero.svg",
    year: "2025",
    role: "Lead Product Designer",
  },
  {
    slug: "evolution",
    number: "01",
    title: "Evolution",
    subtitle: "Legacy LACE → Lace AI Pro",
    summary:
      "Rebuilding a clinically proven auditory training platform from the ground up — modern stack, modern interaction, same clinical backbone.",
    tags: ["Platform", "Regulated/Healthcare", "0→1"],
    hero: "/images/work/evolution/hero.svg",
    year: "2024",
    role: "Lead Product Designer",
  },
  {
    slug: "retention",
    number: "02",
    title: "Retention",
    subtitle: "Gamified training map + streak system",
    summary:
      "A behavioral design system that turns daily auditory training into a habit through map progression, streaks, and gentle nudges.",
    tags: ["Behavioral Design", "Regulated/Healthcare"],
    hero: "/images/work/retention/hero.svg",
    year: "2024",
    role: "Lead Product Designer",
  },
  {
    slug: "tinnitus-pro",
    number: "03",
    title: "Tinnitus Pro",
    subtitle: "From zero — a tinnitus management platform",
    summary:
      "Zero-to-one product design for an evidence-based tinnitus management program, from research synthesis to launch-ready UI.",
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
