export type StoreLink = { label: string; href: string };

export default function StoreLinks({ links }: { links: StoreLink[] }) {
  if (links.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-2">
      {links.map(({ label, href }) => (
        <li key={href}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-full border border-white/10 text-zinc-300 hover:text-white hover:border-white/25 transition-colors"
          >
            {label} <span aria-hidden="true">↗</span>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
