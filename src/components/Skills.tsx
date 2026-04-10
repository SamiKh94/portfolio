"use client";
import { useInView } from "@/lib/useInView";

const groups = [
  {
    label: "Languages",
    color: "from-blue-500 to-indigo-500",
    bg: "rgba(99,102,241,0.1)",
    border: "rgba(99,102,241,0.25)",
    text: "#818cf8",
    items: ["Kotlin", "Java", "Dart", "Swift"],
  },
  {
    label: "Mobile & Cross-Platform",
    color: "from-cyan-500 to-teal-500",
    bg: "rgba(6,182,212,0.1)",
    border: "rgba(6,182,212,0.25)",
    text: "#22d3ee",
    items: ["Flutter", "Android Jetpack", "Flutter Add-to-App", "React Native", "RxJava", "Retrofit", "Dagger / Hilt"],
  },
  {
    label: "Architecture & System Design",
    color: "from-orange-500 to-amber-500",
    bg: "rgba(249,115,22,0.1)",
    border: "rgba(249,115,22,0.25)",
    text: "#fb923c",
    items: ["Clean Architecture", "MVVM", "Modularization", "Repository Pattern", "Multi-App Ecosystem Design"],
  },
  {
    label: "Cloud & Backend Integration",
    color: "from-violet-500 to-purple-500",
    bg: "rgba(139,92,246,0.1)",
    border: "rgba(139,92,246,0.25)",
    text: "#a78bfa",
    items: ["Firebase", "AWS Amplify", "Cognito (OAuth 2.0)", "Pusher"],
  },
  {
    label: "Observability & Tooling",
    color: "from-amber-500 to-yellow-500",
    bg: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.25)",
    text: "#fbbf24",
    items: ["DataDog RUM", "Google Play Console", "Git"],
  },
  {
    label: "AI-Assisted Engineering",
    color: "from-emerald-500 to-green-500",
    bg: "rgba(16,185,129,0.1)",
    border: "rgba(16,185,129,0.25)",
    text: "#34d399",
    items: ["Cursor IDE", "Claude Code", "Agentic workflows", "Prompt-driven development", "Context engineering", "LLM feature integration"],
  },
];

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={ref}>
          <p
            className={`text-xs font-mono text-violet-400 tracking-widest uppercase mb-3 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            05 / What I work with
          </p>
          <h2
            className={`text-3xl sm:text-4xl font-bold text-white mb-12 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Skills
          </h2>

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
                  <span className="text-xs font-semibold text-zinc-400 tracking-wide">{g.label}</span>
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
