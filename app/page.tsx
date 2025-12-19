import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white selection:bg-mars-red selection:text-white">
      <Hero />
      <TechStack />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}