import type { ExperienceEntry } from "@/lib/types";
import SectionTitle from "./SectionTitle";

interface Props {
  entries: ExperienceEntry[];
  order: string;
}

export default function Experience({ entries, order }: Props) {
  return (
    <section className="mb-6 print:mb-4">
      <SectionTitle order={order}>Experience</SectionTitle>
      <div className="space-y-5 print:space-y-3">
        {entries.map((entry, i) => (
          <div
            key={i}
            className="pl-4"
            style={{
              borderLeft: "2px solid #2563EB",
              breakInside: "avoid",
            }}
          >
            {/* Company row */}
            <div className="flex items-baseline justify-between gap-4 mb-2 flex-wrap">
              <div className="flex items-baseline gap-2 flex-wrap">
                <span
                  className="text-sm font-semibold text-slate-900"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {entry.company}
                </span>
                <span className="text-slate-300">—</span>
                <span
                  className="text-sm text-blue-600"
                  style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400 }}
                >
                  {entry.role}
                </span>
                {entry.location && (
                  <span
                    className="text-[11px] text-slate-400"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    · {entry.location}
                  </span>
                )}
              </div>
              <span
                className="text-[11px] text-slate-400 whitespace-nowrap flex-shrink-0"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {entry.period}
              </span>
            </div>

            {/* Bullets */}
            <ul className="space-y-1.5">
              {entry.bullets.map((bullet, j) => (
                <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-slate-600">
                  <span
                    className="flex-shrink-0 mt-[7px] text-[6px] text-blue-500"
                    style={{ lineHeight: 1 }}
                  >
                    ■
                  </span>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
