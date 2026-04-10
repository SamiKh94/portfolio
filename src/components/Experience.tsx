"use client";
import { useInView } from "@/lib/useInView";

const jobs = [
  {
    company: "Harri",
    role: "Android & Flutter Lead",
    period: "Jan 2018 – Present",
    location: "Ramallah, Palestine",
    color: "from-violet-500 to-fuchsia-500",
    accent: "#8b5cf6",
    bullets: [
      "Led technical direction across 5 production apps — TeamLive, HarriLive, HarriHire, TeamHub, and Hob Seeker",
      "Spearheaded Flutter Add-to-App adoption, establishing it as the cross-platform standard across the mobile org",
      "Architected MVVM + Clean Architecture rollout, transitioning legacy codebases to a consistent, testable structure",
      "Led Java-to-Kotlin migration, eliminating null-safety vulnerabilities and accelerating developer velocity",
      "Led AI tooling adoption — integrating Cursor IDE and Claude Code, establishing agentic development workflows",
    ],
  },
  {
    company: "Yamsafer",
    role: "Android Developer",
    period: "Dec 2016 – Jan 2018",
    location: "Ramallah, Palestine",
    color: "from-cyan-500 to-blue-500",
    accent: "#06b6d4",
    bullets: [
      "Engineered hotel search, filters, booking flows, and reservation management using Retrofit and RxJava",
      "Established unit test coverage, improving release confidence and eliminating production regressions",
    ],
  },
  {
    company: "Freelance",
    role: "Mobile Developer",
    period: "2017 – Present",
    location: "Remote",
    color: "from-emerald-500 to-teal-500",
    accent: "#10b981",
    bullets: [
      "Delivered end-to-end cross-platform and Android-native apps across e-commerce, productivity, and service domains using Flutter and React Native",
    ],
  },
];

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-xs font-mono text-violet-400 tracking-widest uppercase mb-3">
            04 / Where I&apos;ve worked
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Experience</h2>

          <div className="space-y-6">
            {jobs.map((job, i) => (
              <div
                key={job.company}
                className="glass glass-hover rounded-2xl p-6 sm:p-8 group transition-all duration-300"
                style={{
                  transitionDelay: `${i * 100}ms`,
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s, background 0.2s, border-color 0.2s`,
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span
                        className={`text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${job.color} text-white`}
                      >
                        {job.company}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-xs font-mono text-zinc-400">{job.period}</div>
                    <div className="text-xs text-zinc-600 mt-0.5">{job.location}</div>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm text-zinc-400 leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: job.accent }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
