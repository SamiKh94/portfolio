import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)"],
        mono:    ["var(--font-mono)"],
        body:    ["var(--font-body)"],
      },
      colors: {
        canvas:  "var(--canvas)",
        ink:     "var(--ink)",
        "ink-dim":    "var(--ink-dim)",
        "ink-faint":  "var(--ink-faint)",
        gold:         "var(--gold)",
        "gold-dim":   "var(--gold-dim)",
        "gold-subtle":"var(--gold-subtle)",
        divider:      "var(--divider)",
      },
      letterSpacing: {
        section: "0.18em",
      },
    },
  },
  plugins: [],
};

export default config;
