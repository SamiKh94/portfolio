import type { CVHeader } from "@/lib/types";
import ProfilePhoto from "../../ProfilePhoto";

interface Props {
  data: CVHeader;
}

export default function Header({ data }: Props) {
  return (
    <header className="flex items-start justify-between gap-10 mb-12 print:mb-8">

      {/* Left — identity */}
      <div className="flex-1 min-w-0">
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(2.4rem, 5.5vw, 3.6rem)",
            color: "var(--ink)",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          {data.name}
        </h1>

        {/* Gold rule */}
        <div
          className="mt-4 mb-4"
          style={{
            height: "1px",
            background: "linear-gradient(90deg, var(--gold) 0%, transparent 65%)",
          }}
        />

        {/* Title */}
        <p
          className="text-xs uppercase tracking-section mb-4"
          style={{ fontFamily: "var(--font-mono)", color: "var(--gold)" }}
        >
          {data.title}
        </p>

        {/* Contacts */}
        <div
          className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px]"
          style={{ fontFamily: "var(--font-mono)", color: "var(--ink-dim)" }}
        >
          <a
            href={`mailto:${data.email}`}
            className="transition-colors print:no-underline"
            style={{ color: "inherit" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-dim)")}
          >
            {data.email}
          </a>
          <span style={{ color: "var(--divider)" }}>·</span>
          <a
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors print:no-underline"
            style={{ color: "inherit" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-dim)")}
          >
            linkedin
          </a>
          <span style={{ color: "var(--divider)" }}>·</span>
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors print:no-underline"
            style={{ color: "inherit" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-dim)")}
          >
            github
          </a>
          <span style={{ color: "var(--divider)" }}>·</span>
          <span>{data.location}</span>
          {data.phone && (
            <>
              <span style={{ color: "var(--divider)" }}>·</span>
              <span>{data.phone}</span>
            </>
          )}
        </div>
      </div>

      {/* Right — photo */}
      {data.photo && (
        <div
          className="flex-shrink-0"
          style={{
            width: "112px",
            height: "112px",
            borderRadius: "2px",
            border: "1px solid var(--gold-dim)",
            overflow: "hidden",
          }}
        >
          <ProfilePhoto
            src={data.photo}
            name={data.name}
            fallbackStyle={{
              background: "var(--ink-faint)",
              color: "var(--ink-dim)",
              fontFamily: "var(--font-display)",
            }}
          />
        </div>
      )}
    </header>
  );
}
