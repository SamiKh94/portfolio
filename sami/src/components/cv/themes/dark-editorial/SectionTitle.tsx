interface Props {
  children: React.ReactNode;
  order: string;
}

export default function SectionTitle({ children, order }: Props) {
  return (
    <div className="flex items-center gap-3 mb-5">
      {/* Index */}
      <span
        className="text-[10px] font-medium flex-shrink-0"
        style={{ fontFamily: "var(--font-mono)", color: "var(--gold)" }}
      >
        [{order}]
      </span>

      {/* Label */}
      <h2
        className="text-[10px] font-medium uppercase flex-shrink-0"
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--ink-dim)",
          letterSpacing: "0.18em",
        }}
      >
        {children}
      </h2>

      {/* Divider */}
      <div className="flex-1" style={{ height: "1px", background: "var(--divider)" }} />
    </div>
  );
}
