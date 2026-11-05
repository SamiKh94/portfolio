import type { CSSProperties } from "react";

// Scroll fade-in, progressive-enhancement style.
//
// Elements are fully visible in the server-rendered HTML. They are only hidden
// (and then faded in) when the inline script in app/layout.tsx has added the
// `reveal-ready` class to <html>, which it does only if IntersectionObserver
// exists and the visitor has not asked for reduced motion. So: no JS, an old
// browser, reduced motion, or printing all show everything, immediately.
// The CSS lives in app/globals.css under "Scroll reveal".

export const REVEAL_CLASS = "reveal-ready";

export const revealBootScript = `(function(){try{var d=document.documentElement;if('IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('${REVEAL_CLASS}')}}catch(e){}})();`;

export function reveal(inView: boolean, delaySeconds = 0) {
  return {
    "data-reveal": inView ? "in" : "out",
    style: { "--reveal-delay": `${delaySeconds}s` } as CSSProperties,
  };
}
