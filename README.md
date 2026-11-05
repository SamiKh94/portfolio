# Sami Khleaf, personal site

Live: **https://samikh94.github.io/portfolio/**

Engineering leader, mobile and product. One page, static, built with Next.js 14 (App Router, `output: "export"`) and Tailwind CSS, deployed to GitHub Pages.

## Run locally

```bash
npm ci
npm run dev                              # http://localhost:3001
NEXT_PUBLIC_SHOW_DRAFTS=1 npm run dev    # also shows unapproved case-study drafts
```

## Build

```bash
npm run build          # static export to ./out
```

Locally the site builds at `/`. On GitHub Actions `next.config.mjs` sets `basePath` and `assetPrefix` to `/portfolio` (derived from `GITHUB_REPOSITORY`). To reproduce the production build exactly:

```bash
GITHUB_ACTIONS=true GITHUB_REPOSITORY=SamiKh94/portfolio npm run build
mkdir -p /tmp/site && rm -rf /tmp/site/portfolio && cp -R out /tmp/site/portfolio
python3 -m http.server 8765 -d /tmp/site    # http://localhost:8765/portfolio/
```

## Deploy

Push to `main`. `.github/workflows/deploy.yml` builds the export and publishes `./out` to GitHub Pages. Nothing else to do.

## Where things live

| What | Where |
|---|---|
| Page order, nav links, section numbers | `src/lib/sections.ts` (single source; nav and "01 / ..." numbers derive from it) |
| Section components | `src/components/` |
| Case studies | `src/content/caseStudies.ts` (only `approved: true` entries render live) |
| CV download | `public/sami-cv.pdf` (keep this filename; old links point at it) |
| Portrait | `public/sami-448.webp` (2x the 224px display size) |
| Favicon, touch icon, link-preview image | `src/app/favicon.ico`, `icon.png`, `apple-icon.png`, `opengraph-image.png`, `twitter-image.png` |
| Title, description, canonical, Open Graph | `src/app/layout.tsx` |

## Content rules

The site, the CV and interviews must tell the same story:

- No number that isn't on the CV. No Tal3a user, order or install numbers.
- Current title is **Android | Flutter Lead at Harri**, never "Engineering Manager".
- Sami's quoted lines stay in his words; edit spelling and grammar only.
- If the CV changes, update the matching copy here (Experience, Skills, hero stats) in the same PR.

## Design rules

- Content is always visible without JavaScript and without scrolling: no reveal-on-scroll effects that start hidden.
- `prefers-reduced-motion` and print turn off all animation.
- Mobile menu is a native `<details>` so it works without JavaScript.
