"use client";

import type { AboutData } from "@/src/types/about";
import AboutPillar from "./AboutPillar";
import { About } from '@data/about';
import ParticlesBackground from "@/src/components/ui/ParticlesBackground";

type Props = {
  data?: AboutData;
};

export default function AboutSection({ data = About }: Props) {
  return (
    <section className="flex flex-col md:flex-row gap-10">
      <div className="flex flex-col gap-4 md:gap-6 justify-between items-start">

        <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-t from-accent to-primary text-transparent bg-clip-text leading-tight max-w-[20ch] text-center">
          {data.heading}
        </h2>

        <div className="flex flex-col gap-2 max-w-[60ch] w-full text-text/85 text-balance">
          {data.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {data.pillars.map((pill) => (
            <AboutPillar
              key={pill.id}
              Icon={pill.Icon}
              title={pill.title}
              description={pill.description}
            />
          ))}
        </div>
      </div>

      <aside className="flex flex-col gap-4 md:gap-6 justify-center items-start">

        <ParticlesBackground />

        <div className="px-4">
          <h3 className="text-lg font-semibold text-text mb-2">Cómo trabajo</h3>
          <ul className="text-text/80 list-disc list-inside space-y-2">
            <li>APIs robustas con validaciones y autenticaciones.</li>
            <li>Componentes desacoplados y documentados.</li>
            <li>Medición de rendimiento y mejoras iterativas.</li>
          </ul>
        </div>

        <div className="p-4">
          <h4 className="text-sm text-primary font-medium mb-2">¿Quieres trabajar juntos?</h4>
          <p className="text-text/80 mb-4">Si tenés un proyecto o una idea, hablemos y vemos cómo lo armamos.</p>
          <div className="flex justify-end w-full">
            <a href="/contact" className="px-4 py-2 rounded-lg bg-primary/20 border border-primary text-primary font-medium hover:bg-primary/30">
              Contactame
            </a>
          </div>
        </div>
      </aside>
    </section>
  );
}
