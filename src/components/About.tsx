"use client";
import { useInView } from "@/lib/useInView";

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-xs font-mono text-violet-400 tracking-widest uppercase mb-3">
            02 / Who I am
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">About</h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                I'm a <span className="text-white font-medium">Senior Mobile Engineer</span> and
                product architect based in Ramallah, Palestine, with 8+ years building large-scale
                Android and Flutter applications.
              </p>
              <p>
                At <span className="text-violet-300 font-medium">Harri</span>, I lead technical
                direction across a 5-app production ecosystem — establishing Flutter as the
                cross-platform standard, standardizing Clean Architecture, and driving engineering
                quality across the mobile organization.
              </p>
              <p>
                Outside my day role, I'm the founder and technical architect of{" "}
                <span className="text-violet-300 font-medium">Tal3a</span> — a multi-vendor
                logistics marketplace combining TSP-inspired routing optimization, an AI-native
                shopping assistant, and a full merchant operations platform.
              </p>
              <p>
                I'm deeply invested in{" "}
                <span className="text-emerald-400 font-medium">AI-assisted engineering</span> —
                integrating agentic workflows, prompt-driven development, and LLM-powered features
                into real production systems.
              </p>
            </div>

            {/* Core expertise */}
            <div className="space-y-3">
              {[
                { label: "Mobile Architecture", icon: "◈", color: "#a78bfa" },
                { label: "Cross-Platform Systems", icon: "◈", color: "#22d3ee" },
                { label: "Multi-App Ecosystems", icon: "◈", color: "#fb923c" },
                { label: "AI-Assisted Engineering", icon: "◈", color: "#34d399" },
              ].map(({ label, icon, color }, i) => (
                <div
                  key={label}
                  className="flex items-center gap-4 glass glass-hover rounded-xl px-5 py-3.5"
                  style={{
                    transitionDelay: `${i * 80}ms`,
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateX(0)" : "translateX(20px)",
                    transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s, background 0.2s, border-color 0.2s`,
                  }}
                >
                  <span className="text-lg" style={{ color }}>{icon}</span>
                  <span className="text-sm font-medium text-zinc-300">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
