import { sectionMeta, type SectionId } from "@/lib/sections";
import { reveal } from "@/lib/reveal";

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
  return (
    <div className={center ? "text-center" : undefined}>
      <p className="text-xs font-mono text-violet-400 tracking-widest uppercase mb-3" {...reveal(inView)}>
        {number} / {kicker}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12" {...reveal(inView, 0.1)}>
        {title}
      </h2>
    </div>
  );
}
