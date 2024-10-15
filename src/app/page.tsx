import About from "./components/About";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
