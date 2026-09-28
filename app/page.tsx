import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Achievements } from "@/components/Achievements";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Achievements />
        <Projects />
        <Skills />
        <Certifications />
        <div className="surface-band">
          <Contact />
        </div>
      </main>
      <div className="surface-band">
        <Footer />
      </div>
    </>
  );
}
