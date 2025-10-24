"use client";

import { FadeInSlideUpItem, StaggerContainer } from "@lib/animationPresets";
import { motion } from "framer-motion";
import ButtonSecondary from "@ui/ButtonSecondary";
import ProjectCard from "./ProjectCard";
import type { ProjectListClientProps } from "@typings/projectListClient";


export default function ProjectListClient({ finalProjects, title, moreProjects }: ProjectListClientProps) {
  return (
    <>
      <h2 className="text-4xl font-bold text-center my-5">{title}</h2>

      <motion.div
        variants={StaggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-5xl mx-auto"
      >
        {finalProjects.map((project) => (
          <motion.div key={project.id} variants={FadeInSlideUpItem}>
            <ProjectCard {...project} className='h-full' />
          </motion.div>
        ))}
      </motion.div>

      {
        moreProjects &&
        <ButtonSecondary as='link' href="/projects" className="md:mt-3">
          Ver Todos los Proyectos
        </ButtonSecondary>
      }
    </>
  );
}
