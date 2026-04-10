"use client";

import type { CVData } from "@/lib/types";
import * as DarkEditorial from "./themes/dark-editorial";
import * as Colorful from "./themes/colorful";

const THEMES = {
  "dark-editorial": DarkEditorial,
  colorful: Colorful,
};

interface Props {
  data: CVData;
}

export default function CVPage({ data }: Props) {
  const theme = data.meta.theme ?? "dark-editorial";
  const T = THEMES[theme] ?? THEMES["dark-editorial"];

  const isDark = theme === "dark-editorial";

  return (
    <div
      className="print:bg-white"
      style={{
        minHeight: "100vh",
        background: isDark ? "var(--canvas)" : "#F1F5F9",
      }}
    >
      <main className="max-w-[780px] mx-auto print:max-w-none print:mx-0">
        {/* Header — edge-to-edge in print, padded on screen */}
        <div className={`print:px-0 print:pt-0 ${isDark ? "px-14 pt-12" : "px-12 pt-10"}`}>
          <T.Header data={data.header} />
        </div>

        {/* Content sections */}
        <div
          className={`print:px-10 print:pb-10 ${
            isDark ? "px-14 pb-16" : "px-12 pb-14"
          }`}
        >
          {data.summary && <T.Summary text={data.summary} order="01" />}

          {"coreExpertise" in T && data.coreExpertise && data.coreExpertise.length > 0 && (
            // @ts-ignore — CoreExpertise is optional per theme
            <T.CoreExpertise items={data.coreExpertise} order="02" />
          )}

          {data.highlights && data.highlights.length > 0 && (
            <T.Highlights bullets={data.highlights} order="03" />
          )}

          {data.experience.length > 0 && (
            <T.Experience entries={data.experience} order="04" />
          )}

          <T.Skills groups={data.skills} order="05" />

          {data.projects.length > 0 && (
            <T.Projects entries={data.projects} order="06" />
          )}

          {data.education.length > 0 && (
            <T.Education entries={data.education} order="07" />
          )}
        </div>
      </main>
    </div>
  );
}
