import { Suspense } from "react";
import AboutSection from "@sections/About/About";
import ContactSection from "@sections/Contact/ContactSection";
import ExperienceSection from "@sections/Experience/ExperienceSection";
import Hero from "@sections/Hero/Hero";
import Highlights from "@sections/Highlights/Highlights";
import Loading from "@ui/Loading";
import MainTechs from "@sections/MainTechsScroll/MainTechsScroll";
import Projects from "@sections/Projects/Projects";
import ValueOfferSection from "@sections/ValueOfferSection/ValueOfferSection";


import { AboutData } from '@data/about';
import { ExperienceData } from "@data/experience";
import { HeroData } from "@data/hero";
import { HighlightsData } from '@data/highlights';

export default function HomePage() {

  return (
    <Suspense fallback={<Loading />}>
      <Hero {...HeroData} />

      <Highlights highlights={HighlightsData} />
      <Projects title="Proyectos destacados" moreProjects={true} animate={false} limit={4} />
      <MainTechs />
      <AboutSection {...AboutData} />
      <ExperienceSection {...ExperienceData} />
      <ValueOfferSection />
      <ContactSection />
    </Suspense>

  );
}
