import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { ScrollReveal } from "@/components/scroll-reveal";
import { TechMarquee } from "@/components/tech-marquee";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />

      <ScrollReveal width="100%">
        <About />
      </ScrollReveal>

      <ScrollReveal width="100%">
        <Experience />
      </ScrollReveal>

      <ScrollReveal width="100%">
        <Projects />
      </ScrollReveal>

      <TechMarquee />

      <ScrollReveal width="100%">
        <Skills />
      </ScrollReveal>

      <ScrollReveal width="100%">
        <Contact />
      </ScrollReveal>
    </main>
  );
}
