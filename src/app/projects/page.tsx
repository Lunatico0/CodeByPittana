import { fetchGithubRepos } from "@lib/github";
import { extraProjectDetails } from "@data/projectDetails";
import ProjectListClient from "@sections/projects/ProjectListClient";
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

  const featuredProjects = (await fetchGithubRepos(GITHUB_USERNAME)) as GithubRepo[];

  const finalProjects = featuredProjects.map((project: GithubRepo) => {
    const details = (extraProjectDetails as Record<string, Partial<GithubRepo>>)[project.name];

    return {
      ...project,
      ...details,
    }
  });

  return (
    <section className="p-6">
      <ProjectListClient finalProjects={finalProjects} title={'Todos mis proyectos'} moreProjects={false} />
    </section>
  );
}
