import AboutMe from "@/components/AboutMe";
import Achievements from "@/components/Achivement";
import Contact from "@/components/Contactme";
import ContactSection from "@/components/Contactme";
import Education from "@/components/Education";
import Experience from "@/components/Experencies";
import Hero1 from "@/components/Hero1";
import Hero2 from "@/components/Hero2";
import Hero3 from "@/components/Hero3";
import LanguagesSection from "@/components/Lang";
import Portfolio from "@/components/Project";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Hero1 />
      <AboutMe />
      <Hero2 />
      <LanguagesSection />
      <Skills />

      <Portfolio />
      {/* <Experience/> */}
      <Education />
      <Achievements />
      {/* <div className="grid lg:grid-cols-2 "> */}
        <Resume />
        {/* <Contact /> */}
      {/* </div> */}
    </div>
  );
}
