import Hero from "@components/sections/Hero/Hero";
import Highlights from "@components/sections/Highlights/Highlights";
import Projects from "@/src/components/sections/Projects/Projects";
import MainTechsScroll from "@/src/components/sections/MainTechsScroll/MainTechsScroll";

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

    </>
  );
}
