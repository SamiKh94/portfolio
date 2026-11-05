"use client";
import { basePath, cvHref } from "@/lib/sections";

// Every figure here is on the CV. Do not add numbers that are not.
const stats = [
  { value: "11", label: "Engineers led", detail: "Up to 8 direct reports, Android, iOS and Flutter" },
  { value: "45,000+", label: "Daily users", detail: "Across five production apps" },
  { value: "10 yrs", label: "In mobile", detail: "Since December 2016" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24 pb-20"
    >
      {/* Ambient blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/20 blur-[120px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-fuchsia-600/15 blur-[100px] animate-pulse-glow animation-delay-500 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-600/10 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">

          {/* Text */}
          <div className="flex-1 min-w-0 w-full text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl sm:rounded-full glass mb-6 animate-fade-in max-w-full">
              <span className="w-2 h-2 shrink-0 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-zinc-300 text-left">
                Open to Engineering Manager and Head of Mobile roles · Remote worldwide, relocation or travel
              </span>
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.0] mb-4 animate-slide-up animation-delay-100 opacity-0">
              <span
                className="text-gradient bg-gradient-to-r"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #a78bfa 0%, #8b5cf6 40%, #d946ef 100%)",
                  backgroundSize: "200% 200%",
                }}
              >
                Sami
              </span>
              <br />
              <span className="text-white">Khleaf</span>
            </h1>

            {/* Title line */}
            <p className="text-xl sm:text-2xl text-white font-semibold mb-2 animate-slide-up animation-delay-200 opacity-0">
              Engineering leader, mobile and product
            </p>
            <p className="text-base sm:text-lg text-zinc-400 mb-8 animate-slide-up animation-delay-300 opacity-0">
              <span className="block sm:inline sm:whitespace-nowrap">
                Android | Flutter Lead at <span className="text-violet-300 font-medium">Harri</span>
              </span>
              <span className="hidden sm:inline text-zinc-600 mx-2" aria-hidden="true">·</span>
              <span className="block sm:inline sm:whitespace-nowrap">
                Founder of <span className="text-violet-300 font-medium">Tal3a</span>
              </span>
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start animate-slide-up animation-delay-400 opacity-0">
              <a
                href={cvHref}
                download="Sami-Khleaf-CV.pdf"
                className="px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #8b5cf6)",
                  boxShadow: "0 0 24px rgba(139,92,246,0.3)",
                }}
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl font-semibold text-sm text-zinc-300 glass glass-hover hover:text-white transition-all hover:-translate-y-0.5"
              >
                Get in touch →
              </a>
            </div>

            {/* Proof stats */}
            <ul className="grid grid-cols-3 gap-2 sm:gap-3 mt-10 max-w-lg mx-auto md:mx-0 animate-fade-in animation-delay-700 opacity-0">
              {stats.map(({ value, label, detail }) => (
                <li key={label} className="glass rounded-xl px-3 py-3 text-center md:text-left">
                  <p className="text-lg sm:text-xl font-bold text-white">{value}</p>
                  <p className="text-[10px] text-zinc-400 tracking-wide uppercase font-mono mt-0.5">
                    {label}
                  </p>
                  <p className="hidden sm:block text-[11px] text-zinc-500 leading-snug mt-1">{detail}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Photo */}
          <div className="flex-shrink-0 animate-float">
            <div
              className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #7c3aed22, #d946ef22)",
                padding: "3px",
              }}
            >
              <div
                className="absolute inset-0 rounded-3xl opacity-60"
                style={{
                  background:
                    "linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)",
                  filter: "blur(20px)",
                  transform: "scale(0.9)",
                }}
              />
              <div className="relative w-full h-full rounded-3xl overflow-hidden"
                style={{ background: "#1a1a2e" }}>
                <img
                  src={`${basePath}/sami.png`}
                  alt="Portrait of Sami Khleaf"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-10 bg-gradient-to-b from-violet-500/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
