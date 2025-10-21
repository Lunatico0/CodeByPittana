import { fetchFeaturedRepos } from "@lib/github";
import { extraProjectDetails } from "@data/projectDetails";
import ProjectListClient from "@/src/components/sections/Projects/ProjectListClient";
import type { GithubRepo } from "@typings/project";

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

  const finalProjects = featuredProjects.map((project: GithubRepo) => {
    const details = (extraProjectDetails as Record<string, Partial<GithubRepo>>)[project.name];

    return {
      ...project,
      ...details,
    }
  });


  return (
    <section className="flex flex-col justify-between items-center gap-y-3">
      <ProjectListClient finalProjects={finalProjects} title={'Proyectos destacados'} moreProjects={true} />
    </section>
  );
}
