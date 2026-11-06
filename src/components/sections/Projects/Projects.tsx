"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FadeInSlideUpItem, StaggerContainer } from "@lib/animationPresets";
import { extraProjectDetails } from "@data/projectDetails";
import { privateProjects } from "@data/privateProjects";
import { GITHUB_ORDER, GITHUB_WHITELIST } from "@data/githubProjects";
import { buildGithubCards, loadProjectCards, projectSlug } from "@lib/projectList";
import ButtonSecondary from "@ui/ButtonSecondary";
import ProjectCard from "./ProjectCard";
import type { GithubRepo, ProjectCardData } from "@typings/project";

interface ProjectsProps {
  title?: string;
  moreProjects?: boolean;
  animate?: boolean;
  limit?: number;
}

export default function Projects({
  title = "Proyectos destacados",
  moreProjects = false,
  animate = false,
  limit = 8,
}: ProjectsProps) {
  const [projects, setProjects] = useState<ProjectCardData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadGithubProjects(): Promise<ProjectCardData[]> {
      const endpoint = limit === 0 ? "/api/projects" : "/api/featured-projects";
      const res = await fetch(endpoint);

      if (!res.ok) {
        const errorData: { error?: string } = await res.json().catch(() => ({}));
        throw new Error(errorData.error ?? "Error desconocido");
      }

      const data: GithubRepo[] = await res.json();
      return buildGithubCards(
        data,
        extraProjectDetails as Record<string, Partial<ProjectCardData>>,
        GITHUB_WHITELIST,
        GITHUB_ORDER,
      );
    }

    async function loadProjects(): Promise<void> {
      // Los privados se muestran siempre, aunque falle la API de GitHub.
      const result = await loadProjectCards(privateProjects, loadGithubProjects, limit);
      setProjects(result.projects);
      setError(result.error ? `Error al cargar proyectos de GitHub: ${result.error}` : null);
    }

    void loadProjects();
  }, [limit]);

  const hasProjects = projects.length > 0;

  const containerAnimationProps =
    hasProjects && animate
      ? { animate: "visible" as const }
      : hasProjects
        ? { whileInView: "visible" as const, viewport: { once: true, amount: 0.1 } }
        : {};

  return (
    <section id="projects" className={`flex flex-col gap-3 scroll-mt-24 md:scroll-mt-28`}>
      <motion.div
        key={hasProjects ? "loaded" : "loading"}
        variants={StaggerContainer}
        initial="hidden"
        className="flex flex-col"
        {...containerAnimationProps}
      >
        <motion.h2 variants={FadeInSlideUpItem} className="text-4xl font-bold text-center my-5">
          {title}
        </motion.h2>

        <div className={`grid ${limit !== 0 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'}  gap-4 md:gap-8 w-full mx-auto`}>
          {projects.map((project) => (
            <motion.div key={projectSlug(project)} variants={FadeInSlideUpItem}>
              <ProjectCard {...project} className="h-full" />
            </motion.div>
          ))}
        </div>

        {error && (
          <p className="mt-4 text-center text-sm text-red-400">{error}</p>
        )}

        {moreProjects && limit > 0 && (
          <motion.div variants={FadeInSlideUpItem} className="my-3 md:mt-8 w-fit mx-auto">
            <ButtonSecondary as="link" href="/projects">
              Ver todos los proyectos
            </ButtonSecondary>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
