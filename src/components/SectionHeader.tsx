import { sectionMeta, type SectionId } from "@/lib/sections";

export default function SectionHeader({
  id,
  center = false,
}: {
  id: SectionId;
  center?: boolean;
}) {
  const { number, kicker, title } = sectionMeta(id);
  return (
    <div className={center ? "text-center" : undefined}>
      <p className="text-xs font-mono text-violet-400 tracking-widest uppercase mb-3">
        {number} / {kicker}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
        {title}
      </h2>
    </div>
  );
}
