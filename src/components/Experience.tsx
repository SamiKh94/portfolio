import SectionHeader from "@/components/SectionHeader";
import StoreLinks, { type StoreLink } from "@/components/StoreLinks";

type Job = {
  company: string;
  role: string;
  period: string;
  context: string;
  color: string;
  accent: string;
  // Promotion path inside the company, oldest first. Years are Sami's own, approximate.
  path?: { year: string; title: string }[];
  bullets: string[];
  links: StoreLink[];
};

// Facts mirror the current CV (public/sami-cv.pdf). Change both together.
const jobs: Job[] = [
  {
    company: "Harri",
    role: "Android | Flutter Lead",
    period: "Jan 2018 – Present",
    context: "Frontline employee experience platform for hospitality · Remote to a US-headquartered company",
    color: "from-violet-500 to-fuchsia-500",
    accent: "#8b5cf6",
    path: [
      { year: "2018", title: "Android Developer" },
      { year: "2021", title: "Android Lead" },
      { year: "2024", title: "Android | Flutter Lead" },
    ],
    bullets: [
      "Lead an 11-engineer group across Android, iOS and Flutter, up to 8 direct reports.",
      "Led the merge of two live production apps into one modular app, moving from plain MVVM to multi-module clean architecture.",
      "Own release engineering: Play Console staged rollouts and remote-config feature flags, holding TeamLive at 99.6% crash-free users and 4.7 stars across roughly 6,800 reviews.",
      "Built the team's AI-assisted engineering workflow, used daily, with every change still reviewed and owned by a person.",
      "Set Flutter Add-to-App as the cross-platform standard.",
    ],
    links: [
      { label: "TeamLive · Google Play", href: "https://play.google.com/store/apps/details?id=com.harri.team" },
      { label: "TeamLive · App Store", href: "https://apps.apple.com/app/id1151499033" },
      { label: "Harri Live · App Store", href: "https://apps.apple.com/app/id1458169183" },
    ],
  },
  {
    company: "Tal3a",
    role: "Founder and technical lead",
    period: "2024 – Present",
    context: "Arabic-first, cash-on-delivery marketplace for the West Bank",
    color: "from-fuchsia-500 to-pink-500",
    accent: "#d946ef",
    bullets: [
      "Took it from idea to a live marketplace on both app stores, taking real orders. I write the product specs and flows, own architecture and mobile, and lead a backend and a frontend engineer.",
      "Owned growth: merchant acquisition through a field sales playbook and direct outreach, user acquisition beyond paid ads, and retention through a loyalty programme where daily streaks turned out to be what brought people back.",
      "Built Al-Haj, an AI shopping assistant that works like asking the person behind the counter: it knows your size and preferences, suggests outfits, and understands Palestinian dialect. Launching soon.",
    ],
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.tal3a.app.tal3a" },
      { label: "App Store", href: "https://apps.apple.com/app/id6755872120" },
    ],
  },
  {
    company: "Yamsafer",
    role: "Android Developer",
    period: "Dec 2016 – Jan 2018",
    context: "Hotel booking for travellers across the Arab world",
    color: "from-cyan-500 to-blue-500",
    accent: "#06b6d4",
    bullets: [],
    links: [],
  },
];

export default function Experience() {

  return (
    <section id="experience" className="py-28 px-6 scroll-mt-14">
      <div className="max-w-4xl mx-auto">
        <SectionHeader id="experience" />

        <ol className="space-y-6">
          {jobs.map((job, i) => (
            <li
              key={job.company}
              className="glass rounded-2xl p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-6 mb-4">
                <div>
                  <span
                    className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${job.color} text-white mb-2`}
                  >
                    {job.company}
                  </span>
                  <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                  <p className="text-xs text-zinc-400 mt-1">{job.context}</p>
                </div>
                <p className="text-xs font-mono text-zinc-400 sm:text-right flex-shrink-0">{job.period}</p>
              </div>

              {job.path && (
                <ol aria-label={`Promotion path at ${job.company}`} className="flex flex-col sm:flex-row gap-2 sm:gap-0 mb-6">
                  {job.path.map((step, j) => (
                    <li key={step.title} className="flex items-center sm:flex-1 min-w-0">
                      <div
                        className="flex items-center gap-3 rounded-xl px-3 py-2 w-full"
                        style={{ background: `${job.accent}${j === job.path!.length - 1 ? "26" : "12"}` }}
                      >
                        <span className="text-[11px] font-mono text-zinc-400">{step.year}</span>
                        <span className={`text-sm ${j === job.path!.length - 1 ? "text-white font-medium" : "text-zinc-300"}`}>
                          {step.title}
                        </span>
                      </div>
                      {j < job.path!.length - 1 && (
                        <span aria-hidden="true" className="hidden sm:block text-zinc-600 px-2">→</span>
                      )}
                    </li>
                  ))}
                </ol>
              )}

              {job.bullets.length > 0 && (
                <ul className="space-y-2.5 mb-5">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-zinc-400 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: job.accent }} />
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              <StoreLinks links={job.links} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
