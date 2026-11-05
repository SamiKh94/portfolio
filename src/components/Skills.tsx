"use client";
import { useInView } from "@/lib/useInView";
import SectionHeader from "@/components/SectionHeader";

// Same groups and order as the CV. Leadership and product come first on purpose.
const groups = [
  {
    label: "Leadership",
    color: "from-violet-500 to-purple-500",
    bg: "rgba(139,92,246,0.1)",
    border: "rgba(139,92,246,0.25)",
    text: "#a78bfa",
    items: ["People management", "Hiring", "Performance reviews", "Career development", "Delegation", "Cross-functional delivery with product, design, backend and QA"],
  },
  {
    label: "Product and growth",
    color: "from-fuchsia-500 to-pink-500",
    bg: "rgba(217,70,239,0.1)",
    border: "rgba(217,70,239,0.25)",
    text: "#e879f9",
    items: ["Merchant and user acquisition", "Referral and loyalty mechanics", "Retention through streaks", "Arabic-first and RTL UX"],
  },
  {
    label: "Android",
    color: "from-emerald-500 to-green-500",
    bg: "rgba(16,185,129,0.1)",
    border: "rgba(16,185,129,0.25)",
    text: "#34d399",
    items: ["Kotlin", "Jetpack Compose", "Hilt", "Room", "LiveData", "Coroutines", "Play Console staged rollouts", "Remote-config feature flags"],
  },
  {
    label: "Cross-platform",
    color: "from-cyan-500 to-teal-500",
    bg: "rgba(6,182,212,0.1)",
    border: "rgba(6,182,212,0.25)",
    text: "#22d3ee",
    items: ["Flutter", "Dart", "Flutter Add-to-App", "Riverpod", "Firebase"],
  },
  {
    label: "Architecture",
    color: "from-orange-500 to-amber-500",
    bg: "rgba(249,115,22,0.1)",
    border: "rgba(249,115,22,0.25)",
    text: "#fb923c",
    items: ["Multi-module clean architecture", "MVVM", "Large-codebase modularization", "Migration of live products"],
  },
  {
    label: "AI and tooling",
    color: "from-amber-500 to-yellow-500",
    bg: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.25)",
    text: "#fbbf24",
    items: ["Agentic engineering workflows on Claude Code", "LLM features: retrieval, tool calling, agent memory"],
  },
];

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-28 px-6 scroll-mt-14">
      <div className="max-w-5xl mx-auto">
        <div ref={ref}>
          <SectionHeader id="skills" inView={inView} />

          <div className="grid md:grid-cols-2 gap-4">
            {groups.map((g, i) => (
              <div
                key={g.label}
                className="glass glass-hover rounded-2xl p-5"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s, background 0.2s, border-color 0.2s`,
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${g.color} flex-shrink-0`} />
                  <h3 className="text-xs font-semibold text-zinc-300 tracking-wide">{g.label}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-full"
                      style={{ background: g.bg, border: `1px solid ${g.border}`, color: g.text }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
