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
];

export function getAudience(slug: string): Audience | undefined {
  return audiences.find((a) => a.slug === slug);
}
