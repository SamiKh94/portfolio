import { basePath, cvHref } from "@/lib/sections";
import { track } from "@/lib/analytics";

// Every figure here is on the CV. Do not add numbers that are not.
const stats = [
  { value: "11", label: "Engineers led", short: "Up to 8 direct reports", detail: "Up to 8 direct reports, Android, iOS and Flutter" },
  { value: "45,000+", label: "Daily users", short: "Five production apps", detail: "Across five production apps" },
  { value: "10 yrs", label: "In mobile", short: "Since Dec 2016", detail: "Since December 2016" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24 pb-20"
    >
      {/* Ambient glows. Radial gradients, not filter: blur(), which cost ~1s of
          paint on a throttled phone and pushed LCP past 4s. Same footprint as the
          old blurred circles (box + blur radius), centred on the same points. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-1/4 left-1/4 w-[800px] h-[800px] -ml-[150px] -mt-[150px] animate-pulse-glow"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.22) 0%, rgba(124,58,237,0.08) 35%, transparent 65%)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[640px] h-[640px] -mr-[120px] -mb-[120px] animate-pulse-glow animation-delay-500"
          style={{ background: "radial-gradient(circle, rgba(192,38,211,0.16) 0%, rgba(192,38,211,0.06) 35%, transparent 65%)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[460px] h-[460px] -translate-x-1/2 -translate-y-1/2"
          style={{ background: "radial-gradient(circle, rgba(8,145,178,0.10) 0%, transparent 65%)" }}
        />
      </div>

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
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.0] mb-4 animate-slide-up animation-delay-100">
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
            <p className="text-xl sm:text-2xl text-white font-semibold mb-2 animate-slide-up animation-delay-200">
              Engineering leader, mobile and product
            </p>
            <p className="text-base sm:text-lg text-zinc-400 mb-8 animate-slide-up animation-delay-300">
              <span className="block sm:inline sm:whitespace-nowrap">
                Android | Flutter Lead at <span className="text-violet-300 font-medium">Harri</span>
              </span>
              <span className="hidden sm:inline text-zinc-600 mx-2" aria-hidden="true">·</span>
              <span className="block sm:inline sm:whitespace-nowrap">
                Founder of <span className="text-violet-300 font-medium">Tal3a</span>
              </span>
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start animate-slide-up animation-delay-400">
              <a
                href={cvHref}
                {...track("cv", "hero")}
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
                {...track("get-in-touch", "hero")}
                className="px-6 py-3 rounded-xl font-semibold text-sm text-zinc-300 glass glass-hover hover:text-white transition-all hover:-translate-y-0.5"
              >
                Get in touch →
              </a>
            </div>

            {/* Proof stats */}
            <ul className="grid grid-cols-3 gap-2 sm:gap-3 mt-10 max-w-lg mx-auto md:mx-0 animate-fade-in animation-delay-700">
              {stats.map(({ value, label, short, detail }) => (
                <li key={label} className="glass rounded-xl px-2 sm:px-3 py-3 text-center md:text-left">
                  <p className="text-lg sm:text-xl font-bold text-white">{value}</p>
                  <p className="text-[10px] text-zinc-400 tracking-wide uppercase font-mono mt-0.5">
                    {label}
                  </p>
                  <p className="text-[11px] text-zinc-400 leading-snug mt-1">
                    <span className="sm:hidden">{short}</span>
                    <span className="hidden sm:inline">{detail}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Photo */}
          <div className="flex-shrink-0 animate-float">
            <div
              className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden"
              style={{
                // Gradient frame + glow without filter: blur() (paint cost on phones).
                background: "linear-gradient(135deg, rgba(139,92,246,0.6), rgba(217,70,239,0.6))",
                padding: "3px",
                boxShadow: "0 0 48px rgba(139,92,246,0.28)",
              }}
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden"
                style={{ background: "#1a1a2e" }}>
                {/* 448px square WebP = 2x the largest display size (224px). */}
                <img
                  src={`${basePath}/sami-448.webp`}
                  alt="Portrait of Sami Khleaf"
                  width={448}
                  height={448}
                  decoding="async"
                  fetchPriority="high"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
