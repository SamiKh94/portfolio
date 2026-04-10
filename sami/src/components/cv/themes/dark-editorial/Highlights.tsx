import SectionTitle from "./SectionTitle";

interface Props {
  bullets: string[];
  order: string;
}

export default function Highlights({ bullets, order }: Props) {
  return (
    <section className="mb-10 print:mb-7">
      <SectionTitle order={order}>Engineering Highlights</SectionTitle>

      {/* Gold-tinted container — differentiates from experience */}
      <div
        className="rounded-sm px-5 py-4 space-y-2.5 print:px-0 print:py-0 print:space-y-2"
        style={{ background: "var(--gold-subtle)", border: "1px solid var(--divider)" }}
      >
        {bullets.map((bullet, i) => (
          <div key={i} className="flex gap-4">
            <span
              className="flex-shrink-0 text-[10px] font-medium pt-[3px]"
              style={{ fontFamily: "var(--font-mono)", color: "var(--gold)" }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--ink-dim)", fontWeight: 300 }}
            >
              {bullet}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
