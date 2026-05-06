import { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export const metadata: Metadata = {
  title: "Albert Molano — Fullstack Developer | React, .NET, Flutter",
  description:
    "Systems Engineer & Fullstack Developer specializing in React, TypeScript, .NET, Flutter, and Azure. View my portfolio of professional projects and experience.",
  openGraph: {
    title: "Albert Molano — Fullstack Developer",
    description:
      "Fullstack Developer specializing in building scalable systems and mobile applications.",
    type: "profile",
  },
};

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <section aria-label="Statistics">
        <Stats />
      </section>
      <section id="skills" aria-label="Technical Skills">
        <Skills />
      </section>
      <section id="experience" aria-label="Professional Experience">
        <Experience />
      </section>
      <section id="projects" aria-label="Featured Projects">
        <Projects />
      </section>
      <section id="contact" aria-label="Contact Information">
        <Contact />
      </section>
    </main>
  );
}
