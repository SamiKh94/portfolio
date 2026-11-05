import { sectionMeta, type SectionId } from "@/lib/sections";

export default function SectionHeader({
  id,
  inView,
  center = false,
}: {
  id: SectionId;
  inView: boolean;
  center?: boolean;
}) {
  const { number, kicker, title } = sectionMeta(id);
  const anim = `transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`;
  return (
    <div className={center ? "text-center" : undefined}>
      <p className={`text-xs font-mono text-violet-400 tracking-widest uppercase mb-3 ${anim}`}>
        {number} / {kicker}
      </p>
      <h2 className={`text-3xl sm:text-4xl font-bold text-white mb-12 delay-100 ${anim}`}>{title}</h2>
    </div>
  );
}
