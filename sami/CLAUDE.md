# Sami — CV Project Config

## Person
- **Name:** Sami [Last Name]
- **Level:** Staff / Principal (8+ years)
- **Target role:** Staff Software Engineer / Engineering Lead
- **Domains:** Mobile (Flutter), Backend (Laravel/Python), Platform Engineering

## Project Structure
```
sami/
├── data/
│   └── cv.json       ← CV content (edit this to update CV)
├── assets/
│   └── profile.jpg   ← Professional headshot (place here when ready)
├── src/              ← Next.js app
└── CLAUDE.md         ← This file
```

## Design System — Sami's CV

### Accent Color
`#2563EB` — blue. Used on:
- Name in header
- Section title left border bar
- Links (email, LinkedIn, GitHub)
- Skill tag background (`bg-blue-50 text-blue-700`)
- Bullet arrow marker (`▸`)

### Layout
- Style: Modern / Accent (single column, accent left borders on sections)
- Font: Inter
- Page: A4, 2 pages max (staff level)

### Section Order
1. Header
2. Summary
3. Experience
4. Engineering Highlights
5. Skills
6. Projects
7. Education

## Running Locally
```bash
cd sami
npm run dev     # → http://localhost:3000
```

## PDF Export
Open in Chrome → `Cmd+P` → Save as PDF → A4, no margins

## Updating CV Content
Edit `data/cv.json` only — no code changes needed for content updates.

## Skills Available
- `/cv-write` — audit/rewrite CV content in data/cv.json
- `/cv-design` — audit/improve UI components in src/components/cv/
