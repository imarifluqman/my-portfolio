import About from "./components/About";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";


export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Skills />
      <About />
      
      <Contact />
    </main>
  );
}
