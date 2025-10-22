"use client";

import type { AboutData } from "@/src/types/about";
import { About } from '@data/about';
import ParticlesBackground from "@ui/ParticlesBackground";
import ButtonPrimary from "@ui/ButtonPrimary";
import CardWithIcon from "@ui/CardWithIcon";

type Props = {
  data?: AboutData;
};

export default function AboutSection({ data = About }: Props) {
  return (
    <section className="flex flex-col md:flex-row gap-10">
      <div className="flex flex-col gap-4 md:gap-6 justify-between items-start">

        <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-t from-accent to-primary text-transparent bg-clip-text leading-tight md:max-w-[20ch] mx-auto text-center">
          {data.heading}
        </h2>

        <div className="flex flex-col gap-2 max-w-[80ch] text-text/85 text-pretty">
          {data.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>

        <div className="flex flex-col gap-4 w-full">
          {data.pillars.map((pill) => (
            <CardWithIcon
              key={pill.id}
              Icon={pill.Icon}
              title={pill.title}
              paragraph={pill.description}
              variant="about"
              className="w-full"
            />
          ))}
        </div>
      </div>

      <aside className="flex flex-col gap-4 md:gap-6 justify-center items-start">
        <ParticlesBackground />
        <div className="px-4">
          <h3 className="text-lg font-semibold text-text mb-2">¿Cómo trabajo?</h3>
          <ul className="text-text/80 list-disc list-inside space-y-2">
            <li>Desarrollo APIs sólidas con validaciones y autenticaciones efectivas.</li>
            <li>Creo componentes que están desacoplados y bien documentados.</li>
            <li>Me enfoco en medir el rendimiento y realizar mejoras de manera continua.</li>
          </ul>
        </div>

        <div className="p-4">
          <h4 className="text-lg text-primary font-semibold mb-2">¿Te gustaría que trabajemos juntos?</h4>
          <p className="text-text/80 mb-4">Si tienes un proyecto o una idea, ¡hablemos y veamos cómo podemos hacerlo realidad!</p>
          <div className="flex justify-end w-full">
            <ButtonPrimary as='a' href="/contact">
              Contáctame
            </ButtonPrimary>
          </div>
        </div>
      </aside>
    </section>
  );
}
