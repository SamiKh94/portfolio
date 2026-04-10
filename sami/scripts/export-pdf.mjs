#!/usr/bin/env node

/**
 * CV PDF Exporter
 * Renders the CV via headless Chrome and saves a press-quality A4 PDF.
 *
 * Usage:
 *   npm run export-pdf
 *   node scripts/export-pdf.mjs [--url http://localhost:3000] [--out exports/sami-cv.pdf]
 */

import puppeteer from "puppeteer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const args = process.argv.slice(2);
const getArg = (flag, fallback) => {
  const i = args.indexOf(flag);
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback;
};

const URL = getArg("--url", "http://localhost:3000");
const OUT = path.resolve(__dirname, "..", getArg("--out", "exports/sami-cv.pdf"));

fs.mkdirSync(path.dirname(OUT), { recursive: true });

console.log(`\n  Launching browser...`);
const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--font-render-hinting=none"],
});

const page = await browser.newPage();

// Load in screen mode so all assets and fonts resolve normally
await page.emulateMediaType("screen");

console.log(`  Loading ${URL} ...`);
await page.goto(URL, { waitUntil: "networkidle0", timeout: 30_000 });

// Wait for Google Fonts to finish
await page.evaluateHandle("document.fonts.ready");
await new Promise((r) => setTimeout(r, 1000));

// Switch to print — triggers @media print layout without the color wipe
// (globals.css no longer has html/body !important overrides)
await page.emulateMediaType("print");

console.log(`  Generating PDF...`);
await page.pdf({
  path: OUT,
  format: "A4",
  printBackground: true,
  margin: { top: "0", bottom: "0", left: "0", right: "0" },
  preferCSSPageSize: false,
});

await browser.close();

const size = (fs.statSync(OUT).size / 1024).toFixed(0);
console.log(`\n  ✓ Saved: ${path.relative(process.cwd(), OUT)} (${size} KB)\n`);
