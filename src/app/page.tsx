import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowILead from "@/components/HowILead";
import Experience from "@/components/Experience";
import OtherWork from "@/components/OtherWork";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

// Render order must match src/lib/sections.ts.
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowILead />
        <Experience />
        <OtherWork />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
