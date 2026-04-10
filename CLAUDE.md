# CV Creator — Workspace

## Structure
Each person has their own self-contained project directory:

```
cvs/
├── CLAUDE.md                  ← This file — shared CV writing rules
├── .claude/
│   └── commands/
│       ├── cv-write.md        ← /cv-write skill
│       └── cv-design.md       ← /cv-design skill
├── sami/                      ← Sami's full CV project
│   ├── data/cv.json           ← CV content
│   ├── assets/profile.jpg     ← Headshot
│   ├── src/                   ← Next.js app
│   └── CLAUDE.md              ← Sami's design config
└── noora/                     ← (future) Noora's CV project
    ├── data/cv.json
    ├── assets/
    ├── src/
    └── CLAUDE.md
```

Each person's project:
- Has its own `package.json`, Next.js app, and design
- Runs independently (`cd sami && npm run dev`)
- Can have a different design system, accent color, and layout

---

## Adding a New Person

1. Copy `sami/` as a template: `cp -r sami noora`
2. Edit `noora/CLAUDE.md` — update name, level, accent color, design style
3. Replace `noora/data/cv.json` with the new person's data
4. Add headshot to `noora/assets/profile.jpg`
5. Customize design in `noora/src/` as needed
6. `cd noora && npm run dev`

---

## CV Writing Rules (Universal)

### The Bullet Formula
> **Action verb + What + How + Measurable impact**

- ❌ "Built REST APIs using Laravel"
- ✅ "Designed REST APIs serving 50k+ daily requests, reducing avg response time by 35%"

### Priority Hierarchy
1. Impact
2. Ownership
3. Complexity
4. Scale
5. Tools (always last)

### Red Flags — Never write these
- "Responsible for..."
- "Worked on..." / "Helped with..." / "Involved in..."
- Bullets with no metric or outcome
- Tool lists without context
- Paragraphs in experience sections

### Skills Grouping (always these exact 4 categories)
- **Languages:** Kotlin, Dart, Python, ...
- **Frameworks:** Flutter, Laravel, Next.js, ...
- **Tools:** AWS, Firebase, Docker, ...
- **Concepts:** Microservices, CI/CD, System Design, ...

---

## Content by Experience Level

| Level | Focus | Pages |
|---|---|---|
| Junior (0–2yr) | Projects, GitHub, learning velocity | 1 |
| Mid (2–5yr) | Feature ownership, measurable improvements | 1 |
| Senior (5–8yr) | Architecture, informal leadership, system design | 1–2 |
| Staff/Principal (8+) | Org impact, roadmap, cross-team decisions | 2 max |

### Section Order by Level

**Staff/Principal:**
Header → Summary → Experience → Engineering Highlights → Skills → Projects → Education

**Senior:**
Header → Summary → Experience → Skills → Projects → Education

**Mid:**
Header → Experience → Skills → Projects → Education

**Junior:**
Header → Skills → Projects → Experience → Education

---

## Design System (Defaults — override per person in their CLAUDE.md)

- Font: Inter (single font, weights for hierarchy)
- Layout: A4 (210mm), single column, centered header
- Accent: One color only — name, section borders, links, skill tags
- Print: `@media print` — accent → black, no shadows, A4 margins 12mm
- Page count enforced via print stylesheet

---

## Skills
- `/cv-write` — audit or rewrite CV content (data/cv.json)
- `/cv-design` — audit or improve UI components (src/components/cv/)
