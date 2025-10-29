"use client";

import { FadeInSlideUpItem, StaggerContainer } from "@lib/animationPresets";
import { motion } from "framer-motion";
import ButtonSecondary from "@ui/ButtonSecondary";
import ProjectCard from "./ProjectCard";
import type { ProjectListClientProps } from "@typings/projectListClient";


export default function ProjectListClient({ finalProjects, title, moreProjects, visivility = 'whileInView' }: ProjectListClientProps) {

  const animationProp = visivility === 'whileInView' ? 'whileInView' : 'animate';

  const containerProps = {
    variants: StaggerContainer,
    initial: "hidden",
    viewport: { once: true, amount: 0.10 },
    className: "flex flex-col"
  };

  const dynamicAnimationProp = {
    [animationProp]: "visible"
  };

  return (
    <>
      <motion.div
        {...containerProps}
        {...dynamicAnimationProp}
      >
        <motion.h2
          variants={FadeInSlideUpItem}
          className="text-4xl font-bold text-center my-5"
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full mx-auto">
          {finalProjects.map((project) => (
            <motion.div key={project.id} variants={FadeInSlideUpItem}>
              <ProjectCard {...project} className='h-full' />
            </motion.div>
          ))}
        </div>

        {
          moreProjects &&
          <motion.div variants={FadeInSlideUpItem} className="my-3 md:mt-8 w-fit mx-auto">
            <ButtonSecondary as='link' href="/projects">
              Ver Todos los Proyectos
            </ButtonSecondary>
          </motion.div>
        }
      </motion.div>
    </>
  );
}
