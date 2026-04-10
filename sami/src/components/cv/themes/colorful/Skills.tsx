import SectionTitle from "./SectionTitle";

interface Props {
  groups: Record<string, string[]>;
  order: string;
}

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Languages:                      { bg: "#EFF6FF", text: "#1D4ED8", border: "#BFDBFE" },
  "Mobile & Cross-Platform":      { bg: "#F0FDFA", text: "#0F766E", border: "#99F6E4" },
  "Architecture & System Design": { bg: "#FFF7ED", text: "#C2410C", border: "#FED7AA" },
  "Cloud & Backend Integration":  { bg: "#F5F3FF", text: "#6D28D9", border: "#DDD6FE" },
  "Observability & Tooling":      { bg: "#FFFBEB", text: "#B45309", border: "#FDE68A" },
  "AI-Assisted Engineering":      { bg: "#F0FDF4", text: "#15803D", border: "#BBF7D0" },
};

const DEFAULT_COLOR = { bg: "#F1F5F9", text: "#475569", border: "#CBD5E1" };

export default function Skills({ groups, order }: Props) {
  return (
    <section className="mb-6 print:mb-4">
      <SectionTitle order={order}>Skills</SectionTitle>
      <div className="space-y-3">
        {Object.entries(groups).map(([category, items]) => {
          const colors = CATEGORY_COLORS[category] ?? DEFAULT_COLOR;
          return (
            <div key={category} className="flex gap-4 items-start">
              <span
                className="text-[11px] font-semibold pt-0.5 flex-shrink-0 text-slate-500"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  letterSpacing: "0.01em",
                  width: "160px",
                }}
              >
                {category}
              </span>

              <div className="flex flex-wrap gap-1.5">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] px-2.5 py-0.5 rounded-full font-medium"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      background: colors.bg,
                      color: colors.text,
                      border: `1px solid ${colors.border}`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
