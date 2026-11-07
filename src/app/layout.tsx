import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { GOATCOUNTER_ENDPOINT, GOATCOUNTER_SCRIPT } from "@/lib/analytics";
import "./globals.css";

// Self-hosted at build time, so the static export has no runtime font requests.
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

const siteUrl = "https://samikh94.github.io/portfolio/";
const title = "Sami Khleaf, Engineering leader, mobile and product";
const description =
  "Engineering leader at Harri: 11 engineers across Android, iOS and Flutter, five apps, 45,000+ daily users. Founder of Tal3a. Open to remote Engineering Manager roles.";

export const metadata: Metadata = {
  // Origin only: Next prefixes generated image URLs with basePath (/portfolio)
  // itself, so a metadataBase that already ends in /portfolio would double it.
  metadataBase: new URL("https://samikh94.github.io"),
  title,
  description,
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Sami Khleaf",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <head>
        {/* Analytics: see src/lib/analytics.ts. Async, cookie-free, ~3.5 KB gzipped. */}
        <script data-goatcounter={GOATCOUNTER_ENDPOINT} async src={GOATCOUNTER_SCRIPT} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
