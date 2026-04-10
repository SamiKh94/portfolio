import SectionTitle from "./SectionTitle";

interface Props {
  groups: Record<string, string[]>;
  order: string;
}

export default function Skills({ groups, order }: Props) {
  return (
    <section className="mb-10 print:mb-7">
      <SectionTitle order={order}>Skills</SectionTitle>
      <div className="space-y-3">
        {Object.entries(groups).map(([category, items]) => (
          <div key={category} className="flex gap-4 items-start">
            {/* Category label */}
            <span
              className="text-[10px] font-medium uppercase pt-0.5 flex-shrink-0"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--ink-dim)",
                letterSpacing: "0.12em",
                width: "88px",
              }}
            >
              {category}
            </span>

            {/* Skills */}
            <div className="flex flex-wrap gap-1.5">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="text-[11px] px-2.5 py-0.5 rounded-sm"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--ink)",
                    border: "1px solid var(--gold-dim)",
                    background: "var(--gold-subtle)",
                    fontWeight: 400,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
