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
          <div key={i} className="flex items-baseline justify-between gap-4">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span
                className="text-sm font-medium"
                style={{ color: "var(--ink)" }}
              >
                {entry.degree}
              </span>
              <span style={{ color: "var(--ink-faint)" }}>—</span>
              <span
                className="text-sm"
                style={{ color: "var(--ink-dim)", fontWeight: 300 }}
              >
                {entry.school}
              </span>
              {entry.note && (
                <span
                  className="text-[11px]"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--ink-dim)" }}
                >
                  · {entry.note}
                </span>
              )}
            </div>
            <span
              className="text-[11px] flex-shrink-0"
              style={{ fontFamily: "var(--font-mono)", color: "var(--ink-dim)" }}
            >
              {entry.year}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
