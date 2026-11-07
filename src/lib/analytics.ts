// GoatCounter: privacy-friendly analytics, no cookies, so no consent banner.
// Dashboard: https://khleafsami.goatcounter.com
//
// - Page views are counted by the script in app/layout.tsx. Because the page has a
//   canonical URL, every view is recorded under /portfolio/ regardless of query.
// - Clicks are counted on any element with a `data-goatcounter-click` attribute;
//   use track() below so event names stay consistent.
// - Per-application links: share ?ref=<company> (e.g. /portfolio/?ref=acme) and the
//   ref shows up as the visit's source in the dashboard.
// - Not counted: localhost / private IPs, and any browser that has opened the site
//   once with #toggle-goatcounter (use that on your own devices).

export const GOATCOUNTER_ENDPOINT = "https://khleafsami.goatcounter.com/count";
export const GOATCOUNTER_SCRIPT = "https://gc.zgo.at/count.js";

const slug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/** Spread onto a link to count clicks on it, e.g. <a {...track("cv", "hero")}> */
export function track(...parts: string[]) {
  return { "data-goatcounter-click": parts.map(slug).filter(Boolean).join("-") };
}
