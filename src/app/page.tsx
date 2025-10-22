import AboutSection from "@sections/About/About";
import Hero from "@sections/Hero/Hero";
import Highlights from "@sections/Highlights/Highlights";
import MainTechsScroll from "@sections/MainTechsScroll/MainTechsScroll";
import Projects from "@sections/Projects/Projects";

export default function HomePage() {

  return (
    <>
      <Hero
        title="Code by Pittana"
        subtitle="Soy Patricio Pittana, desarrollador full stack. Transformo ideas en experiencias digitales claras, funcionales y hechas a medida."
        ctaLabel="Contactame"
        ctaHREF='/contact'
        secondaryCta="Ver proyectos"
        secondaryHREF='/projects'
      />

      <Highlights />
      <Projects />
      <MainTechsScroll />
      <AboutSection />

    </>
  );
}
