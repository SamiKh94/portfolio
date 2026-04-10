import type { ProjectEntry } from "@/lib/types";
import SectionTitle from "./SectionTitle";

interface Props {
  entries: ProjectEntry[];
  order: string;
}

export default function Projects({ entries, order }: Props) {
  return (
    <section className="mb-10 print:mb-7">
      <SectionTitle order={order}>Projects</SectionTitle>
      <div className="space-y-7 print:space-y-5">
        {entries.map((project, i) => (
          <div key={i} style={{ breakInside: "avoid" }}>
            {/* Project header */}
            <div className="flex items-baseline justify-between gap-4 mb-2">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--ink)", fontFamily: "var(--font-body)" }}
                >
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:underline"
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--ink)")}
                    >
                      {project.name}
                    </a>
                  ) : project.name}
                </span>
                <span
                  className="text-[11px]"
                  style={{ color: "var(--ink-dim)", fontWeight: 300 }}
                >
                  {project.description}
                </span>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 flex-shrink-0">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px]"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--gold)", opacity: 0.7 }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Bullets */}
            <ul className="space-y-1.5 pl-1">
              {project.bullets.map((bullet, j) => (
                <li key={j} className="flex gap-3 text-sm leading-relaxed">
                  <span
                    className="flex-shrink-0 mt-[6px] text-[7px]"
                    style={{ color: "var(--gold)" }}
                  >
                    ◆
                  </span>
                  <span style={{ color: "var(--ink-dim)", fontWeight: 300 }}>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
