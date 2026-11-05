import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
