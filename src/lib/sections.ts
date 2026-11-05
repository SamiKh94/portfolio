import { visibleCaseStudies } from "@/content/caseStudies";

// Single source of truth for page order. Nav links and the "01 / ..." section
// numbers are both derived from this list, so they can never drift apart.
// To add a section (e.g. case studies), insert it here and render it in page.tsx.
const allSections = [
  { id: "how-i-lead", nav: "How I lead", kicker: "How I work", title: "How I lead" },
  { id: "case-studies", nav: "Case studies", kicker: "Proof", title: "Case studies" },
  { id: "experience", nav: "Experience", kicker: "Where I've worked", title: "Experience" },
  { id: "other-work", nav: "Other work", kicker: "Side and client work", title: "Other work" },
  { id: "skills", nav: "Skills", kicker: "What I bring", title: "Skills" },
  { id: "contact", nav: "Contact", kicker: "Get in touch", title: "Let's work together" },
] as const;

// Case studies only appear (in the page, the nav and the numbering) once at
// least one is approved, or locally in draft preview. See content/caseStudies.ts.
export const sections = allSections.filter(
  (s) => s.id !== "case-studies" || visibleCaseStudies.length > 0
);

export type SectionId = (typeof allSections)[number]["id"];

export function sectionMeta(id: SectionId) {
  const index = sections.findIndex((s) => s.id === id);
  if (index === -1) throw new Error(`Unknown section: ${id}`);
  return { ...sections[index], number: String(index + 1).padStart(2, "0") };
}

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const cvHref = `${basePath}/sami-cv.pdf`;
