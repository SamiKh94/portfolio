import SectionTitle from "./SectionTitle";

interface Props {
  items: string[];
  order: string;
}

export default function CoreExpertise({ items, order }: Props) {
  return (
    <section className="mb-8 print:mb-6">
      <SectionTitle order={order}>Core Expertise</SectionTitle>
      <p
        className="text-[13px] text-slate-700"
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 500,
          letterSpacing: "0.01em",
        }}
      >
        {items.join(" • ")}
      </p>
    </section>
  );
}
