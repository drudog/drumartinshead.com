export type CaseStudyTag =
  | "AI"
  | "Behavioral Design"
  | "0→1"
  | "Platform"
  | "Regulated/Healthcare";

export type CaseStudy = {
  slug: "voices" | "evolution" | "retention" | "tinnitus-pro" | "pdf-system" | "certification-app" | "beat-dagger";
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
    hero: "/images/work/voices/thumb.jpg",
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
    hero: "/images/work/evolution/thumb.jpg",
    year: "2024",
    role: "Lead Product Designer",
  },
  {
    slug: "retention",
    number: "03",
    title: "Gamified Retention",
    subtitle: "Training Map & Streaks — post-launch habit architecture",
    summary:
      "Patients needed 250+ exercises to reach clinical benefit. Most stopped before week two. I led the design of a behavioral retention system adapted from high-engagement consumer apps and tuned for a regulated healthcare context.",
    tags: ["Behavioral Design", "Regulated/Healthcare"],
    hero: "/images/work/retention/thumb.jpg",
    year: "2024",
    role: "Lead Product Designer",
  },
  {
    slug: "certification-app",
    number: "06",
    title: "Beacon Certification App",
    subtitle: "Partner Learning Platform — three-tier certification with no backend",
    summary:
      "Beacon's partner program needed a real certification experience, not another PDF. I designed and built a full-stack Next.js platform with progressive tier gating, sequential lesson locks, inline quizzes, and final assessments — with all state in localStorage and zero backend infrastructure.",
    tags: ["Platform", "0→1"],
    hero: "/images/work/certification-app/01-home.png",
    year: "2025",
    role: "Full-Stack Design & Engineering",
  },
  {
    slug: "pdf-system",
    number: "05",
    title: "Automated Case Study System",
    subtitle: "Scalable Sales Enablement — PDF generation from structured content",
    summary:
      "Neurotone's sales team needed a growing library of clinic-specific case studies, each looking custom-made. I built a Node.js + Puppeteer system that generates print-ready 6-page PDFs from a single content file — zero manual layout, under 30 seconds to rebuild the full library.",
    tags: ["Platform", "0→1"],
    hero: "/images/work/pdf-system/kovel-cover.png",
    year: "2025",
    role: "Systems Design & Engineering",
  },
  {
    slug: "tinnitus-pro",
    number: "04",
    title: "Tinnitus Pro",
    subtitle: "0→1 Launch — a direct-to-consumer tinnitus therapeutic",
    summary:
      "No existing product to reference. A patient population that's anxious, often older, and burned out on solutions that didn't work. I led the design of Tinnitus Pro from scratch — guided sound therapy and behavioral support delivered direct to consumers.",
    tags: ["0→1", "Regulated/Healthcare", "AI"],
    hero: "/images/work/tinnitus-pro/thumb.jpg",
    year: "2026",
    role: "Product Research & Lead Designer",
  },
  {
    slug: "beat-dagger",
    number: "07",
    title: "Beat Dagger",
    subtitle: "Browser Audio Tool — step-sequencer metronome and recording studio",
    summary:
      "A browser-based musician's tool I built for myself — record audio takes with a precision step-sequencer metronome running alongside, review your waveform, save named presets for different songs, and build a local library of recordings. No server. No sign-in. No installs.",
    tags: ["0→1"],
    hero: "/images/work/beat-dagger/logo.png",
    year: "2026",
    role: "Full-Stack Design & Engineering",
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
