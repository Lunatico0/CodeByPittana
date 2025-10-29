"use client";

import ReactMarkdown from "react-markdown";
import { FadeInSlideUpItem, StaggerContainer } from "@lib/animationPresets";
import { HTMLMotionProps, motion } from "framer-motion";
import ButtonPrimary from "@ui/ButtonPrimary";
import CardWithIcon from "@ui/CardWithIcon";
import ParticlesBackground from "@ui/ParticlesBackground";
import type { AboutProps } from "@typings/about";
import { markdownComponents } from "@lib/markdownComponents";


export default function AboutSection({ heading, paragraphs, pillars }: AboutProps) {

  const ParagraphRenderer = (props: HTMLMotionProps<'p'>) => (
    <motion.p
      variants={FadeInSlideUpItem}
      className="mb-4 last:mb-0"
      {...props}
    />
  );

  const markdownContent = paragraphs.join('\n\n');

  return (
    <motion.section
      id='about'
      className="flex flex-col md:flex-row gap-10 scroll-mt-24 md:scroll-mt-28"
      variants={StaggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div
        variants={FadeInSlideUpItem}
        className="flex flex-col gap-4 md:gap-6 justify-between items-start"
      >
        <motion.h2
          variants={FadeInSlideUpItem}
          className="text-2xl md:text-4xl font-bold bg-gradient-to-t from-accent to-primary text-transparent bg-clip-text leading-tight md:max-w-[20ch] mx-auto text-center"
        >
          {heading}
        </motion.h2>

        <div className="flex flex-col gap-2 max-w-[80ch] text-text/85 text-pretty">
          <ReactMarkdown components={markdownComponents}>
            {markdownContent}
          </ReactMarkdown>
        </div>

        <div className="flex flex-col gap-4 w-full">
          {pillars.map((pill) => (
            <motion.div key={pill.id} variants={FadeInSlideUpItem}>
              <CardWithIcon
                Icon={pill.Icon}
                title={pill.title}
                paragraph={pill.description}
                variant="about"
                className="w-full"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.aside
        variants={FadeInSlideUpItem}
        className="flex flex-col gap-4 md:gap-6 justify-center items-start"
      >
        <ParticlesBackground className={'hidden md:block'} />
        <motion.div variants={FadeInSlideUpItem} className="px-4">
          <h3 className="text-lg font-semibold text-text mb-2">¿Cómo trabajo?</h3>
          <ul className="text-text/80 list-disc list-inside space-y-2">
            <li>Desarrollo APIs sólidas con validaciones y autenticaciones efectivas.</li>
            <li>Creo componentes que están desacoplados y bien documentados.</li>
            <li>Me enfoco en medir el rendimiento y realizar mejoras de manera continua.</li>
          </ul>
        </motion.div>

        <motion.div variants={FadeInSlideUpItem} className="p-4">
          <h4 className="text-lg text-primary font-semibold mb-2">¿Te gustaría que trabajemos juntos?</h4>
          <p className="text-text/80 mb-4">Si tienes un proyecto o una idea, ¡hablemos y veamos cómo podemos hacerlo realidad!</p>
          <div className="flex justify-end w-full">
            <ButtonPrimary as='a' href="/contact">
              Contáctame
            </ButtonPrimary>
          </div>
        </motion.div>
      </motion.aside>
    </motion.section>
  );
}
