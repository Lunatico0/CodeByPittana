import { extraProjectDetails } from "@data/projectDetails";
import { fetchFeaturedRepos } from "@lib/github";
import ProjectListClient from "@sections/Projects/ProjectListClient";
import type { GithubRepo, ProjectCardData } from "@typings/project";

const GITHUB_USERNAME = process.env.GITHUB_USERNAME ?? "";

export default async function Projects() {
  if (!GITHUB_USERNAME) {
    console.error("Error: La variable de entorno GITHUB_USERNAME no está definida.");
    return (
      <section className="p-6 text-center text-red-400">
        Error al cargar proyectos: Usuario de GitHub no configurado.
      </section>
    );
  }

  const featuredProjects = (await fetchFeaturedRepos(GITHUB_USERNAME, 4)) as GithubRepo[];

  const finalProjects: ProjectCardData[] = featuredProjects.map((project: GithubRepo) => {
    const details = (extraProjectDetails as Record<string, Partial<ProjectCardData>>)[project.name];

    return {
      ...project,
      ...details,
    } as ProjectCardData;
  });

  return (
    <section className="flex flex-col justify-between items-center gap-y-3">
      <ProjectListClient finalProjects={finalProjects} title={'Proyectos destacados'} moreProjects={true} />
    </section>
  );
}
