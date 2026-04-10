---
name: cv-export
description: Export a CV to a press-quality A4 PDF using headless Chrome via Puppeteer
tools: Bash
---

Export the CV to PDF using the Puppeteer-based export script.

## Steps

1. **Identify the person's project directory** from context (e.g. `sami/`, `noora/`).

2. **Check that the dev server is running** on the expected port:
   ```bash
   curl -s -o /dev/null -w "%{http_code}" http://localhost:3000
   ```
   - If it returns `200`, proceed.
   - If not, tell the user to start the dev server first: `cd <person>/ && npm run dev`

3. **Run the export script** from inside the person's project directory:
   ```bash
   cd <person> && npm run export-pdf
   ```
   Optional flags:
   - `--url http://localhost:PORT` — override the dev server URL (default: 3000)
   - `--out exports/<name>-cv.pdf` — override the output path

4. **Confirm the output** by checking the file was created:
   ```bash
   ls -lh <person>/exports/
   ```

5. **Report the result** to the user: file path, file size, and any warnings.

---

## Notes

- The script navigates to the page, waits for fonts to load, then switches to `@media print` before generating the PDF — ensuring print styles apply without needing `Cmd+P`.
- Output is always A4 with `13mm` top/bottom and `15mm` left/right margins — matching the `@page` CSS rule.
- `printBackground: true` preserves gradient headers and colored backgrounds.
- If the page has multiple routes (e.g. `/sami`), pass the full URL: `node scripts/export-pdf.mjs --url http://localhost:3000/sami`

---

## Troubleshooting

| Issue | Fix |
|---|---|
| `curl` returns non-200 | Start the dev server first |
| Fonts look wrong in PDF | Wait a few seconds after server start for font CDN to load, then retry |
| Blank page in PDF | Increase timeout — edit `timeout: 30_000` in the script |
| Wrong port | Pass `--url http://localhost:PORT` explicitly |
