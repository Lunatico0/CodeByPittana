"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FadeInSlideUpItem, StaggerContainer } from "@lib/animationPresets";
import { extraProjectDetails } from "@data/projectDetails";
import ButtonSecondary from "@ui/ButtonSecondary";
import ProjectCard from "./ProjectCard";
import type { GithubRepo, ProjectCardData } from "@typings/project";

interface ProjectsProps {
  title?: string;
  moreProjects?: boolean;
  animate?: boolean;
  limit?: number; // 0 = todos los proyectos, >0 = destacados
}

export default function Projects({
  title = "Proyectos destacados",
  moreProjects = false,
  animate = false,
  limit = 4,
}: ProjectsProps) {
  const [projects, setProjects] = useState<ProjectCardData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProjects() {
      try {
        const endpoint =
          limit === 0 ? "/api/projects" : "/api/featured-projects";

        const res = await fetch(endpoint);
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Error desconocido");

        const mappedProjects = data.map((project: GithubRepo) => {
          const details =
            (extraProjectDetails as Record<string, Partial<ProjectCardData>>)[project.name];
          return { ...project, ...details } as ProjectCardData;
        });

        // Si hay límite, recortar
        const finalProjects =
          limit > 0 ? mappedProjects.slice(0, limit) : mappedProjects;

        setProjects(finalProjects);
      } catch (err: any) {
        setError(`Error al cargar proyectos: ${err.message}`);
      }
    }

    loadProjects();
  }, [limit]);

  const hasProjects = projects.length > 0;

  const containerAnimationProps = hasProjects
    ? animate
      ? { animate: "visible" as const }
      : { whileInView: "visible" as const, viewport: { once: true, amount: 0.1 } }
    : {};

  if (error) {
    return (
      <section className="p-6 text-center text-red-400">
        {error}
      </section>
    );
  }

  return (
    <section id="projects" className="flex flex-col gap-3 scroll-mt-24 md:scroll-mt-28">
      <motion.div
        key={hasProjects ? "loaded" : "loading"}
        variants={StaggerContainer}
        initial="hidden"
        className="flex flex-col"
        {...containerAnimationProps}
      >
        <motion.h2
          variants={FadeInSlideUpItem}
          className="text-4xl font-bold text-center my-5"
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full mx-auto">
          {projects.map((project) => (
            <motion.div key={project.id} variants={FadeInSlideUpItem}>
              <ProjectCard {...project} className="h-full" />
            </motion.div>
          ))}
        </div>

        {moreProjects && limit > 0 && (
          <motion.div
            variants={FadeInSlideUpItem}
            className="my-3 md:mt-8 w-fit mx-auto"
          >
            <ButtonSecondary as="link" href="/projects">
              Ver todos los proyectos
            </ButtonSecondary>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
