import type { CaseStudy } from "./case-studies";

// One entry per application. Each becomes an unlisted page at /for/[slug]
// that leads with the case studies most relevant to that role.
export type Audience = {
  slug: string;
  company: string;
  role: string;
  intro: string[];
  // What the posting asks for, and where on the site the evidence lives.
  matches: { need: string; evidence: string; slug?: CaseStudy["slug"] }[];
  // Shown first, in this order. Remaining main case studies follow.
  featured: CaseStudy["slug"][];
  resume: string;
};

export const audiences: Audience[] = [
  {
    slug: "safelyyou",
    company: "SafelyYou",
    role: "Senior UX Designer",
    intro: [
      "Your posting describes care staff who didn't choose to be technology users and need to get in, get their work done, and get out. That's who I design for. Most Lace Pro patients are older adults with hearing loss, and the clinicians who enroll them do it inside a normal appointment.",
      "I put the most relevant work first. Each case study below maps to something in your posting.",
    ],
    matches: [
      {
        need: "Embedded partner to engineering in B2B and enterprise",
        evidence:
          "Nine years designing B2B software alongside the engineers building it at SharpSpring and Constant Contact. I still prototype in code before handing work to a developer.",
        slug: "workflow-builder",
      },
      {
        need: "Simple, fast interfaces for people who didn't choose technology",
        evidence:
          "Providers enroll a patient during a normal visit with a name and phone number. Patients sign in with no password.",
        slug: "pro-portal",
      },
      {
        need: "Measurable improvement in key workflows",
        evidence:
          "Daily training went from 20 minutes to 15 by removing interaction points and stops. Adherence runs 38% against about 30% for physical therapy.",
        slug: "evolution",
      },
      {
        need: "Alerts and notifications with the right timing and tone",
        evidence:
          "Notifications across push, text, and email, timed to the points where patients tend to drop out.",
        slug: "retention",
      },
      {
        need: "Usability research with care staff",
        evidence:
          "For Tinnitus Pro I interviewed audiologists and iterated working prototypes with clinicians as they used them.",
        slug: "tinnitus-pro",
      },
      {
        need: "A shared Figma library and UX standards",
        evidence:
          "I built Lace Pro's design system from scratch, with variables driving color, type, and sizing so it flexes for accessibility.",
        slug: "evolution",
      },
    ],
    featured: ["pro-portal", "evolution", "workflow-builder", "retention", "tinnitus-pro"],
    resume: "/resumes/dru-martin-resume-safelyyou.pdf",
  },
  {
    slug: "cvs-health",
    company: "CVS Health",
    role: "Senior Manager, UX Design",
    intro: [
      "Your posting asks for someone who connects customer needs, business goals, and technical realities, then frames the right problem before solving it. My clearest example is a billing problem: three pricing models in a provider portal, where the two that failed had nothing to do with the interface.",
      "I put the most relevant work first. Each case study below maps to something in your posting.",
    ],
    matches: [
      {
        need: "Frame problems in ambiguous spaces and connect business goals to technical constraints",
        evidence:
          "Three billing models in the Lace Pro provider portal. The first failed on the patient's invoice, a constraint outside our software. The second, a free trial, made a clinical recommendation look optional. The third took cost out of enrollment.",
        slug: "pro-portal",
      },
      {
        need: "Break complex problems into the right size and sequence",
        evidence:
          "We rebuilt a 20-year-old platform in under six months: flows first, then a design system of several hundred components, then flows built from those components, with desktop following launch.",
        slug: "evolution",
      },
      {
        need: "Measure impact over time",
        evidence:
          "Daily training went from 20 minutes to 15. Adherence runs 38% against about 30% for physical therapy, and 61% at our best clinics.",
        slug: "retention",
      },
      {
        need: "Represent design in a cross-functional leadership team, facilitate workshops, partner with content design",
        evidence:
          "Head of UX at SharpSpring, then manager of designers, researchers, and content designers at Constant Contact through an acquisition and a reorg. I set up story mapping, structured user testing, and design reviews with product and engineering.",
        slug: "leadership",
      },
      {
        need: "Design for a broad, complex, technical domain",
        evidence:
          "SharpSpring's workflow builder turned dense marketing automation logic into a map people could read.",
        slug: "workflow-builder",
      },
      {
        need: "Complex, regulated environments",
        evidence:
          "Lace Pro shipped under FDA Class II, HIPAA, and GDPR. The voice cloning feature was mostly a consent problem: invite, disclosure, preview, and revocation.",
        slug: "voices",
      },
      {
        need: "Use AI tools like Claude every day, and know what can be delegated",
        evidence:
          "Claude Code is my primary working environment; I built this partner certification platform with it. When we tried AI for lesson content, the facts were often wrong, so we wrote it ourselves and used AI for structure and editing.",
        slug: "certification-app",
      },
    ],
    featured: ["pro-portal", "evolution", "leadership", "retention", "workflow-builder", "voices"],
    resume: "/resumes/dru-martin-resume-cvs-health.pdf",
  },
  {
    slug: "drivecentric",
    company: "DriveCentric",
    role: "Senior Director of Product Design",
    intro: [
      "I've been in your situation twice: seven years designing a CRM and marketing automation platform that small businesses ran on, and leading the rebuild of a 20-year-old product into an AI-powered one now used in nearly 1,500 clinics.",
      "Your process asks for two deep case studies, one AI experience I shipped and one systems restructure. Both are below, along with the rest of what your posting asks for.",
    ],
    matches: [
      {
        need: "Shipped AI features in production, and what broke",
        evidence:
          "Lace Pro's adaptive engine changes a patient's difficulty on its own; I designed how it explains a change and where the override lives. Our AI avatar's encouragement sounded robotic and repetitive at launch, so we wrote a dozen versions so it stopped sounding scripted.",
        slug: "evolution",
      },
      {
        need: "Restructured a mature product under live customers, with a migration path",
        evidence:
          "SharpSpring's new visual workflow builder replaced a form-based builder customers ran their businesses on. Both ran side by side with opt-in, new accounts went straight to the new one, and a sunset date came only after months of overlap.",
        slug: "workflow-builder",
      },
      {
        need: "Trust, transparency, and consent in AI",
        evidence:
          "AI voice cloning lets a patient train with a loved one's voice. Most of the design work was consent: invite, disclosure, preview, and revocation.",
        slug: "voices",
      },
      {
        need: "Personally build working prototypes with AI tooling",
        evidence:
          "Claude Code is my primary environment. I built this partner certification platform end to end in Next.js and TypeScript.",
        slug: "certification-app",
      },
      {
        need: "Internal tooling that lets partners produce on-brand work",
        evidence:
          "A system that turns structured content files into on-brand sales case studies, so the sales team makes new ones without design in the loop.",
        slug: "pdf-system",
      },
      {
        need: "Lead, coach, and grow a design team",
        evidence:
          "About five years managing designers, researchers, and content designers at SharpSpring and Constant Contact, through an acquisition and a reorg. An intern I hired now leads growth design at Noom.",
        slug: "leadership",
      },
    ],
    featured: ["evolution", "workflow-builder", "voices", "leadership", "pro-portal", "retention"],
    resume: "/resumes/dru-martin-resume-drivecentric.pdf",
  },
];

export function getAudience(slug: string): Audience | undefined {
  return audiences.find((a) => a.slug === slug);
}
