import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { revealBootScript } from "@/lib/reveal";
import "./globals.css";

// Self-hosted at build time, so the static export has no runtime font requests.
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

const siteUrl = "https://samikh94.github.io/portfolio/";
const title = "Sami Khleaf, Engineering leader, mobile and product";
const description =
  "Engineering leader at Harri: 11 engineers across Android, iOS and Flutter, five apps, 45,000+ daily users. Founder of Tal3a. Open to remote Engineering Manager roles.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        {/* Runs before first paint; see lib/reveal.ts. */}
        <script dangerouslySetInnerHTML={{ __html: revealBootScript }} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
