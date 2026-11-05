import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowILead from "@/components/HowILead";
import CaseStudies from "@/components/CaseStudies";
import Experience from "@/components/Experience";
import OtherWork from "@/components/OtherWork";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

// Render order must match src/lib/sections.ts.
export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-violet-600 focus:text-white"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <HowILead />
        <CaseStudies />
        <Experience />
        <OtherWork />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
