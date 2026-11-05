"use client";
import { useInView } from "@/lib/useInView";
import SectionHeader from "@/components/SectionHeader";

// Sami's own words from the 5 Nov interview. Fix spelling only; do not polish.
const quote =
  "I'm already doing the manager job without the title. I see myself as an enabler, and I hear a lot that I enable the work to move forward. What I'm proudest of is that I delegate the work to my team, and they're up to it.";

const points = [
  {
    title: "People",
    color: "#a78bfa",
    body: "1:1s, performance reviews, career development and promotions for up to 8 direct reports, including native iOS engineers in a stack I don't write myself.",
  },
  {
    title: "Hiring",
    color: "#22d3ee",
    body: "I set the hiring bar and have interviewed, hired and rejected many engineers; some I hired are still on the team, and some have grown into more senior work.",
  },
  {
    title: "Across teams",
    color: "#fb923c",
    body: "I work with backend, QA, product, design and delivery to keep projects moving, and with product owners to get specs and designs ready for development. I take the hard calls myself: technical decisions, mobile proofs of concept, production quality, support escalations.",
  },
  {
    title: "Structure",
    color: "#34d399",
    body: "I authored the Android and Flutter chapter structure the group runs on, so craft decisions sit with the people who hold the craft. The release pipeline is mine end to end.",
  },
];

export default function HowILead() {
  const { ref, inView } = useInView();

  return (
    <section id="how-i-lead" className="py-28 px-6 scroll-mt-14">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <SectionHeader id="how-i-lead" inView={inView} />

        <blockquote
          className={`border-l-2 border-violet-500/60 pl-5 sm:pl-6 mb-12 max-w-3xl transition-all duration-700 delay-150 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="text-lg sm:text-xl text-zinc-200 leading-relaxed">{quote}</p>
        </blockquote>

        <ul className="grid sm:grid-cols-2 gap-4">
          {points.map(({ title, color, body }, i) => (
            <li
              key={title}
              className="glass glass-hover rounded-2xl p-6"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${0.2 + i * 0.08}s, transform 0.6s ease ${0.2 + i * 0.08}s, background 0.2s, border-color 0.2s`,
              }}
            >
              <h3 className="flex items-center gap-2.5 text-sm font-semibold text-white mb-2">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: color }} />
                {title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
