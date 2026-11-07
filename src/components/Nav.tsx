"use client";
import { useEffect, useRef, useState } from "react";
import { sections, cvHref } from "@/lib/sections";
import { track } from "@/lib/analytics";

// Mobile menu is a native <details>, so it opens and closes without JavaScript
// and is keyboard-operable by default. The effects below only add niceties:
// Esc to close, close on link tap / outside tap, close when resized to desktop.
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Attached once and checked against the live <details> state, so there's no
  // window between opening the menu and the listeners existing.
  useEffect(() => {
    const isOpen = () => menuRef.current?.open === true;
    const close = (returnFocus: boolean) => {
      if (!isOpen()) return;
      menuRef.current!.open = false;
      if (returnFocus) summaryRef.current?.focus();
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close(true);
    // "Inside" means the button or the panel; the scrim counts as outside.
    const onPointer = (e: PointerEvent) => {
      const t = e.target as Node;
      if (!summaryRef.current?.contains(t) && !panelRef.current?.contains(t)) close(false);
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const onResize = () => desktop.matches && close(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      desktop.removeEventListener("change", onResize);
    };
  }, []);

  const solid = scrolled || open;

  return (
    <nav
      aria-label="Main"
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        open ? "bg-[#0c0c14] border-b border-white/[0.06]" : solid ? "bg-[#0c0c14]/90 backdrop-blur-xl border-b border-white/[0.06]" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
        <a
          href="#hero"
          className="font-mono text-sm text-violet-400 tracking-widest hover:text-violet-300 transition-colors rounded"
        >
          SK<span className="sr-only">, Sami Khleaf, back to top</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="text-sm text-zinc-400 hover:text-white transition-colors tracking-wide rounded"
              >
                {s.nav}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={cvHref}
            {...track("cv", "nav")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono px-4 py-2 rounded-lg border border-violet-500/30 text-violet-300 hover:bg-violet-500/10 hover:border-violet-500/50 transition-all"
          >
            CV <span aria-hidden="true">↗</span>
            <span className="sr-only"> (PDF, opens in a new tab)</span>
          </a>

          <details
            ref={menuRef}
            className="md:hidden group"
            onToggle={(e) => setOpen((e.currentTarget as HTMLDetailsElement).open)}
          >
            <summary
              ref={summaryRef}
              aria-label="Menu"
              className="list-none [&::-webkit-details-marker]:hidden cursor-pointer w-10 h-10 -mr-2 flex items-center justify-center rounded-lg text-zinc-300 hover:text-white hover:bg-white/5"
            >
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                <path className="group-open:hidden" d="M3 6h14M3 10h14M3 14h14" />
                <path className="hidden group-open:block" d="M5 5l10 10M15 5L5 15" />
              </svg>
            </summary>
            {/* Scrim: dims the page under the open menu; tapping it closes the menu (outside-tap handler). */}
            <div aria-hidden="true" className="fixed inset-0 top-14 bg-black/60" />
            <div ref={panelRef} className="absolute left-0 right-0 top-14 border-b border-white/[0.08] bg-[#0c0c14] shadow-2xl shadow-black/50">
              <ul className="max-w-6xl mx-auto px-4 py-3">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      onClick={() => {
                        if (menuRef.current) menuRef.current.open = false;
                      }}
                      className="block px-3 py-3 rounded-lg text-base text-zinc-300 hover:text-white hover:bg-white/5"
                    >
                      {s.nav}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
}
