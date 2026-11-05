# Sami Khleaf · Personal site

**Engineering leader, mobile and product.** Android | Flutter Lead at [Harri](https://harri.com) · Founder of Tal3a.

🔗 **Live:** https://samikh94.github.io/portfolio/
📄 **CV:** https://samikh94.github.io/portfolio/sami-cv.pdf
💼 **LinkedIn:** https://www.linkedin.com/in/samikhleaf

Open to Engineering Manager and Head of Mobile roles: remote worldwide, relocation or travel.

---

## What's on the site

| Section | What it covers |
|---|---|
| How I lead | Team scope and how I manage: people, hiring, cross-team work, structure |
| Case studies | Three short stories: merging two live apps, Tal3a's growth loop, and an AI workflow with a human in charge |
| Experience | Harri (Android Developer → Android Lead → Android \| Flutter Lead), Tal3a, Yamsafer |
| Other work | Momyt Meet, Primefyre, Lajnati, Jaru |
| Skills | Leadership and product first, then Android, cross-platform, architecture, AI |

## Built with

- **Next.js 14** (App Router, static export) and **Tailwind CSS**
- Deployed to **GitHub Pages** by GitHub Actions on every push to `main`
- No tracking, no backend. One static page with no external requests at runtime (fonts are self-hosted)

Quality bar, checked before each release:

- Lighthouse mobile: 98+ performance, 100 accessibility, best practices and SEO
- axe-core: 0 WCAG 2.1 AA violations, including the mobile menu
- Works without JavaScript, respects reduced motion, and prints cleanly

## Run it locally

```bash
npm ci
npm run dev        # http://localhost:3001
npm run build      # static export to ./out
```

To reproduce the production build exactly, served under `/portfolio/`:

```bash
GITHUB_ACTIONS=true GITHUB_REPOSITORY=SamiKh94/portfolio npm run build
mkdir -p /tmp/site && rm -rf /tmp/site/portfolio && cp -R out /tmp/site/portfolio
python3 -m http.server 8765 -d /tmp/site    # http://localhost:8765/portfolio/
```

## Project layout

| What | Where |
|---|---|
| Section order, nav and numbering (single source) | `src/lib/sections.ts` |
| Page sections | `src/components/` |
| Case studies (only `approved: true` render live) | `src/content/caseStudies.ts` |
| CV download (keep the filename) | `public/sami-cv.pdf` |
| Icons and link-preview image | `src/app/` |
| Deploy workflow | `.github/workflows/deploy.yml` |

## Content rule

The site, the CV and what I say in interviews tell the same story. Every number on the site is on the CV.

---

© Sami Khleaf
