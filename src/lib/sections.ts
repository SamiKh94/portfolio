// Single source of truth for page order. Nav links and the "01 / ..." section
// numbers are both derived from this list, so they can never drift apart.
// To add a section (e.g. case studies), insert it here and render it in page.tsx.
export const sections = [
  { id: "how-i-lead", nav: "How I lead", kicker: "How I work", title: "How I lead" },
  { id: "experience", nav: "Experience", kicker: "Where I've worked", title: "Experience" },
  { id: "other-work", nav: "Other work", kicker: "Side and client work", title: "Other work" },
  { id: "skills", nav: "Skills", kicker: "What I bring", title: "Skills" },
  { id: "contact", nav: "Contact", kicker: "Get in touch", title: "Let's work together" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export function sectionMeta(id: SectionId) {
  const index = sections.findIndex((s) => s.id === id);
  if (index === -1) throw new Error(`Unknown section: ${id}`);
  return { ...sections[index], number: String(index + 1).padStart(2, "0") };
}

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const cvHref = `${basePath}/sami-cv.pdf`;
