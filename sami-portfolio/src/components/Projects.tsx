"use client";
import { useInView } from "@/lib/useInView";

const professionalWork = [
  {
    name: "Harri Mobile Ecosystem",
    tagline: "Android & Flutter Lead",
    description:
      "5-app production platform for the hospitality industry — TeamLive, HarriLive, HarriHire, TeamHub, and Hob Seeker.",
    bullets: [
      "Architected shared standards across a 5-app Android and Flutter ecosystem",
      "Authentication (AWS Cognito, OAuth 2.0), real-time messaging (Pusher), and monitoring (DataDog RUM)",
      "Flutter Add-to-App integration enabling gradual cross-platform migration without full rewrites",
    ],
    tech: ["Kotlin", "Flutter", "AWS Amplify", "Pusher", "DataDog"],
    gradient: "from-cyan-500 to-blue-500",
    glow: "rgba(6,182,212,0.25)",
  },
  {
    name: "Momyt Meet",
    tagline: "Flutter Lead — Homyt",
    description:
      "Location-based social discovery platform for organizing real-world meetups and group activities. Think Tinder for activities — users discover nearby people with shared interests, create or join meets, and interact through chat after matching.",
    bullets: [
      "Real-time social discovery with proximity-based filtering and interest matching",
      "Dual-sided meetup flows: create your own activity or request to join others'",
      "In-app chat between matched users after mutual interest",
      "Group discount mechanics tied to meetup participation — incentivizing real-world connection",
      "MVVM + Provider architecture for scalable state management across complex interaction flows",
    ],
    tech: ["Flutter", "Dart", "MVVM", "Provider", "Geolocation"],
    gradient: "from-indigo-500 to-purple-500",
    glow: "rgba(99,102,241,0.25)",
  },
  {
    name: "Primefyre",
    tagline: "Flutter Developer — Curotec",
    description:
      "Fire safety inspection and compliance platform for field operations. Owned the full mobile app — from architecture to delivery — building structured workflows that let inspectors conduct, track, and report safety checks from the field.",
    bullets: [
      "Full ownership: architecture, user flows, and feature delivery — no handoffs, no tickets from above",
      "Form-heavy inspection workflows designed for real-world field use (on-site, low-friction)",
      "Compliance tracking and safety reporting built for B2B operational requirements",
      "Clean Architecture Flutter codebase built for long-term extensibility",
    ],
    tech: ["Flutter", "Dart", "Clean Architecture"],
    gradient: "from-red-500 to-orange-500",
    glow: "rgba(239,68,68,0.2)",
  },
];

const personalProjects = [
  {
    name: "Tal3a",
    tagline: "Founder / Mobile Architect",
    description:
      "Multi-vendor logistics marketplace with TSP-inspired routing optimization, AI-native conversational commerce, and a full merchant operations platform.",
    bullets: [
      "Unified checkout across multiple shops with complex order splitting and fulfillment coordination",
      "TSP-inspired logistics model optimizing multi-vendor pickup routing at scale",
      "Al-Haj — AI-native shopping assistant with LLM-driven recommendations and guided checkout",
      "Vendor onboarding pipelines with AI-assisted product extraction from WhatsApp inputs",
      "Promotions engine with flash sales, coupons, funding splits, and commission modeling",
    ],
    tech: ["Flutter", "Dart", "Firebase", "Kotlin", "AI / LLM"],
    gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
    glow: "rgba(139,92,246,0.3)",
    featured: true,
  },
  {
    name: "Lajnati",
    tagline: "Founder / Mobile Engineer",
    description:
      "Mobile-first platform digitizing residential building management — giving committee members a structured system for payments, expenses, and resident operations instead of WhatsApp threads and paper ledgers.",
    bullets: [
      "Multi-tier access control: system admin, building admin, and resident roles with scoped permissions",
      "Financial workflows: payment tracking, expense logging, wallet ledger, and real-time balance reporting",
      "Multi-building hierarchy (Iskan → Building → Residents) with Firebase-backed aggregation",
      "RTL-first Flutter UI built for non-technical committee members with Clean Architecture underneath",
    ],
    tech: ["Flutter", "Dart", "Firebase", "Clean Architecture"],
    gradient: "from-emerald-500 to-teal-500",
    glow: "rgba(16,185,129,0.25)",
    featured: false,
  },
  {
    name: "Jaru",
    tagline: "Personal Project — 2020",
    description:
      "Pet care marketplace built during COVID-19 lockdowns, when pet owners suddenly couldn't access groomers, vets, or sitters. Multi-sided platform connecting owners with local providers, with booking, social login, and in-app wallet.",
    bullets: [
      "Multi-role system: pet owners and service providers with scoped onboarding and permissions",
      "In-app wallet for transactions between owners and providers",
      "Social login integration and service discovery flow built for rapid adoption",
      "Shipped under lockdown constraints — tight scope, fast delivery",
    ],
    tech: ["Flutter", "Dart"],
    gradient: "from-pink-500 to-rose-400",
    glow: "rgba(244,114,182,0.2)",
    featured: false,
  },
  {
    name: "SNIPY",
    tagline: "Personal Project — Early Career",
    description:
      "One of the first projects: a cross-platform job marketplace built with Ionic and AngularJS. Multi-sided platform connecting job seekers with employers, with skill showcasing, video playlists, and in-app interview scheduling.",
    bullets: [
      "Multi-sided platform: job seekers, employers, and skill-share content in a single app",
      "One-click job application with in-app interview scheduling and agreement flows",
      "Educational video playlist feature for skill sharing and professional development",
    ],
    tech: ["Ionic", "AngularJS", "HTML", "CSS"],
    gradient: "from-orange-500 to-amber-400",
    glow: "rgba(245,158,11,0.2)",
    featured: false,
  },
];

