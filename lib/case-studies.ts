export type CaseStudyTag =
  | "Leadership"
  | "B2B"
  | "Brand"
  | "AI"
  | "Behavioral Design"
  | "0→1"
  | "Platform"
  | "Regulated/Healthcare";

export type CaseStudy = {
  slug: "leadership" | "pro-portal" | "workflow-builder" | "brand" | "voices" | "evolution" | "retention" | "tinnitus-pro" | "pdf-system" | "certification-app" | "beat-dagger" | "afternoon-orders";
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  tags: CaseStudyTag[];
  hero: string;
  heroPage?: string;
  year: string;
  role: string;
  section: "main" | "code";
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "evolution",
    number: "01",
    title: "Evolution",
    subtitle: "0→1: Legacy LACE to Lace Pro",
    summary:
      "Legacy LACE had no AI roadmap, no scalability, and a fixed content library. I led the 0→1 redesign into Lace Pro, from strategy to clinical validation, in under a year.",
    tags: ["Platform", "Regulated/Healthcare", "0→1", "AI"],
    hero: "/images/work/evolution/hero-lace.png",
    year: "2025",
    role: "Lead Product Designer",
    section: "main",
  },
  {
    slug: "leadership",
    number: "02",
    title: "Building a Design Team",
    subtitle: "SharpSpring and Constant Contact: from first manager through an acquisition and a reorg",
    summary:
      "I grew from designer to Head of UX at SharpSpring, built the design team, and led it through the Constant Contact acquisition. At Constant Contact I managed designers, researchers, and content designers. An intern I hired now leads growth design at Noom.",
    tags: ["Leadership", "B2B"],
    hero: "/images/work/leadership/hero-leadership.svg",
    year: "2018–2024",
    role: "Head of UX · Product Design Manager",
    section: "main",
  },
  {
    slug: "pro-portal",
    number: "03",
    title: "Provider Portal & Pricing",
    subtitle: "Three billing models, two failures, and the ROI calculator behind the one that worked",
    summary:
      "Patients only get Lace Pro if an audiologist enrolls them, so the provider portal is the front door. I designed enrollment to fit inside the appointment, shipped three billing models to find one clinics would use, and built the first version of the ROI calculator reps use to sell it.",
    tags: ["B2B", "Regulated/Healthcare"],
    hero: "/images/work/pro-portal/hero-roi-calculator.jpg",
    year: "2024–2025",
    role: "Lead Product Designer",
    section: "main",
  },
  {
    slug: "workflow-builder",
    number: "04",
    title: "Visual Workflow Builder",
    subtitle: "SharpSpring: turning dense marketing automation logic into a map people can read",
    summary:
      "SharpSpring's automation engine was powerful but buried in forms and dropdowns. I designed a visual builder that shows every workflow as a branching decision tree, with a visual language for each kind of step and rules that read like sentences.",
    tags: ["B2B", "Platform"],
    hero: "/images/work/workflow-builder/hero-workflow-builder.jpg",
    year: "2018",
    role: "Head of UX · Sole Designer",
    section: "main",
  },
  {
    slug: "brand",
    number: "05",
    title: "Brand & Launch Creative",
    subtitle: "Neurotone: running the brand after the agency handoff, and launching Tinnitus Pro",
    summary:
      "An agency built Neurotone's brand and handed it off. I've run it since: a livelier palette, type rules in the design system, deck and email templates, and new landing pages. For Tinnitus Pro I created the brand and all the launch creative, from a countdown email campaign to a video mailer for prospective clinics.",
    tags: ["Brand", "Regulated/Healthcare"],
    hero: "/images/work/brand/hero-brand.jpg",
    year: "2024–2026",
    role: "Lead Product Designer · Brand",
    section: "main",
  },
  {
    slug: "voices",
    number: "06",
    title: "AI Voice Cloning Initiative",
    subtitle: "Familiar Voice: personalization at scale in a regulated healthcare platform",
    summary:
      "Personalization improves clinical outcomes. Manual recording doesn't scale. I led the design of an AI voice cloning workflow that resolved both, becoming a primary market differentiator for Lace Pro.",
    tags: ["AI", "Regulated/Healthcare", "0→1"],
    hero: "/images/work/voices/hero-voices.png",
    year: "2025",
    role: "Lead Product Designer",
    section: "main",
  },
  {
    slug: "retention",
    number: "07",
    title: "Gamified Retention",
    subtitle: "Training Map & Streaks: post-launch habit architecture",
    summary:
      "Most patients stopped training before week two. I led the design of a behavioral retention system adapted from high-engagement consumer apps and tuned for a regulated healthcare context. The data it produced measured the clinical dose for the first time: 250+ exercises.",
    tags: ["Behavioral Design", "Regulated/Healthcare"],
    hero: "/images/work/retention/hero-fun-02.png",
    year: "2025",
    role: "Lead Product Designer",
    section: "main",
  },
  {
    slug: "tinnitus-pro",
    number: "08",
    title: "Tinnitus Pro",
    subtitle: "0→1 Launch: a provider-prescribed tinnitus therapeutic",
    summary:
      "No existing product to reference. A patient population that's anxious, often older, and burned out on solutions that didn't work. I led the design of Tinnitus Pro from scratch: guided sound therapy and behavioral support prescribed by audiologists and managed at home by patients.",
    tags: ["0→1", "Regulated/Healthcare", "AI"],
    hero: "/images/work/tinnitus-pro/hero-copy.png",
    year: "2026",
    role: "Product Research & Lead Designer",
    section: "main",
  },
  {
    slug: "pdf-system",
    number: "09",
    title: "Automated Case Study System",
    subtitle: "Scalable Sales Enablement: PDF generation from structured content",
    summary:
      "Neurotone's sales team needed a growing library of clinic-specific case studies, each looking custom-made. I built a Node.js + Puppeteer system that generates print-ready 6-page PDFs from a single content file, zero manual layout, under 30 seconds to rebuild the full library.",
    tags: ["Platform", "0→1"],
    hero: "/images/work/pdf-system/hero-study.png",
    year: "2026",
    role: "Systems Design & Engineering",
    section: "code",
  },
  {
    slug: "certification-app",
    number: "10",
    title: "Beacon Certification App",
    subtitle: "Partner Learning Platform: three-tier certification, zero infrastructure cost",
    summary:
      "Lace Pro's partner program needed a real certification experience, not another PDF. I designed and built a full-stack Next.js platform with progressive tier gating, sequential lesson locks, inline quizzes, and final assessments, with all state in localStorage and zero backend infrastructure.",
    tags: ["Platform", "0→1"],
    hero: "/images/work/certification-app/01-home.png",
    year: "2026",
    role: "Full-Stack Design & Engineering",
    section: "code",
  },
  {
    slug: "afternoon-orders",
    number: "11",
    title: "Afternoon Orders",
    subtitle: "Mobile Ordering PWA: a coffee shop's own ordering flow built directly on Square",
    summary:
      "Square's own online ordering is either a generic storefront template or locked behind a higher plan. I built a mobile-first ordering PWA directly on Square's Catalog, Orders, and Payments APIs, browse, customize, and pay for pickup, matching the shop's actual brand and its slower afternoon traffic pattern instead of a rush-hour template.",
    tags: ["0→1", "Platform"],
    hero: "/images/work/afternoon-orders/hero-afternoon-orders.jpg",
    year: "2026",
    role: "Full-Stack Design & Engineering",
    section: "code",
  },
  {
    slug: "beat-dagger",
    number: "12",
    title: "Beat Dagger",
    subtitle: "Browser Audio Tool: step-sequencer metronome and recording studio",
    summary:
      "A browser-based musician's tool I built for myself: record audio takes with a precision step-sequencer metronome running alongside, review your waveform, save named presets for different songs, and build a local library of recordings. No server. No sign-in. No installs.",
    tags: ["0→1"],
    hero: "/images/work/beat-dagger/logo.png",
    year: "2026",
    role: "Full-Stack Design & Engineering",
    section: "code",
  },
];

export const allTags: CaseStudyTag[] = [
  "Leadership",
  "B2B",
  "Brand",
  "AI",
  "Behavioral Design",
  "0→1",
  "Platform",
  "Regulated/Healthcare",
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getAdjacentCaseStudies(slug: string): {
  prev: CaseStudy | null;
  next: CaseStudy | null;
} {
  const index = caseStudies.findIndex((cs) => cs.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? caseStudies[index - 1] : null,
    next: index < caseStudies.length - 1 ? caseStudies[index + 1] : null,
  };
}
