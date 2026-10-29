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
          "Daily training went from 20 minutes to 15 by removing interaction points and stops. Adherence to our training runs 38% against about 30% for physical therapy.",
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
          "Daily training went from 20 minutes to 15. Adherence to our training runs 38% against about 30% for physical therapy, and 61% at our best clinics.",
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
          "Claude Code is my primary working environment; I built this partner certification platform with it. When AI generated our lesson content, the facts were often wrong, so nothing ships until a person reviews and approves it.",
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
          "Lace Pro's adaptive engine picks each patient's next lesson and difficulty without asking, designed to be invisible. Our AI avatar's encouragement sounded robotic and repetitive at launch, so we wrote a dozen versions so it stopped sounding scripted.",
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
  {
    slug: "birdeye",
    company: "Birdeye",
    role: "Principal AI-Native Product Designer",
    intro: [
      "I've designed the kind of marketing automation your agents are replacing: seven years on SharpSpring's marketing automation platform, including its visual workflow builder. For the last two years I've designed production AI for a product used in nearly 1,500 clinics.",
      "I put the most relevant work first. Each case study below maps to something in your posting.",
    ],
    matches: [
      {
        need: "Make complex automation self-service for non-technical users",
        evidence:
          "SharpSpring's visual workflow builder turned rules buried in forms into a decision tree people could read. Customers told support they were setting up automations they had never tried before.",
        slug: "workflow-builder",
      },
      {
        need: "Knowing when AI should be visible and when it shouldn't",
        evidence:
          "Lace Pro's adaptive engine picks each patient's next lesson and difficulty as they train. The design job was to make it invisible: easy openers and an ease-out at the end of each session.",
        slug: "evolution",
      },
      {
        need: "Generative AI's limits: hallucination and output that feels false",
        evidence:
          "AI-generated lesson content came back fluent with the facts often wrong, so people review and approve it before it ships. Our avatar's encouragement sounded robotic at launch, so we wrote a dozen versions.",
        slug: "evolution",
      },
      {
        need: "Responsible AI and trust",
        evidence:
          "AI voice cloning lets a patient train with a loved one's voice. Most of the design work was consent: invite, disclosure, preview, and revocation.",
        slug: "voices",
      },
      {
        need: "Customer discovery and usability research",
        evidence:
          "For Tinnitus Pro I interviewed audiologists and iterated working prototypes with clinicians as they used them.",
        slug: "tinnitus-pro",
      },
      {
        need: "Functional prototypes with code and AI tools",
        evidence:
          "Claude Code is my primary environment. I built this partner certification platform end to end in Next.js and TypeScript.",
        slug: "certification-app",
      },
      {
        need: "Critique, mentorship, and influencing leaders",
        evidence:
          "Head of UX at SharpSpring, then manager of designers, researchers, and content designers at Constant Contact across a distributed team.",
        slug: "leadership",
      },
    ],
    featured: ["workflow-builder", "evolution", "voices", "tinnitus-pro", "leadership", "retention"],
    resume: "/resumes/dru-martin-resume-birdeye.pdf",
  },
  {
    slug: "ccc",
    company: "CCC",
    role: "Senior / Lead Product Designer",
    intro: [
      "Your posting asks for measurable business impact in a regulated, data-heavy domain, not just polished screens. For the last two years I've designed an FDA Class II product used in nearly 1,500 clinics, serving patients, clinicians, and the clinics that pay for it.",
      "Each case study below maps to something in your posting, with the outcomes stated where we measured them.",
    ],
    matches: [
      {
        need: "Measurable outcomes across multiple projects",
        evidence:
          "Daily training went from 20 minutes to 15. Adherence to our training runs 38% against about 30% for physical therapy, and 61% at our best clinics.",
        slug: "retention",
      },
      {
        need: "Complex workflows for diverse personas, with ecosystem-level impact",
        evidence:
          "Three billing models in the Lace Pro provider portal. Two failed for reasons outside the software: the patient's invoice, and a free trial that made a clinical recommendation look optional.",
        slug: "pro-portal",
      },
      {
        need: "Engage directly with users and iterate quickly",
        evidence:
          "Tinnitus Pro went from nothing to launch in under four months through audiologist interviews and working prototypes iterated with clinicians. In the first outcomes look, 40% of patients with bothersome tinnitus reached clinically meaningful improvement.",
        slug: "tinnitus-pro",
      },
      {
        need: "End-to-end design of complex B2B workflows",
        evidence:
          "SharpSpring's visual workflow builder turned automation rules buried in forms into a decision tree people could read, rolled out beside the old builder so customers could switch on their own schedule.",
        slug: "workflow-builder",
      },
      {
        need: "Regulated, data-heavy environments",
        evidence:
          "Lace Pro shipped under FDA Class II, HIPAA, and GDPR, rebuilt from a 20-year-old platform in under six months.",
        slug: "evolution",
      },
      {
        need: "Workshops, stakeholder alignment, and presenting to executives",
        evidence:
          "Head of UX at SharpSpring, then design manager at Constant Contact. I set up story mapping, structured user testing, and design reviews with product and engineering.",
        slug: "leadership",
      },
      {
        need: "Use AI to accelerate discovery and prototyping",
        evidence:
          "Claude Code is my primary environment; I built this partner certification platform with it, and the first working version of our ROI calculator in code.",
        slug: "certification-app",
      },
    ],
    featured: ["retention", "pro-portal", "tinnitus-pro", "workflow-builder", "evolution", "leadership"],
    resume: "/resumes/dru-martin-resume-ccc.pdf",
  },
  {
    slug: "trm-labs",
    company: "TRM Labs",
    role: "Head of Product Design",
    intro: [
      "Your posting asks for a design leader who is still in the file. I managed design teams at SharpSpring and Constant Contact for about five years, hiring and developing designers while owning product areas of my own. For the last two years I've been Lead Product Designer at Neurotone AI, hands-on every day, with AI doing real production work in my process.",
      "Each case study below maps to something in your posting.",
    ],
    matches: [
      {
        need: "Built a team, not inherited one, and developed designers as individuals",
        evidence:
          "At SharpSpring I grew the team by hiring directly. I brought in an intern from graphic design with no product experience; she now leads growth design at Noom. I've also let a designer go after three months of clear expectations, and changed my hiring loop because of it.",
        slug: "leadership",
      },
      {
        need: "AI that does load-bearing work in your own process, and a workflow you can demo",
        evidence:
          "Writers deliver case study copy to a spec, an agent fits it into a coded template, and a Puppeteer pipeline renders print-ready PDFs. The agent was rough at first; I refined it until the output held the design, then proved it on six more studies. The instructions live in a reusable Claude project.",
        slug: "pdf-system",
      },
      {
        need: "Automation that does real work on a user's behalf",
        evidence:
          "SharpSpring's visual workflow builder turned marketing automation rules buried in forms into a decision tree customers could read and check before it ran without them.",
        slug: "workflow-builder",
      },
      {
        need: "Defining how a human trusts an agent",
        evidence:
          "Familiar Voices clones a loved one's voice for training, so it needed invite, disclosure, preview, and revocation. Lace Pro's adaptive engine, by contrast, works silently. Knowing which an agent needs is the design call.",
        slug: "voices",
      },
      {
        need: "Player-coach: still shipping design work yourself",
        evidence:
          "Lace Pro went from a 20-year-old platform to a cross-platform AI product in under six months, and I'm still the hands-on design lead on it.",
        slug: "evolution",
      },
      {
        need: "Scrappy prototypes that settle decisions fast",
        evidence:
          "I built this partner certification platform in Next.js with Claude Code, and the first working version of our clinic ROI calculator in code before a developer polished it.",
        slug: "certification-app",
      },
    ],
    featured: ["leadership", "pdf-system", "workflow-builder", "voices", "evolution", "certification-app"],
    resume: "/resumes/dru-martin-resume-trm-labs.pdf",
  },
  {
    slug: "panorama",
    company: "Panorama Education",
    role: "Lead Product Designer",
    intro: [
      "Your posting asks for a designer who can turn complex data into clear next steps for people with very different levels of data literacy. For the last two years I've designed for audiologists and older patients who never chose to be technology users, in a product now used in nearly 1,500 clinics.",
      "I put the most relevant work first. Each case study below maps to something in your posting.",
    ],
    matches: [
      {
        need: "Turn complex data into clear, actionable insight across varying data literacy",
        evidence:
          "Patients follow their progress on a visual training map. Adherence to our training runs 38% against about 30% for physical therapy, and 61% at our best clinics.",
        slug: "retention",
      },
      {
        need: "Experiences that connect educators with data and insight",
        evidence:
          "In the Lace Pro provider portal, clinicians enroll patients during a normal visit and see who's active. An ROI calculator turns a clinic's own numbers into a value case.",
        slug: "pro-portal",
      },
      {
        need: "Shipped AI-powered features and a point of view on AI",
        evidence:
          "Lace Pro's adaptive engine picks each patient's next lesson and difficulty as they train, designed to be invisible. Our AI avatar sounded robotic at launch, so we wrote a dozen versions until it stopped sounding scripted.",
        slug: "evolution",
      },
      {
        need: "Responsible AI and trust",
        evidence:
          "AI voice cloning lets a patient train with a loved one's voice. Most of the design work was consent: invite, disclosure, preview, and revocation.",
        slug: "voices",
      },
      {
        need: "Discovery and research with users",
        evidence:
          "For Tinnitus Pro I interviewed audiologists and iterated working prototypes with clinicians as they used them.",
        slug: "tinnitus-pro",
      },
      {
        need: "Mentor designers and raise the craft bar",
        evidence:
          "About five years managing designers, researchers, and content designers at SharpSpring and Constant Contact. An intern I hired now leads growth design at Noom.",
        slug: "leadership",
      },
      {
        need: "Prototyping and building with engineering",
        evidence:
          "Claude Code is my primary environment. I built this partner certification platform end to end in Next.js and TypeScript.",
        slug: "certification-app",
      },
    ],
    featured: ["retention", "pro-portal", "evolution", "voices", "tinnitus-pro", "leadership"],
    resume: "/resumes/dru-martin-resume-panorama.pdf",
  },
  {
    slug: "deel",
    company: "Deel",
    role: "Principal Designer",
    intro: [
      "Your posting asks for personalized, adaptive experiences built on infrastructure the designer doesn't own, and for someone who can take an undefined brief to a shipped experience. Both describe the last two years of my work on an AI product now used in nearly 1,500 clinics.",
      "I put the most relevant work first. Each case study below maps to something in your posting.",
    ],
    matches: [
      {
        need: "Personalized, adaptive experiences on infrastructure you don't own",
        evidence:
          "Lace Pro's adaptive engine picks each patient's next lesson and difficulty from how they're performing. I designed the experience around it, and the right answer was to make it invisible: easy openers and an ease-out at the end of each session.",
        slug: "evolution",
      },
      {
        need: "Designing with and for AI",
        evidence:
          "Voice cloning lets a patient train with a loved one's voice. Unlike the adaptive engine, it needed explicit disclosure, preview, consent, and revocation.",
        slug: "voices",
      },
      {
        need: "Undefined brief to shipped experience, and one experience across products",
        evidence:
          "Tinnitus Pro had no existing product to reference and shipped in under four months. It shares one app download and one login with Lace Pro, and each patient sees only the products they've bought.",
        slug: "tinnitus-pro",
      },
      {
        need: "AI in everyday design practice",
        evidence:
          "For a family of about twenty sales case studies, writers deliver copy to a spec and an agent fits it into a coded template I designed. Seven are done.",
        slug: "pdf-system",
      },
      {
        need: "Systems thinking across surfaces and boundaries",
        evidence:
          "Three billing models in the provider portal. Two failed for reasons outside the interface: the patient's invoice, and a free trial that made a clinical recommendation look optional.",
        slug: "pro-portal",
      },
      {
        need: "Changing a live product without breaking it",
        evidence:
          "SharpSpring's visual workflow builder replaced automation logic buried in forms, rolled out beside the old builder so customers could switch on their own schedule.",
        slug: "workflow-builder",
      },
      {
        need: "Exceptional prototyping",
        evidence:
          "Claude Code is my primary environment. I built this partner certification platform end to end in Next.js and TypeScript.",
        slug: "certification-app",
      },
    ],
    featured: ["evolution", "voices", "tinnitus-pro", "pdf-system", "pro-portal", "workflow-builder"],
    resume: "/resumes/dru-martin-resume-deel.pdf",
  },
  {
    slug: "weave",
    company: "Weave",
    role: "Product Design Manager",
    intro: [
      "Weave builds for healthcare practices whose staff live in your software all day. I've designed communication tools for small businesses at SharpSpring and Constant Contact, and for the last two years I've led design for a product used in nearly 1,500 audiology practices. I managed distributed design teams for about five years.",
      "I put the most relevant work first. Each case study below maps to something in your posting.",
    ],
    matches: [
      {
        need: "Grow designers and build a team",
        evidence:
          "About five years managing designers, researchers, and content designers through an acquisition and a reorg. An intern I hired now leads growth design at Noom.",
        slug: "leadership",
      },
      {
        need: "Design around the real workflows of healthcare practices",
        evidence:
          "Lace Pro enrollment fits inside a normal visit: the provider enters a name and phone number, the patient gets a text and installs the app in the room, and login needs no password.",
        slug: "pro-portal",
      },
      {
        need: "Equal strategic partner to Product and Engineering",
        evidence:
          "We tested three billing models in the provider portal. Two failed for reasons outside the interface: the patient's invoice, and a free trial that made a clinical recommendation look optional.",
        slug: "pro-portal",
      },
      {
        need: "Engagement that keeps people coming back",
        evidence:
          "Push, text, and email reminders timed to drop-off points, a progress map, and streaks. Adherence to our training runs 38% against about 30% for physical therapy, and 61% at our best clinics.",
        slug: "retention",
      },
      {
        need: "Turn complex workflows into clear, scalable design",
        evidence:
          "SharpSpring's visual workflow builder turned automation logic buried in forms into a map, rolled out beside the old builder so customers could switch on their own schedule.",
        slug: "workflow-builder",
      },
      {
        need: "Systemic vision across surfaces",
        evidence:
          "I built Lace Pro's design system from scratch. Lace Pro and Tinnitus Pro now share one app and one login, and each patient sees only what they've bought.",
        slug: "evolution",
      },
      {
        need: "Research that validates opportunities",
        evidence:
          "For Tinnitus Pro I interviewed audiologists and iterated working prototypes with clinicians as they used them.",
        slug: "tinnitus-pro",
      },
    ],
    featured: ["leadership", "pro-portal", "retention", "workflow-builder", "evolution", "tinnitus-pro"],
    resume: "/resumes/dru-martin-resume-weave.pdf",
  },
  {
    slug: "linktree",
    company: "Linktree",
    role: "Staff Product Designer, Mobile",
    intro: [
      "Your posting asks for an app that feels like one product, not five. For the last two years I've led design for Lace Pro, a native iOS and Android app, plus desktop, used in nearly 1,500 audiology clinics, with a second product living in the same app on one shared design system.",
      "I put the most relevant work first. Each case study below maps to something in your posting.",
    ],
    matches: [
      {
        need: "Notifications and in-the-moment coaching",
        evidence:
          "Streaks, a training map, a leaderboard, and push, text, and email nudges timed to the moments people quit. Adherence to our training runs 38% against about 30% for physical therapy, and 61% at our best clinics.",
        slug: "retention",
      },
      {
        need: "One coherent native product across surfaces",
        evidence:
          "Lace Pro runs on iOS, Android, and desktop, rebuilt from a 20-year-old platform in under six months on a design system of several hundred variable-driven components.",
        slug: "evolution",
      },
      {
        need: "Balance sophistication with everyday usability",
        evidence:
          "Most patients are older adults with hearing loss. Login is a phone number with no password, and daily training went from 20 minutes to 15 by removing interaction points and stops.",
        slug: "pro-portal",
      },
      {
        need: "A trusted, personal moment on mobile",
        evidence:
          "Familiar Voices lets a patient train with a loved one's cloned voice: invite, disclosure, preview, and revocation, compliant with HIPAA and GDPR.",
        slug: "voices",
      },
      {
        need: "Influence without authority",
        evidence:
          "At SharpSpring I ran design critique before I had the title, then became Head of UX. The only authority I had was whether my feedback made the work better.",
        slug: "leadership",
      },
      {
        need: "A second product, same app, same bar",
        evidence:
          "Tinnitus Pro went from nothing to launch in under four months and lives inside the Lace Pro app behind the same login.",
        slug: "tinnitus-pro",
      },
    ],
    featured: ["retention", "evolution", "voices", "pro-portal", "tinnitus-pro", "leadership"],
    resume: "/resumes/dru-martin-resume-linktree.pdf",
  },
  {
    slug: "roo",
    company: "Roo",
    role: "Design Lead",
    intro: [
      "Your posting describes a player-coach: lead a team of five, make design standards explicit, and still do real design work. I managed a team of designers, researchers, and content designers for about five years, and for the last two I've led design for a product used by nearly 1,500 small audiology clinics.",
      "I put the most relevant work first. Each case study below maps to something in your posting.",
    ],
    matches: [
      {
        need: "Lead, mentor, and grow a five-person design team",
        evidence:
          "About five years managing designers, researchers, and content designers through an acquisition and a reorg. An intern I hired now leads growth design at Noom.",
        slug: "leadership",
      },
      {
        need: "Make design competencies explicit and consistently applied",
        evidence:
          "At SharpSpring I wrote the standard down: a critique format, a review rhythm, and a hiring loop. It held through the acquisition and the reorg.",
        slug: "leadership",
      },
      {
        need: "A design system that AI tools can build from",
        evidence:
          "I built Lace Pro's design system from scratch, with color, type, and sizing driven by tokens, so prototypes build from real components.",
        slug: "evolution",
      },
      {
        need: "AI fluency, including where its work shouldn't ship",
        evidence:
          "An agent fits writers' content into a coded template I designed for our sales case studies; seven of about twenty are done. When AI drafted therapy lessons, the facts were often wrong, so people approve every lesson before it ships.",
        slug: "pdf-system",
      },
      {
        need: "Small practices as customers",
        evidence:
          "Lace Pro enrollment fits inside a normal clinic visit: the provider enters a name and phone number, the patient gets a text and installs the app in the room.",
        slug: "pro-portal",
      },
      {
        need: "Two-sided products and marketplace thinking",
        evidence:
          "Clinicians prescribe and patients have to keep showing up. Adherence to our training runs 38% against about 30% for physical therapy, and 61% at our best clinics. At SharpSpring I made proof-of-concept designs for marketplace features.",
        slug: "retention",
      },
      {
        need: "Research with users",
        evidence:
          "For Tinnitus Pro I interviewed audiologists and iterated working prototypes with clinicians as they used them.",
        slug: "tinnitus-pro",
      },
    ],
    featured: ["leadership", "pro-portal", "retention", "evolution", "pdf-system", "tinnitus-pro"],
    resume: "/resumes/dru-martin-resume-roo.pdf",
  },
  {
    slug: "narmi",
    company: "Narmi",
    role: "Head of Design",
    intro: [
      "Your posting describes a player-coach: set one design vision across products, grow a team of three to five designers, and still do hands-on work. I built and managed a design team for about five years in B2B SaaS, and for the last two I've led design across connected products used by nearly 1,500 clinics.",
      "I'm based in Gainesville, Florida, and would work remotely with regular travel to New York. Each case study below maps to something in your posting.",
    ],
    matches: [
      {
        need: "Lead, mentor, and develop a team of 3 to 5 designers",
        evidence:
          "About five years building and managing designers, researchers, and content designers through an acquisition and a reorg. An intern I hired now leads growth design at Noom.",
        slug: "leadership",
      },
      {
        need: "A unified design vision across products",
        evidence:
          "Lace Pro and Tinnitus Pro share one app and one login, and each patient sees only the products they've bought. The patient app and the provider portal were designed as one system.",
        slug: "evolution",
      },
      {
        need: "Onboarding that works for real people",
        evidence:
          "Enrollment fits inside a normal clinic visit: the provider enters a name and phone number, the patient gets a text, installs the app in the room, and signs in with no password.",
        slug: "pro-portal",
      },
      {
        need: "Metric-driven SaaS",
        evidence:
          "Adherence to our training runs 38% against about 30% for physical therapy, and 61% at our best clinics. At Constant Contact, daily active use was a metric my team designed against.",
        slug: "retention",
      },
      {
        need: "Design aligned with Sales, Marketing, and Customer Success",
        evidence:
          "I designed and built the first version of an ROI calculator our reps preconfigure for each clinic, and a system that turns structured content into on-brand sales case studies.",
        slug: "pdf-system",
      },
      {
        need: "Processes and design systems for scalable design",
        evidence:
          "I wrote down SharpSpring's design standard (critique, review rhythm, hiring loop) and built Lace Pro's token-driven design system from scratch.",
        slug: "workflow-builder",
      },
      {
        need: "User research",
        evidence:
          "For Tinnitus Pro I interviewed audiologists and iterated working prototypes with clinicians as they used them.",
        slug: "tinnitus-pro",
      },
    ],
    featured: ["leadership", "evolution", "pro-portal", "retention", "pdf-system", "workflow-builder"],
    resume: "/resumes/dru-martin-resume-narmi.pdf",
  },
  {
    slug: "samsara",
    company: "Samsara",
    role: "Staff Product Designer",
    intro: [
      "Fleet managers and dispatchers live in your dashboard all day, and drivers use your app in between real work. I've designed for both kinds of people: seven years on a CRM and automation platform small businesses ran their operations on, and two years leading design for a web portal and mobile app used in nearly 1,500 clinics.",
      "I put the most relevant work first. Each case study below maps to something in your posting.",
    ],
    matches: [
      {
        need: "Quantified impact across multiple product areas",
        evidence:
          "Daily training went from 20 minutes to 15. Adherence to our training runs 38% against about 30% for physical therapy, and 61% at our best clinics.",
        slug: "retention",
      },
      {
        need: "Lead large, ambiguous initiatives from framing through launch",
        evidence:
          "I led the rebuild of a 20-year-old platform into Lace Pro in under six months, across a patient app on iOS, Android, and desktop and a provider portal.",
        slug: "evolution",
      },
      {
        need: "Define patterns other designers build on",
        evidence:
          "SharpSpring's visual workflow builder gave triggers, filters, and actions their own visual language, turning automation logic buried in forms into a map people could read.",
        slug: "workflow-builder",
      },
      {
        need: "Product decisions informed by customers and data",
        evidence:
          "We tested three billing models in the provider portal. Two failed for reasons outside the interface, and clinic-wide licensing is what worked.",
        slug: "pro-portal",
      },
      {
        need: "Shipped work you can attribute to AI tools",
        evidence:
          "For a family of about twenty sales case studies, writers deliver copy to a spec and an agent fits it into a coded template I designed. Seven are done.",
        slug: "pdf-system",
      },
      {
        need: "Meet customers directly and iterate fast",
        evidence:
          "Tinnitus Pro went from nothing to launch in under four months through audiologist interviews and working prototypes iterated with clinicians.",
        slug: "tinnitus-pro",
      },
      {
        need: "Mentor designers",
        evidence:
          "About five years managing designers, researchers, and content designers. An intern I hired now leads growth design at Noom.",
        slug: "leadership",
      },
    ],
    featured: ["evolution", "workflow-builder", "retention", "pro-portal", "pdf-system", "tinnitus-pro"],
    resume: "/resumes/dru-martin-resume-samsara.pdf",
  },
  {
    slug: "kalepa",
    company: "Kalepa",
    role: "Lead Product Designer",
    intro: [
      "Underwriters need to find what matters in a lot of data and act on it with confidence. I've designed that kind of software for years: a CRM and automation platform small businesses ran on, and for the last two years an AI-powered product used in nearly 1,500 clinics.",
      "I put the most relevant work first. Each case study below maps to something in your posting.",
    ],
    matches: [
      {
        need: "Generalize an existing platform to new and expanding workflows",
        evidence:
          "Lace Pro replaced a 20-year-old platform in under six months. When Tinnitus Pro launched, it joined the same app and login, and each patient sees only the products they've bought.",
        slug: "evolution",
      },
      {
        need: "Data-dense workflows that help people act with confidence",
        evidence:
          "SharpSpring's visual workflow builder turned automation logic buried in forms into a map people could read, rolled out beside the old builder so customers moved on their own schedule.",
        slug: "workflow-builder",
      },
      {
        need: "How AI shows up, and keeping people in control",
        evidence:
          "Voice cloning lets a patient train with a loved one's voice. Most of the design was consent: disclosure, preview, and revocation.",
        slug: "voices",
      },
      {
        need: "Turn ambiguous problems into product direction with sales and client success",
        evidence:
          "We tested three billing models in the provider portal. Two failed for reasons outside the interface, and I built the first version of the ROI calculator our reps use.",
        slug: "pro-portal",
      },
      {
        need: "Move fast from idea to validated concept",
        evidence:
          "Tinnitus Pro went from nothing to launch in under four months through audiologist interviews and working prototypes iterated with clinicians.",
        slug: "tinnitus-pro",
      },
      {
        need: "Rapid prototyping with AI and code",
        evidence:
          "I prototype in React, Next.js, and TypeScript. I built this partner certification platform end to end.",
        slug: "certification-app",
      },
      {
        need: "Raise the design bar through critique and mentorship",
        evidence:
          "About five years managing designers, researchers, and content designers. An intern I hired now leads growth design at Noom.",
        slug: "leadership",
      },
    ],
    featured: ["evolution", "workflow-builder", "voices", "pro-portal", "tinnitus-pro", "leadership"],
    resume: "/resumes/dru-martin-resume-kalepa.pdf",
  },
  {
    slug: "cleerly",
    company: "Cleerly",
    role: "Senior Product Designer",
    intro: [
      "Cleerly turns complex cardiac data into decisions clinicians can act on, under FDA rules. For the last two years I've led design for FDA Class II software used in nearly 1,500 audiology clinics, working as much as a researcher and problem framer as a screen designer.",
      "I put the most relevant work first. Each case study below maps to something in your posting.",
    ],
    matches: [
      {
        need: "Deep discovery research and problem framing",
        evidence:
          "Tinnitus Pro had no product to reference. I front-loaded competitive research, clinical literature, and audiologist interviews, then iterated working prototypes with clinicians.",
        slug: "tinnitus-pro",
      },
      {
        need: "Quantifiable reduction in workflow friction",
        evidence:
          "Daily training went from 20 minutes to 15. Adherence to our training runs 38% against about 30% for physical therapy, and 61% at our best clinics.",
        slug: "retention",
      },
      {
        need: "Complex multi-user clinical workflows",
        evidence:
          "Enrollment fits inside a normal visit: the provider enters a name and phone number, the patient gets a text and installs the app in the room. Three billing models taught us where the real friction lived.",
        slug: "pro-portal",
      },
      {
        need: "Regulated medical software, end to end",
        evidence:
          "I led the rebuild of a 20-year-old platform into Lace Pro, FDA Class II software, in under six months, and built its design system from scratch.",
        slug: "evolution",
      },
      {
        need: "Complex B2B and reporting",
        evidence:
          "Seven years at SharpSpring on the CRM pipelines, automation builders, and reporting agencies ran their businesses on.",
        slug: "workflow-builder",
      },
      {
        need: "Rapid prototyping with AI",
        evidence:
          "I prototype in React, Next.js, and TypeScript. I built this partner certification platform end to end.",
        slug: "certification-app",
      },
    ],
    featured: ["tinnitus-pro", "retention", "pro-portal", "evolution", "workflow-builder", "voices"],
    resume: "/resumes/dru-martin-resume-cleerly.pdf",
  },
  {
    slug: "radiant",
    company: "Radiant",
    role: "Head of Design",
    intro: [
      "Your posting asks one person to own how Radiant looks and works across the brand and the product. That's my job today at Neurotone AI, where I design both an AI-powered product used in nearly 1,500 clinics and the brand around it.",
      "I'm based in Gainesville, Florida, in the US, and would work remotely. Each case study below maps to something in your posting.",
    ],
    matches: [
      {
        need: "Lead design across brand and product",
        evidence:
          "At Neurotone, brand and product are one job: identity, marketing site, print collateral, sales case studies, partner materials, and the product itself.",
        slug: "evolution",
      },
      {
        need: "Translate complex technical concepts into clear experiences",
        evidence:
          "SharpSpring's visual workflow builder turned automation logic buried in forms into a map people could read, rolled out beside the old builder so customers moved on their own schedule.",
        slug: "workflow-builder",
      },
      {
        need: "One design system spanning product and company design",
        evidence:
          "A code-based system turns structured content into on-brand sales case studies, so marketing and sales produce consistent assets without a designer in every loop.",
        slug: "pdf-system",
      },
      {
        need: "Work with marketing and commercial teams",
        evidence:
          "I designed and built the first version of the ROI calculator our reps preconfigure for each clinic, alongside three billing-model experiments in the provider portal.",
        slug: "pro-portal",
      },
      {
        need: "Build and grow a design function",
        evidence:
          "At SharpSpring I grew to Head of UX, hired directly to build the team, and carried it through the Constant Contact acquisition. An intern I hired now leads growth design at Noom.",
        slug: "leadership",
      },
      {
        need: "Research, prototyping, and testing",
        evidence:
          "For Tinnitus Pro I interviewed audiologists and iterated working prototypes with clinicians as they used them.",
        slug: "tinnitus-pro",
      },
    ],
    featured: ["evolution", "pdf-system", "workflow-builder", "pro-portal", "leadership", "voices"],
    resume: "/resumes/dru-martin-resume-radiant.pdf",
  },
  {
    slug: "helpscout",
    company: "Help Scout",
    role: "Director of Product Design",
    intro: [
      "Help Scout's customers pick it because it's easier to use and feels better to work in. I've spent most of my career on the tools small businesses use to talk to their customers, and I've led a distributed design team as a player-coach.",
      "I put the most relevant work first. Each case study below maps to something in your posting.",
    ],
    matches: [
      {
        need: "Lead a small team of experienced designers as a player-coach",
        evidence:
          "About five years managing designers, researchers, and content designers through an acquisition and a reorg. An intern I hired now leads growth design at Noom.",
        slug: "leadership",
      },
      {
        need: "A point of view on trustworthy AI",
        evidence:
          "Voice cloning lets a patient train with a loved one's voice, so it needed disclosure, preview, consent, and revocation. Our adaptive engine, by contrast, works invisibly.",
        slug: "voices",
      },
      {
        need: "AI that handles its own mistakes",
        evidence:
          "Our AI avatar's encouragement sounded robotic at launch, so we wrote a dozen versions. When AI drafted therapy content, the facts were often wrong, so people write it.",
        slug: "evolution",
      },
      {
        need: "Evolve how design gets done as AI accelerates delivery",
        evidence:
          "For about twenty sales case studies, writers deliver copy to a spec and an agent fits it into a coded template I designed. Seven are done.",
        slug: "pdf-system",
      },
      {
        need: "Make complex B2B software feel simple",
        evidence:
          "SharpSpring's visual workflow builder turned automation logic buried in forms into a map people could read, rolled out beside the old builder so customers switched on their own schedule.",
        slug: "workflow-builder",
      },
      {
        need: "Prototyping in code",
        evidence:
          "I built this partner certification platform end to end in Next.js and TypeScript.",
        slug: "certification-app",
      },
    ],
    featured: ["leadership", "voices", "workflow-builder", "pdf-system", "evolution", "pro-portal"],
    resume: "/resumes/dru-martin-resume-helpscout.pdf",
  },
  {
    slug: "beacon",
    company: "Beacon Biosignals",
    role: "Director of Product Design",
    intro: [
      "Beacon designs for patients using medical technology unsupervised at home, the clinicians who care for them, and the teams behind the scenes. For the last two years I've led design for FDA Class II software that older patients use at home and audiologists in nearly 1,500 clinics prescribe.",
      "I put the most relevant work first. Each case study below maps to something in your posting.",
    ],
    matches: [
      {
        need: "Patients using medical technology unsupervised at home",
        evidence:
          "Mostly older adults with hearing loss train at home. Adherence to our training runs 38% against about 30% for physical therapy, and 61% at our best clinics.",
        slug: "retention",
      },
      {
        need: "Service and business-process design, not just interfaces",
        evidence:
          "Enrollment fits inside a standard clinic visit, and three billing models were tested in the provider portal until clinic-wide licensing took cost out of enrollment.",
        slug: "pro-portal",
      },
      {
        need: "Design across mobile, web, and print",
        evidence:
          "A code-based system turns structured content into on-brand, print-ready case studies, alongside the patient app and provider portal.",
        slug: "pdf-system",
      },
      {
        need: "Build and grow a design function",
        evidence:
          "At SharpSpring I grew to Head of UX, hired directly, and wrote down our standard. I managed a distributed team of designers, researchers, and content designers for about five years.",
        slug: "leadership",
      },
      {
        need: "Regulated medical products",
        evidence:
          "Lace Pro is FDA Class II software, rebuilt from a 20-year-old platform in under six months, with a design system built from scratch.",
        slug: "evolution",
      },
      {
        need: "Research with clinicians",
        evidence:
          "For Tinnitus Pro I interviewed audiologists and iterated working prototypes with clinicians as they used them.",
        slug: "tinnitus-pro",
      },
    ],
    featured: ["retention", "pro-portal", "evolution", "pdf-system", "leadership", "tinnitus-pro"],
    resume: "/resumes/dru-martin-resume-beacon.pdf",
  },
  {
    slug: "lumi",
    company: "Lumi",
    role: "Lead Product Designer",
    intro: [
      "Lumi serves a student who needs something closer to a consumer app, a teacher with a 45-minute period, and a district leader who needs evidence. I've designed for that same shape: a patient app people come back to daily, a portal clinicians use mid-visit, and the value a clinic needs to see, in a product used in nearly 1,500 clinics.",
      "I put the most relevant work first. Each case study below maps to something in your posting.",
    ],
    matches: [
      {
        need: "Consumer-grade design that earns a daily habit",
        evidence:
          "A training map, streaks, and reminders timed to drop-off points. Adherence to our training runs 38% against about 30% for physical therapy, and 61% at our best clinics.",
        slug: "retention",
      },
      {
        need: "Workflow tools for busy professionals",
        evidence:
          "Enrollment fits inside a normal clinic visit: the provider enters a name and phone number, and the patient installs the app in the room.",
        slug: "pro-portal",
      },
      {
        need: "Complex multi-role workflows made readable",
        evidence:
          "SharpSpring's visual workflow builder turned rules buried in forms into a map people could read.",
        slug: "workflow-builder",
      },
      {
        need: "A product taken from early to mature, with a design system",
        evidence:
          "I took Lace Pro from a rebuild of a 20-year-old platform to a mature product as the only designer, and built its design system from scratch.",
        slug: "evolution",
      },
      {
        need: "Prototypes within days, from what you hear in the field",
        evidence:
          "For Tinnitus Pro I interviewed audiologists and iterated working prototypes with clinicians as they used them.",
        slug: "tinnitus-pro",
      },
      {
        need: "Build alongside founders and engineering",
        evidence:
          "I prototype in code. I built this partner certification platform end to end in Next.js and TypeScript.",
        slug: "certification-app",
      },
    ],
    featured: ["retention", "pro-portal", "evolution", "workflow-builder", "tinnitus-pro", "voices"],
    resume: "/resumes/dru-martin-resume-lumi.pdf",
  },
  {
    slug: "validity",
    company: "Validity",
    role: "AI Design Lead",
    intro: [
      "Engage sits in the category I've spent most of my career in: seven years on SharpSpring's CRM and marketing automation platform, then Constant Contact, one of the largest email marketing platforms in the world. Today I lead design at Neurotone AI, where I prototype in code with Claude Code and I'm setting up our monthly partner emails so Claude builds them directly in HubSpot through its CLI and MCP server, from our design system.",
      "I put the most relevant work first. Each case study below maps to something in your posting.",
    ],
    matches: [
      {
        need: "Complex B2B workflows for marketers doing multi-step work",
        evidence:
          "SharpSpring's visual workflow builder turned automation rules buried in forms into a map people could read, rolled out beside the legacy builder so customers could move on their own schedule.",
        slug: "workflow-builder",
      },
      {
        need: "Teach, mentor, and run a candid crit practice",
        evidence:
          "I ran critique at SharpSpring before I had formal authority, then managed designers there and designers, researchers, and content designers at Constant Contact.",
        slug: "leadership",
      },
      {
        need: "AI-native, code-centric, with judgment kept with people",
        evidence:
          "Writers deliver copy to a spec and an agent fits it into a coded template. I designed the template and the rules, and I decide what ships.",
        slug: "pdf-system",
      },
      {
        need: "Own the design direction for a whole product",
        evidence:
          "I took Lace Pro from a rebuild of a 20-year-old platform to a mature product used in nearly 1,500 clinics, as the only designer until June 2025.",
        slug: "evolution",
      },
      {
        need: "Design from firsthand time with customers",
        evidence:
          "Tinnitus Pro was shaped in working sessions with audiologists, iterating prototypes as they used them.",
        slug: "tinnitus-pro",
      },
      {
        need: "AI experiences people trust",
        evidence:
          "An AI voice-cloning system with invite, disclosure, preview, and revocation, so patients and families stay in control.",
        slug: "voices",
      },
    ],
    featured: ["workflow-builder", "leadership", "pdf-system", "evolution", "tinnitus-pro", "voices"],
    resume: "/resumes/dru-martin-resume-validity.pdf",
  },
  {
    slug: "docker",
    company: "Docker",
    role: "Director of Product Design",
    intro: [
      "You asked for a director who still makes things. I managed a team of designers, researchers, and content designers through an acquisition and a reorg, and for the last two and a half years I've been hands-on again: the only designer until June 2025 on a platform used in nearly 1,500 clinics, prototyping in React and TypeScript with Claude Code.",
      "I put the most relevant work first. Each case study below maps to something in your posting.",
    ],
    matches: [
      {
        need: "Lead and grow a design team through change",
        evidence:
          "I ran critique before I had formal authority, became the manager in 2019, carried the team through the Constant Contact acquisition, and took over a new team after the reorg. One intern I hired now leads growth design at Noom.",
        slug: "leadership",
      },
      {
        need: "Still makes things: recent work you can show",
        evidence:
          "I designed Tinnitus Pro from zero in under four months, from the first prototype down to the states and copy.",
        slug: "tinnitus-pro",
      },
      {
        need: "Technically complex systems made clear",
        evidence:
          "SharpSpring's visual workflow builder turned automation rules buried in forms into a map people could read.",
        slug: "workflow-builder",
      },
      {
        need: "AI tools in daily work, with human judgment leading",
        evidence:
          "Writers deliver copy to a spec and an agent fits it into a coded template. The first attempts were rough, so I kept refining the design and rules until the output held up.",
        slug: "pdf-system",
      },
      {
        need: "AI-powered products",
        evidence:
          "An AI voice-cloning system with invite, disclosure, preview, and revocation, so patients and families stay in control.",
        slug: "voices",
      },
      {
        need: "Prototype in front-end code",
        evidence:
          "I built this partner certification platform end to end in Next.js and TypeScript.",
        slug: "certification-app",
      },
    ],
    featured: ["leadership", "tinnitus-pro", "workflow-builder", "pdf-system", "voices", "evolution"],
    resume: "/resumes/dru-martin-resume-docker.pdf",
  },
  {
    slug: "apollo",
    company: "Apollo GraphQL",
    role: "Product Designer",
    intro: [
      "Your posting asks for the details that make technical products trustworthy: states, edge cases, errors, and permissions. I've spent most of my career on complex B2B software, from SharpSpring's CRM and automation builder to Lace Pro, used in nearly 1,500 clinics, where I built the design system from scratch and prototype in React and TypeScript with Claude Code.",
      "I put the most relevant work first. Each case study below maps to something in your posting.",
    ],
    matches: [
      {
        need: "Complex workflows, and migrating live surfaces without breaking them",
        evidence:
          "SharpSpring's visual workflow builder ran beside the legacy builder: new accounts started in it, existing customers opted in, then a sunset date with support-assisted migration.",
        slug: "workflow-builder",
      },
      {
        need: "States, edge cases, and permissions",
        evidence:
          "An AI voice-cloning system with invite, disclosure, preview, and revocation, so the people involved stay in control of their voice.",
        slug: "voices",
      },
      {
        need: "Scope a v1, ship it, iterate",
        evidence:
          "I led the rebuild of a 20-year-old platform to launch in under six months, as the only designer, and built its design system from scratch.",
        slug: "evolution",
      },
      {
        need: "Tie the work to outcomes",
        evidence:
          "Daily training went from 20 minutes to 15, and adherence to our training runs 38% against about 30% for physical therapy.",
        slug: "retention",
      },
      {
        need: "Prototype fast and test when the cost of being wrong is high",
        evidence:
          "For Tinnitus Pro I iterated working prototypes with audiologists as they used them, 0-to-1 in under four months.",
        slug: "tinnitus-pro",
      },
      {
        need: "Comfort working in code",
        evidence:
          "I built this partner certification platform end to end in Next.js and TypeScript.",
        slug: "certification-app",
      },
    ],
    featured: ["workflow-builder", "voices", "evolution", "retention", "tinnitus-pro", "certification-app"],
    resume: "/resumes/dru-martin-resume-apollo.pdf",
  },
  {
    slug: "honor",
    company: "Honor",
    role: "Sr Staff Product Designer",
    intro: [
      "Honor designs for the client and family choosing care, the Care Pro delivering it, and the operator keeping it running. I've spent the last two and a half years on that same shape: Lace Pro, used in nearly 1,500 clinics, serves mostly older patients training at home, audiologists using a portal mid-visit, and the clinics that pay for it.",
      "I put the most relevant work first. Each case study below maps to something in your posting.",
    ],
    matches: [
      {
        need: "Design the service, not just the screen",
        evidence:
          "Enrollment fits inside a normal clinic visit: the provider enters a name and phone number, and the patient installs the app in the room, with password-free login.",
        slug: "pro-portal",
      },
      {
        need: "Own outcomes through launch and iteration",
        evidence:
          "A training map, streaks, and reminders by push, text, and email timed to drop-off points. Adherence to our training runs 38% against about 30% for physical therapy, and 61% at our best clinics.",
        slug: "retention",
      },
      {
        need: "Balance user needs, feasibility, and business goals",
        evidence:
          "I took Lace Pro from a rebuild of a 20-year-old platform to a mature product, through three billing models, as the only designer until June 2025.",
        slug: "evolution",
      },
      {
        need: "Ground strategy in evidence",
        evidence:
          "For Tinnitus Pro I interviewed audiologists and iterated working prototypes with them; 40% of patients with bothersome tinnitus reached clinically meaningful improvement in the first look.",
        slug: "tinnitus-pro",
      },
      {
        need: "Trust-sensitive AI for older adults and families",
        evidence:
          "An AI voice-cloning system with invite, disclosure, preview, and revocation, so patients train with the voice of someone they love and everyone stays in control.",
        slug: "voices",
      },
      {
        need: "Add to the team's patterns, prompts, and processes",
        evidence:
          "Writers deliver copy to a spec and an agent fits it into a coded template; the rules live in a Claude project a teammate can run.",
        slug: "pdf-system",
      },
    ],
    featured: ["pro-portal", "retention", "evolution", "tinnitus-pro", "voices", "pdf-system"],
    resume: "/resumes/dru-martin-resume-honor.pdf",
  },
];

export function getAudience(slug: string): Audience | undefined {
  return audiences.find((a) => a.slug === slug);
}
