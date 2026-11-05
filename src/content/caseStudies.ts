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
      situation: {
        needs:
          "Harri had two live production apps on plain MVVM, used by frontline hospitality teams during their shifts. Why did they need to become one, and roughly when (year, how long it took)?",
      },
      decision: {
        needs:
          "We merged them into one modular app on multi-module clean architecture, and the hard part was deciding which flows survived. What is one decision you argued for, and what was the alternative?",
      },
      team: {
        needs:
          "How many engineers worked on it, and how did you split the work and keep both apps shipping while the merge was in progress?",
      },
      outcome: {
        needs:
          "One modular app, without breaking users' trust mid-shift. What changed for the team or for users afterwards? Only facts you can say publicly; no internal metrics.",
      },
      differently: { needs: "What would you do differently if you ran this merge again?" },
    },
  },
  {
    slug: "the-loop-from-the-losing-side",
    company: "Tal3a",
    title: "The loop, from the losing side",
    question: "Can you own a product outcome, not just code?",
    approved: false,
    parts: {
      situation:
        "I took Tal3a from an idea to a live marketplace on both app stores, taking real orders. The product worked. Getting people to it was the hard part: getting their attention is hard, ads and marketing are not enough, they need something new.",
      decision:
        "Build the reasons to come back into the product itself. Al-Haj, an AI shopping assistant (launching soon) that works like asking the man behind the counter: it knows your size and preferences, suggests outfits, and understands Palestinian dialect. And a loyalty programme with discounts and gifts.",
      team:
        "I researched and wrote the product specs and flows, owned architecture and mobile, and led a backend and a frontend engineer through implementation. Merchants came in through a field sales playbook and direct outreach.",
      outcome:
        "Loyalty, discounts and gifts were part of it, but the streak was the real one: daily streaks turned out to be what brought people back.",
      differently: {
        needs:
          "The lesson on your CV is that distribution, not the product, was the constraint. In your words: what would you do differently, and what would you do first?",
      },
    },
  },
  {
    slug: "agents-with-a-human-in-charge",
    company: "Harri",
    title: "Agents with a human in charge",
    question: "How do you use AI without losing quality?",
    approved: false,
    parts: {
      situation: {
        needs:
          "What was the problem or moment that made you build a team workflow, rather than everyone using AI tools on their own?",
      },
      decision:
        "Build it as shared team infrastructure, not personal productivity, with one rule: people review and own every change, and agents do not merge.",
      team:
        "A plugin marketplace of Claude Code skills the group uses daily, automated API contract checks between mobile and backend, and feature verification as two agent sessions: one implements, and a separate one drives real devices and reports what it observed.",
      outcome: {
        needs:
          "One concrete bug the device verification caught, described accurately, and how the team's way of working changed. No measured figures (bug counts, time saved) unless they exist.",
      },
      differently: { needs: "What would you do differently?" },
    },
  },
];

export const showDrafts = process.env.NEXT_PUBLIC_SHOW_DRAFTS === "1";
export const visibleCaseStudies = caseStudies.filter((c) => c.approved || showDrafts);
