"use client";

import { useEffect, useState } from "react";
import { fetchFeaturedRepos } from "@lib/github";
import { extraProjectDetails } from "@data/projectDetails";
import type { GithubRepo, ProjectCardData } from "@typings/project";

export function useFeaturedProjects(username: string, limit: number = 4) {
  const [projects, setProjects] = useState<ProjectCardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) {
      setError("La variable de entorno GITHUB_USERNAME no está definida.");
      setLoading(false);
      return;
    }

    const loadProjects = async () => {
      try {
        const featuredProjects = (await fetchFeaturedRepos(username, limit)) as GithubRepo[];

        const finalProjects: ProjectCardData[] = featuredProjects.map((project: GithubRepo) => {
          const details = (extraProjectDetails as Record<string, Partial<ProjectCardData>>)[project.name];
          return { ...project, ...details } as ProjectCardData;
        });

        setProjects(finalProjects);
      } catch (err) {
        console.error("Error al cargar proyectos:", err);
        setError("Error al cargar proyectos desde GitHub.");
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, [username, limit]);

  return { projects, loading, error };
}
