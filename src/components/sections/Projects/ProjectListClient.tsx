"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import type { ProjectCardData } from "@typings/project";
import { FadeInSlideUpItem, StaggerContainer } from "@/src/lib/animationPresets";
import ButtonSecondary from "@ui/ButtonSecondary";

interface ProjectListClientProps {
  finalProjects: ProjectCardData[];
  title: string;
  moreProjects: boolean;
}


export default function ProjectListClient({ finalProjects, title, moreProjects }: ProjectListClientProps) {
  return (
    <>
      <h2 className="text-4xl font-bold text-center my-5">{title}</h2>

      <motion.div
        variants={StaggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-5xl mx-auto"
      >
        {finalProjects.map((project) => (
          <motion.div key={project.id} variants={FadeInSlideUpItem}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>

      {
        moreProjects &&

        <ButtonSecondary as='link' href="/projects" className="md:mt-3">
          Ver Todos los Proyectos
        </ButtonSecondary>

        // <Link href="/projects" className="px-8 py-3 md:mt-3 rounded-xl bg-primary/20 border border-primary text-primary font-semibold hover:bg-primary/30 transition-colors shadow-lg"
        // >
        //   Ver Todos los Proyectos
        // </Link >
      }
    </>
  );
}
