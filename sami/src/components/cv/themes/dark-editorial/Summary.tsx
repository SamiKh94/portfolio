import SectionTitle from "./SectionTitle";

interface Props {
  text: string;
  order: string;
}

export default function Summary({ text, order }: Props) {
  return (
    <section className="mb-10 print:mb-7">
      <SectionTitle order={order}>Summary</SectionTitle>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--ink-dim)", fontFamily: "var(--font-body)", fontWeight: 300 }}
      >
        {text}
      </p>
    </section>
  );
}
