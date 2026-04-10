interface Props {
  children: React.ReactNode;
  order: string;
  color?: string;
}

export default function SectionTitle({ children, order, color = "#2563EB" }: Props) {
  return (
    <div className="flex items-center gap-3 mb-5" style={{ breakAfter: "avoid" }}>
      {/* Numbered badge */}
      <span
        className="text-[10px] font-semibold px-1.5 py-0.5 rounded flex-shrink-0"
        style={{
          background: color,
          color: "#fff",
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: "0.05em",
        }}
      >
        {order}
      </span>

      {/* Label */}
      <h2
        className="text-[11px] font-semibold uppercase tracking-widest flex-shrink-0 text-slate-600"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        {children}
      </h2>

      {/* Divider */}
      <div className="flex-1 h-px bg-slate-200" />
    </div>
  );
}
