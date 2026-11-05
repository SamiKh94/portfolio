import SectionHeader from "@/components/SectionHeader";
import { cvHref } from "@/lib/sections";

const links = [
  { label: "Email", value: "khleafsami@gmail.com", href: "mailto:khleafsami@gmail.com", color: "#a78bfa" },
  { label: "WhatsApp", value: "+970 569 320 677", href: "https://wa.me/970569320677", color: "#4ade80" },
  { label: "LinkedIn", value: "linkedin.com/in/samikhleaf", href: "https://www.linkedin.com/in/samikhleaf", color: "#22d3ee" },
  { label: "GitHub", value: "github.com/SamiKh94", href: "https://github.com/SamiKh94", color: "#34d399" },
  { label: "CV", value: "Download PDF", href: cvHref, color: "#fb923c", wide: true },
];

export default function Contact() {

  return (
    <section id="contact" className="py-28 px-6 scroll-mt-14">
      <div className="max-w-3xl mx-auto text-center">
        <div>
          <SectionHeader id="contact" center />
          <p className="text-zinc-400 leading-relaxed -mt-8 mb-12 max-w-lg mx-auto">
            Open to Engineering Manager and Head of Mobile roles: fully remote anywhere in the
            world, or relocation and travel. Email or WhatsApp is the fastest way to reach me.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-12 text-left">
            {links.map((link, i) => {
              const { label, value, href, color } = link;
              return (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`glass glass-hover rounded-2xl px-6 py-4 text-left group min-w-0${"wide" in link ? " sm:col-span-2" : ""}`}
              >
                <div className="text-[10px] font-mono tracking-widest mb-1" style={{ color }}>
                  {label.toUpperCase()}
                </div>
                <div className="text-sm text-zinc-300 group-hover:text-white transition-colors truncate">
                  {value}
                </div>
              </a>
              );
            })}
          </div>

          <p className="text-xs font-mono text-zinc-400">
            Based in Ramallah, Palestine (UTC+2, UTC+3 in summer)
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-white/[0.05] text-center">
        <p className="text-xs text-zinc-400 font-mono">
          © {new Date().getFullYear()} Sami Khleaf · Built with Next.js & Tailwind
        </p>
      </div>
    </section>
  );
}
