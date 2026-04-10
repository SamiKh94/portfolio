"use client";
import { useEffect, useState } from "react";

const links = ["About", "Experience", "Projects", "Skills", "Contact"];
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/[0.06]" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#hero"
          className="font-mono text-sm text-violet-400 tracking-widest hover:text-violet-300 transition-colors"
        >
          SK
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm text-zinc-400 hover:text-white transition-colors tracking-wide"
            >
              {l}
            </a>
          ))}
        </div>
        <a
          href={`${basePath}/sami-cv.pdf`}
          className="text-xs font-mono px-4 py-2 rounded-lg border border-violet-500/30 text-violet-400 hover:bg-violet-500/10 hover:border-violet-500/50 transition-all"
        >
          Resume ↗
        </a>
      </div>
    </nav>
  );
}
