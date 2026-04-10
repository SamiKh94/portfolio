import SectionTitle from "./SectionTitle";

interface Props {
  text: string;
  order: string;
}

export default function Summary({ text, order }: Props) {
  return (
    <section className="mb-6 print:mb-4">
      <SectionTitle order={order}>Summary</SectionTitle>
      <p className="text-sm leading-relaxed text-slate-600" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}>
        {text}
      </p>
    </section>
  );
}
