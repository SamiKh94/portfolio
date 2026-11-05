// Case studies, in Sami's words. Workflow (handoff, Pass 3):
//   1. Sami writes or corrects each part. Claude only formats and fixes grammar.
//   2. A part that still needs Sami's input is a `{ needs: "question" }`.
//   3. Set `approved: true` only after Sami has approved the case study in writing.
//
// Only approved case studies are rendered on the live site. Drafts (including
// their open questions) are visible locally with:  NEXT_PUBLIC_SHOW_DRAFTS=1 npm run dev
//
// Truth rules: no number that is not on the CV, no customer names, no internal
// metrics, no code. Tal3a: no user/order/install numbers (Sami's call).

export type Part = string | { needs: string };

export type CaseStudy = {
  slug: string;
  company: string;
  title: string;
  question: string; // the reader's question this story answers
  approved: boolean;
  image?: { src: string; alt: string; width: number; height: number }; // public/ path, real screenshot or own diagram
  parts: {
    situation: Part;
    decision: Part;
    team: Part; // how I got the team there
    outcome: Part;
    differently: Part; // what I'd do differently
  };
};

export const PART_LABELS: Record<keyof CaseStudy["parts"], string> = {
  situation: "The situation",
  decision: "What I decided",
  team: "How I got the team there",
  outcome: "The outcome",
  differently: "What I'd do differently",
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "two-apps-into-one",
    company: "Harri",
    title: "Two apps into one",
    question: "Can you lead a big change without breaking things?",
    approved: false,
    parts: {
      situation:
        "Harri had two live production apps covering mostly the same functionality and areas, but for different personas. Managing the work in one app is easier than managing it across several, so the business needed them merged.",
      decision:
        "The initial direction was to copy and paste the code into one app as normal packages. I refused. The first challenge was the architecture: this was the moment to apply something new, a modular architecture, not to carry the old structure over. And both original apps still had unfinished work that needed syncing into the new app, so we used git submodules to keep it in step.",
      team:
        "It was me and two other engineers, and the syncing was a lot. We converted the apps into git modules and modified their architecture to match the modular architecture we built. What made it manageable was AI with a project knowledge layer: an architecture blueprint of what goes where, plus a mapping for how to resolve conflicts.",
      outcome: "Two distinct apps with app switching became one app with persona switching.",
      // Proposed from Sami's own answer ("the syncing was so much ... till we utilized AI
      // and project knowledge layer"). Awaiting Sami's confirmation; keep approved: false until then.
      differently:
        "I'd build the project knowledge layer first, before the syncing started, instead of partway through. Most of the pain was syncing before we had it.",
    },
  },
  {
    slug: "the-loop-from-the-losing-side",
    company: "Tal3a",
    title: "The loop, from the losing side",
    question: "Can you own a product outcome, not just code?",
    approved: true, // approved by Sami 2026-11-06
    parts: {
      situation:
        "I took Tal3a from an idea to a live marketplace on both app stores, taking real orders. The product worked. Getting people to it was the hard part: getting their attention is hard, ads and marketing are not enough, they need something new.",
      decision:
        "Build the reasons to come back into the product itself. Al-Haj, an AI shopping assistant (launching soon) that works like asking the man behind the counter: it knows your size and preferences, suggests outfits, and understands Palestinian dialect. And a loyalty programme with discounts and gifts.",
      team:
        "I researched and wrote the product specs and flows, owned architecture and mobile, and led a backend and a frontend engineer through implementation. Merchants came in through a field sales playbook and direct outreach.",
      outcome:
        "Loyalty, discounts and gifts were part of it, but the streak was the real one: daily streaks turned out to be what brought people back.",
      differently:
        "We shipped a product that worked and learned that distribution, not the product, was the constraint. I'd prepare everything needed to raise money early, because funding was a big limitation, and I'd look much more carefully at sales and marketing.",
    },
  },
  {
    slug: "agents-with-a-human-in-charge",
    company: "Harri",
    title: "Agents with a human in charge",
    question: "How do you use AI without losing quality?",
    approved: true, // approved by Sami 2026-11-06
    parts: {
      situation:
        "I wanted to standardise how the team works: one unified workflow for our daily tasks, while maintaining quality.",
      decision:
        "Build it as shared team infrastructure, not personal productivity, with one rule: people review and own every change, and agents do not merge.",
      team:
        "A plugin marketplace of Claude Code skills the group uses daily, automated API contract checks between mobile and backend, and feature verification as two agent sessions: one implements, and a separate one drives real devices and reports what it observed.",
      outcome:
        "The group uses it every day. The daily task workflow is the same across the team, and every change is still reviewed and owned by a person.",
      differently:
        "I'd ship it as a plugin in the company marketplace, with more conventions and standards built in, to make all our lives easier.",
    },
  },
];

export const showDrafts = process.env.NEXT_PUBLIC_SHOW_DRAFTS === "1";
export const visibleCaseStudies = caseStudies.filter((c) => c.approved || showDrafts);
