import SectionHeader from "@/components/SectionHeader";
import StoreLinks, { type StoreLink } from "@/components/StoreLinks";

const work: { name: string; context: string; line: string; tech: string[]; links: StoreLink[] }[] = [
  {
    name: "Momyt Meet",
    context: "Flutter Lead · Homyt",
    line: "Location-based meetups app: find nearby people with shared interests, create or join a meet, and chat once matched.",
    tech: ["Flutter", "Provider", "Geolocation"],
    links: [{ label: "App Store", href: "https://apps.apple.com/app/id1535550601" }],
  },
  {
    name: "Primefyre",
    context: "Flutter Developer · Curotec",
    line: "Fire safety inspection and compliance app for inspectors in the field; I owned the mobile app from architecture to delivery.",
    tech: ["Flutter", "Clean Architecture"],
    links: [],
  },
  {
    name: "Lajnati",
    context: "Side project",
    line: "Building management for residential committees: payments, expenses, suggestions and residents in one app instead of WhatsApp threads.",
    tech: ["Flutter", "Firebase", "RTL"],
    links: [],
  },
  {
    name: "Jaru",
    context: "First Flutter app",
    line: "Pet care marketplace connecting owners with local sitters and dog walkers, with GraphQL, form-heavy flows and payments.",
    tech: ["Flutter", "GraphQL", "Payments"],
    links: [],
  },
];

export default function OtherWork() {

  return (
    <section id="other-work" className="py-28 px-6 scroll-mt-14">
      <div className="max-w-5xl mx-auto">
        <SectionHeader id="other-work" />

        <ul className="grid sm:grid-cols-2 gap-4">
          {work.map((w, i) => (
            <li
              key={w.name}
              className="glass glass-hover rounded-2xl p-5 flex flex-col"
            >
              <div className="flex items-baseline justify-between gap-3 mb-2">
                <h3 className="text-base font-semibold text-white">{w.name}</h3>
                <p className="text-[11px] font-mono text-zinc-500 text-right">{w.context}</p>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">{w.line}</p>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
                <ul className="flex flex-wrap gap-1.5" aria-label="Tech">
                  {w.tech.map((t) => (
                    <li key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300">
                      {t}
                    </li>
                  ))}
                </ul>
                <StoreLinks links={w.links} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
