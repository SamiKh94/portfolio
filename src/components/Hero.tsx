"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Ambient blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/20 blur-[120px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-fuchsia-600/15 blur-[100px] animate-pulse-glow animation-delay-500 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-600/10 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-zinc-400 tracking-wider">
                Available for senior roles
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

            {/* Title */}
            <p className="text-lg sm:text-xl text-zinc-300 font-medium mb-3 animate-slide-up animation-delay-200 opacity-0">
              Android & Flutter Lead
              <span className="text-zinc-600 mx-3">·</span>
              <span className="text-violet-400">Mobile Architect</span>
            </p>

            {/* Tagline */}
            <p className="text-zinc-500 text-base leading-relaxed max-w-lg mb-8 animate-slide-up animation-delay-300 opacity-0">
              8+ years building production Android and Flutter applications at scale.
              Founder of{" "}
              <span className="text-violet-300 font-medium">Tal3a</span> — a multi-vendor
              logistics marketplace with AI-native commerce.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start animate-slide-up animation-delay-400 opacity-0">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #8b5cf6)",
                  boxShadow: "0 0 24px rgba(139,92,246,0.3)",
                }}
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl font-semibold text-sm text-zinc-300 glass glass-hover hover:text-white transition-all hover:-translate-y-0.5"
              >
                Get in touch →
              </a>
            </div>

            {/* Stat chips */}
            <div className="flex flex-wrap gap-3 mt-10 justify-center md:justify-start animate-fade-in animation-delay-700 opacity-0">
              {[
                { label: "Years exp.", value: "8+" },
                { label: "Production apps", value: "5" },
                { label: "Own product", value: "Tal3a" },
              ].map(({ label, value }) => (
                <div key={label} className="glass rounded-xl px-4 py-2.5 text-center">
                  <div className="text-lg font-bold text-white">{value}</div>
                  <div className="text-[10px] text-zinc-500 tracking-wide uppercase font-mono">
                    {label}
                  </div>
                </div>
              ))}
            </div>
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
                  src="/sami.png"
                  alt="Sami Khleaf"
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
