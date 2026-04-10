import type { ProjectEntry } from "@/lib/types";
import SectionTitle from "./SectionTitle";

interface Props {
  entries: ProjectEntry[];
  order: string;
}

export default function Projects({ entries, order }: Props) {
  return (
    <section className="mb-6 print:mb-4">
      <SectionTitle order={order}>Projects</SectionTitle>
      <div className="space-y-5 print:space-y-3">
        {entries.map((project, i) => (
          <div key={i} style={{ breakInside: "avoid" }}>
            {/* Project header row */}
            <div className="flex items-baseline justify-between gap-4 flex-wrap mb-2">
              <div className="flex items-baseline gap-2 flex-wrap">
                <span
                  className="text-sm font-semibold text-slate-900"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 transition-colors print:no-underline"
                    >
                      {project.name}
                    </a>
                  ) : project.name}
                </span>
                <span className="text-xs text-slate-400" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {project.description}
                </span>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 flex-shrink-0">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2 py-0.5 rounded-full"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      background: "#F0FDFA",
                      color: "#0F766E",
                      border: "1px solid #99F6E4",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Bullets */}
            <ul className="space-y-1.5">
              {project.bullets.map((bullet, j) => (
                <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-slate-600">
                  <span className="flex-shrink-0 mt-[7px] text-[6px] text-blue-500" style={{ lineHeight: 1 }}>
                    ■
                  </span>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
