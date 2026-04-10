import type { CVHeader } from "@/lib/types";
import ProfilePhoto from "../../ProfilePhoto";

interface Props {
  data: CVHeader;
}

export default function Header({ data }: Props) {
  return (
    <header className="mb-8 print:mb-6 overflow-hidden rounded-lg print:rounded-none">
      {/* Gradient block */}
      <div
        className="relative px-8 py-7 flex items-center justify-between gap-8 print:px-10 print:py-6"
        style={{
          background: "linear-gradient(135deg, #1E3A8A 0%, #134E4A 100%)",
        }}
      >
        {/* Dot pattern overlay */}
        <div
          className="absolute inset-0 print:hidden"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* Left — identity */}
        <div className="relative z-10 flex-1 min-w-0">
          <h1
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
              color: "#ffffff",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            {data.name}
          </h1>

          <p
            className="mt-3 text-[11px] uppercase tracking-[0.16em]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            {data.title}
          </p>

          {/* Contacts */}
          <div
            className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-4 text-[11px]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            <a
              href={`mailto:${data.email}`}
              className="hover:text-white transition-colors print:no-underline"
              style={{ color: "inherit" }}
            >
              {data.email}
            </a>
            <span className="opacity-40">·</span>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors print:no-underline"
              style={{ color: "inherit" }}
            >
              linkedin
            </a>
            <span className="opacity-40">·</span>
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors print:no-underline"
              style={{ color: "inherit" }}
            >
              github
            </a>
            <span className="opacity-40">·</span>
            <span>{data.location}</span>
            {data.phone && (
              <>
                <span className="opacity-40">·</span>
                <span>{data.phone}</span>
              </>
            )}
          </div>
        </div>

        {/* Right — photo (circle) */}
        {data.photo && (
          <div className="relative z-10 flex-shrink-0">
            {/* Outer glow ring */}
            <div
              style={{
                width: "108px",
                height: "108px",
                borderRadius: "50%",
                padding: "3px",
                background: "linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0.15))",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  background: "#1E3A8A",
                }}
              >
                <ProfilePhoto
                  src={data.photo}
                  name={data.name}
                  fallbackStyle={{
                    background: "#1e40af",
                    color: "rgba(255,255,255,0.8)",
                    fontFamily: "'Outfit', sans-serif",
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
