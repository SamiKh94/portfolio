import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sami Khleaf — Android & Flutter Lead",
  description:
    "Senior Mobile Engineer and product architect with 8+ years building Android and Flutter applications at scale. Founder of Tal3a.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
