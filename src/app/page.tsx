import AboutMe from "@/components/AboutMe";
import Achievements from "@/components/Achivement";
import ContactForm from "@/components/ContactForm";

import Education from "@/components/Education";
import Hero1 from "@/components/Hero1";
import  HeroComponent from "@/components/Hero2";
import LanguagesSection from "@/components/Lang";
import Portfolio from "@/components/Project";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Hero1 />
      <AboutMe />
      < HeroComponent />
      <LanguagesSection />
      <Skills />
      <Portfolio />
      {/* <Experience/> */}
      <Education />
      <Achievements />
      <div className="grid lg:grid-cols-2 gap-12 mt-[5rem] ">
        <Resume />
         <ContactForm />
      </div>
    </div>
  );
}
