import { Hero } from "@/components/ui/hero";
import About from "./about/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import Contact from "./contact/page";



export default function Home() {
  return (

    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
