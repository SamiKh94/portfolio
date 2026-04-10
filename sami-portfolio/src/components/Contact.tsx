"use client";
import { useInView } from "@/lib/useInView";

const links = [
  { label: "Email", value: "khleafsami@gmail.com", href: "mailto:khleafsami@gmail.com", color: "#a78bfa" },
  { label: "LinkedIn", value: "linkedin.com/in/samikleaf", href: "https://linkedin.com/in/samikleaf", color: "#22d3ee" },
  { label: "GitHub", value: "github.com/SamiKh94", href: "https://github.com/SamiKh94", color: "#34d399" },
];

export default function Contact() {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-xs font-mono text-violet-400 tracking-widest uppercase mb-3">
            06 / Get in touch
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let&apos;s work together
          </h2>
          <p className="text-zinc-500 leading-relaxed mb-12 max-w-lg mx-auto">
            Open to senior and staff-level mobile engineering roles. Reach out directly or connect
            on LinkedIn.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {links.map(({ label, value, href, color }, i) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="glass glass-hover rounded-2xl px-6 py-4 text-left group flex-1 min-w-0"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s, background 0.2s, border-color 0.2s`,
                }}
              >
                <div className="text-[10px] font-mono tracking-widest mb-1" style={{ color }}>
                  {label.toUpperCase()}
                </div>
                <div className="text-sm text-zinc-300 group-hover:text-white transition-colors truncate">
                  {value}
                </div>
              </a>
            ))}
          </div>

          <p className="text-xs font-mono text-zinc-700">
            Ramallah, Palestine · Available for remote roles worldwide
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-white/[0.05] text-center">
        <p className="text-xs text-zinc-700 font-mono">
          Sami Khleaf · Built with Next.js & Tailwind
        </p>
      </div>
    </section>
  );
}
