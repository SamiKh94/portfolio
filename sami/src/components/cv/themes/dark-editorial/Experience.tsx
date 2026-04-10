import type { ExperienceEntry } from "@/lib/types";
import SectionTitle from "./SectionTitle";

interface Props {
  entries: ExperienceEntry[];
  order: string;
}

export default function Experience({ entries, order }: Props) {
  return (
    <section className="mb-10 print:mb-7">
      <SectionTitle order={order}>Experience</SectionTitle>
      <div className="space-y-7 print:space-y-5">
        {entries.map((entry, i) => (
          <div key={i} style={{ breakInside: "avoid" }}>
            {/* Company row */}
            <div className="flex items-baseline justify-between gap-4 mb-2">
              <div className="flex items-baseline gap-2 flex-wrap">
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--ink)", fontFamily: "var(--font-body)" }}
                >
                  {entry.company}
                </span>
                <span style={{ color: "var(--ink-faint)" }}>—</span>
                <span
                  className="text-sm"
                  style={{ color: "var(--gold)", fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {entry.role}
                </span>
                {entry.location && (
                  <span
                    className="text-[11px]"
                    style={{ color: "var(--ink-dim)", fontFamily: "var(--font-mono)" }}
                  >
                    · {entry.location}
                  </span>
                )}
              </div>
              <span
                className="text-[11px] whitespace-nowrap flex-shrink-0"
                style={{ fontFamily: "var(--font-mono)", color: "var(--ink-dim)" }}
              >
                {entry.period}
              </span>
            </div>

            {/* Bullets */}
            <ul className="space-y-1.5 pl-1">
              {entry.bullets.map((bullet, j) => (
                <li key={j} className="flex gap-3 text-sm leading-relaxed">
                  <span
                    className="flex-shrink-0 mt-[6px] text-[7px]"
                    style={{ color: "var(--gold)" }}
                  >
                    ◆
                  </span>
                  <span style={{ color: "var(--ink-dim)", fontWeight: 300 }}>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
