import fs from "fs";
import path from "path";
import type { CVData } from "./types";

export function loadCV(): CVData {
  const filePath = path.join(process.cwd(), "data", "cv.json");

  if (!fs.existsSync(filePath)) {
    throw new Error(`CV data not found. Expected: ${filePath}`);
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as CVData;
}