type ProjectItem = {
  name: string; tagline: string; description: string; bullets: string[];
  tech: string[]; gradient: string; glow: string; featured?: boolean;
};

function ProjectCard({ p, i, inView, span2 }: { p: ProjectItem, i: number, inView: boolean, span2?: boolean }) {
  return (
    <div
      className={`relative glass glass-hover rounded-2xl overflow-hidden group flex flex-col${span2 ? " sm:col-span-2" : ""}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${i * 0.1}s, transform 0.7s ease ${i * 0.1}s, background 0.2s, border-color 0.2s`,
      }}
    >
      <div
        className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${p.glow}, transparent 70%)`, transform: "translate(-30%, -30%)" }}
      />

      <div className="relative p-6 flex flex-col flex-1">
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-1">
            <h3 className={`text-lg font-bold text-gradient bg-gradient-to-r ${p.gradient}`}>
              {p.name}
            </h3>
            {p.featured && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-violet-500/30 text-violet-400 tracking-wider">
                FEATURED
              </span>
            )}
          </div>
          <p className="text-xs font-mono text-zinc-500 tracking-wide">{p.tagline}</p>
        </div>

        <p className="text-zinc-400 text-sm leading-relaxed mb-4">{p.description}</p>

        <ul className="space-y-1.5 mb-5 flex-1">
          {p.bullets.map((b, j) => (
            <li key={j} className="flex gap-2.5 text-sm text-zinc-500 leading-relaxed">
              <span className="mt-2 flex-shrink-0">
                <span className={`block w-1 h-1 rounded-full bg-gradient-to-r ${p.gradient}`} />
              </span>
              {b}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {p.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono px-2 py-0.5 rounded-full"
              style={{
                background: "rgba(139,92,246,0.1)",
                border: "1px solid rgba(139,92,246,0.2)",
                color: "#a78bfa",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={ref}>
          <p
            className={`text-xs font-mono text-violet-400 tracking-widest uppercase mb-3 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            03 / What I&apos;ve built
          </p>
          <h2
            className={`text-3xl sm:text-4xl font-bold text-white mb-12 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Work & Projects
          </h2>

          {/* Professional Work */}
          <div className="mb-14">
            <p className="text-xs font-mono text-zinc-500 tracking-widest uppercase mb-6">
              Professional Work
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {professionalWork.map((p, i) => (
                <ProjectCard key={p.name} p={p} i={i} inView={inView} />
              ))}
            </div>
          </div>

          {/* Personal Projects */}
          <div>
            <p className="text-xs font-mono text-zinc-500 tracking-widest uppercase mb-6">
              Personal Projects
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {personalProjects.map((p, i) => (
                <ProjectCard key={p.name} p={p} i={i} inView={inView} span2={p.featured} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
