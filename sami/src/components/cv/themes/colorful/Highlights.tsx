import SectionTitle from "./SectionTitle";

interface Props {
  bullets: string[];
  order: string;
}

export default function Highlights({ bullets, order }: Props) {
  return (
    <section className="mb-6 print:mb-4">
      <SectionTitle order={order}>Engineering Highlights</SectionTitle>
      <div
        className="rounded-lg px-5 py-4 space-y-3 print:rounded-none print:border print:border-slate-200"
        style={{
          background: "linear-gradient(135deg, #EFF6FF 0%, #F0FDFA 100%)",
          border: "1px solid #BFDBFE",
          breakInside: "avoid",
        }}
      >
        {bullets.map((bullet, i) => (
          <div key={i} className="flex gap-4 items-start">
            <span
              className="flex-shrink-0 text-[10px] font-semibold px-1.5 py-0.5 rounded mt-0.5"
              style={{
                background: "#2563EB",
                color: "#fff",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <p
              className="text-sm leading-relaxed text-slate-600"
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}
            >
              {bullet}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
