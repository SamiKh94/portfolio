"use client";
import { useEffect, useRef, useState } from "react";
import { REVEAL_CLASS } from "@/lib/reveal";

// Reports when the element first scrolls into view. If the reveal animation is
// disabled (no IntersectionObserver or reduced motion: see lib/reveal.ts), it
// reports "in view" straight away so nothing waits on an observer.
export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!document.documentElement.classList.contains(REVEAL_CLASS)) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}
