import Link from "next/link";

export const metadata = { title: "Page not found · Sami Khleaf" };

// Exported as 404.html; GitHub Pages serves it for any unknown path.
export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="text-xs font-mono text-violet-400 tracking-widest uppercase mb-3">404</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">This page doesn&apos;t exist</h1>
        <p className="text-zinc-400 leading-relaxed mb-8">
          The link may be old or mistyped. Everything lives on one page.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-xl font-semibold text-sm text-white bg-violet-600 hover:bg-violet-500 transition-colors"
        >
          Go to the homepage
        </Link>
      </div>
    </main>
  );
}
