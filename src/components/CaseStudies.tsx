import SectionHeader from "@/components/SectionHeader";
import { basePath } from "@/lib/sections";
import { PART_LABELS, visibleCaseStudies, type CaseStudy, type Part } from "@/content/caseStudies";

const order = Object.keys(PART_LABELS) as (keyof CaseStudy["parts"])[];

function PartBody({ part }: { part: Part }) {
  if (typeof part === "string") return <p className="text-sm sm:text-[15px] text-zinc-300 leading-relaxed">{part}</p>;
  // Only reachable in local draft preview: unapproved studies never render live.
  return (
    <p className="text-sm leading-relaxed rounded-lg border border-amber-400/30 bg-amber-400/[0.06] text-amber-200 px-3 py-2">
      <span className="font-mono text-[11px] uppercase tracking-wider text-amber-300 mr-2">Needs Sami</span>
      {part.needs}
    </p>
  );
}

export default function CaseStudies() {
  if (visibleCaseStudies.length === 0) return null;

  return (
    <section id="case-studies" className="py-28 px-6 scroll-mt-14">
      <div className="max-w-4xl mx-auto">
        <SectionHeader id="case-studies" />

        <div className="space-y-6">
          {visibleCaseStudies.map((cs) => (
            <article
              key={cs.slug}
              id={cs.slug}
              aria-labelledby={`${cs.slug}-title`}
              className="glass rounded-2xl p-6 sm:p-8 scroll-mt-20"
            >
              <header className="mb-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white">
                    {cs.company}
                  </span>
                  {!cs.approved && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-amber-400/40 text-amber-300 tracking-wider">
                      DRAFT, NOT LIVE
                    </span>
                  )}
                </div>
                <h3 id={`${cs.slug}-title`} className="text-xl sm:text-2xl font-semibold text-white">
                  {cs.title}
                </h3>
                <p className="text-sm text-zinc-400 mt-1">{cs.question}</p>
              </header>

              {cs.image && (
                <img
                  src={`${basePath}${cs.image.src}`}
                  alt={cs.image.alt}
                  width={cs.image.width}
                  height={cs.image.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-xl border border-white/10 mb-6"
                />
              )}

              <dl className="grid sm:grid-cols-[11rem_1fr] gap-x-6 gap-y-4">
                {order.map((key) => (
                  <div key={key} className="contents">
                    <dt className="text-[11px] font-mono uppercase tracking-wider text-violet-300 sm:pt-1">
                      {PART_LABELS[key]}
                    </dt>
                    <dd className="mb-2 sm:mb-0">
                      <PartBody part={cs.parts[key]} />
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
