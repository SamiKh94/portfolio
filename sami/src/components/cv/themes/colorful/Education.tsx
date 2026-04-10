import type { EducationEntry } from "@/lib/types";
import SectionTitle from "./SectionTitle";

interface Props {
  entries: EducationEntry[];
  order: string;
}

export default function Education({ entries, order }: Props) {
  return (
    <section className="mb-6 print:mb-4">
      <SectionTitle order={order}>Education</SectionTitle>
      <div className="space-y-3">
        {entries.map((entry, i) => (
          <div key={i} className="flex items-baseline justify-between gap-4 flex-wrap">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span
                className="text-sm font-semibold text-slate-900"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {entry.degree}
              </span>
              <span className="text-slate-300">—</span>
              <span
                className="text-sm text-slate-500"
                style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}
              >
                {entry.school}
              </span>
              {entry.note && (
                <span
                  className="text-[11px] text-slate-400"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  · {entry.note}
                </span>
              )}
            </div>
            <span
              className="text-[11px] text-slate-400 flex-shrink-0"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {entry.year}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
