import AboutSection from "@sections/About/About";
import ExperienceSection from "@sections/Experience/ExperienceSection";
import Hero from "@sections/Hero/Hero";
import Highlights from "@sections/Highlights/Highlights";
import MainTechs from "@sections/MainTechsScroll/MainTechsScroll";
import Projects from "@sections/Projects/Projects";
import ContactSection from "@sections/Contact/ContactSection";



import { ExperienceData } from "@data/experience";
import { HeroData } from "@data/hero";
import { HighlightsData } from '@data/highlights';
import { AboutData } from '@data/about';
import ValueOfferSection from "@sections/ValueOfferSection/ValueOfferSection";

export default function HomePage() {

  return (
    <>
      <Hero {...HeroData} />

      <Highlights highlights={HighlightsData} />
      <Projects />
      <MainTechs />
      <AboutSection {...AboutData} />
      <ExperienceSection {...ExperienceData} />
      <ValueOfferSection />
      <ContactSection />
    </>

  );
}
