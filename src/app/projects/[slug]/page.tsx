import ReactMarkdown from "react-markdown";
import { extraProjectDetails } from "@data/projectDetails";
import { privateProjects } from "@data/privateProjects";
import { fetchGithubRepos } from "@lib/github";
import { findProjectBySlug, getProjectLinks, projectSlug } from "@lib/projectList";
import Image from "next/image";
import TechPill from "@ui/TechPill";
import PrivateRepoBadge from "@sections/Projects/PrivateRepoBadge";
import type { GithubRepo, ProjectCardData } from "@typings/project";
import { markdownComponents } from "@lib/markdownComponents";
import { ProjectPageProps } from '@typings/projectPage';
import { seoConfig } from '@data/seoConfig';
import { Metadata } from 'next';

/**
 * Busca el proyecto del slug: primero entre los privados (sin llamar a GitHub)
 * y después entre los repos de GitHub, sumando sus detalles locales.
 * Si GitHub falla, los privados igual se encuentran.
 */
async function getProject(slug: string): Promise<ProjectCardData | undefined> {
  const privateProject = findProjectBySlug<ProjectCardData>(slug, privateProjects, []);
  if (privateProject) return privateProject;

  const username = process.env.GITHUB_USERNAME ?? "";
  let repos: GithubRepo[] = [];

  try {
    repos = await fetchGithubRepos(username);
  } catch (error) {
    console.error("Error fetching repos:", error);
  }

  const repo = findProjectBySlug(slug, [], repos);
  if (!repo) return undefined;

  const details =
    (extraProjectDetails as Record<string, Partial<ProjectCardData>>)[repo.name] ?? {};

  // El slug sale del nombre del repo, aunque los detalles pisen `name`.
  return { ...repo, ...details, id: projectSlug(repo) };
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return {
      title: `Proyecto no encontrado | ${seoConfig.siteName}`,
      description: seoConfig.description,
    };
  }

  const fullProject: Partial<ProjectCardData> = {
    ...project,
    shortDescription: project.shortDescription || project.description || seoConfig.description,
    image: project.image || seoConfig.ogImage,
  };

  const pageTitle = `${fullProject.name} | ${seoConfig.author}`;
  const pageDescription = fullProject.shortDescription;
  const canonicalUrl = `${seoConfig.url}/projects/${projectSlug(project)}`;
  const ogImageUrl = fullProject.image
    ? (fullProject.image.startsWith("http")
      ? fullProject.image
      : `${seoConfig.url}${fullProject.image}`)
    : seoConfig.ogImage;

  return {
    title: pageTitle,
    description: pageDescription,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImageUrl],
    },
  };
}

export default async function ProjectDetail(props: ProjectPageProps) {
  const { slug } = await props.params;
  const project = await getProject(slug);

  if (!project) {
    return <div className="p-8 text-center text-red-400">Proyecto no encontrado</div>;
  }

  const fullProject: ProjectCardData = {
    ...project,
    // Los repos públicos sin captura usan el logo; los privados sin imagen van solo con texto.
    image: project.image ?? (project.isPrivate ? undefined : "/favicon.svg"),
    shortDescription: project.shortDescription || project.description || "Sin descripción",
    longDescription: project.longDescription || project.description || "Sin descripción",
    technologies: project.technologies ?? [],
  };

  const { repoUrl, showPrivateBadge, site } = getProjectLinks(fullProject);

  return (
    <section className="relative flex flex-col justify-center w-full mx-auto gap-4 text-sm md:text-base">
      {/* Imagen */}
      {fullProject.image && (
        <div className={`${fullProject.image === '/favicon.svg' ? 'aspect-square max-w-md w-full mx-auto' : 'aspect-[3/2] w-full '} relative rounded-xl overflow-hidden`}
        >
          <Image
            src={fullProject.image}
            alt={fullProject.name}
            fill
            className="object-cover object-center rounded-xl"
            data-view-transition-name={`project-image-${slug}`}
            priority
          />
        </div>
      )}

      {/* Informacion */}
      <div className="flex flex-col">
        <h1 className="text-2xl md:text-4xl font-bold text-primary">{fullProject.name}</h1>
        <p className="text-text/80">{fullProject.description || fullProject.shortDescription}</p>
      </div>

      {/* Tech Pills */}
      <div className="flex flex-wrap gap-2 mt-2">
        {Object.entries(fullProject.languages ?? {}).map(([tech, value], _, arr) => {
          const total = arr.reduce((acc, [, v]) => acc + v, 0);
          const percentage = ((value / total) * 100).toFixed(1);
          return <TechPill key={tech} name={tech} value={percentage} />;
        })}
        {fullProject.technologies?.map((tech) => (
          <TechPill key={tech} name={tech} />
        ))}
      </div>

      {fullProject.longDescription && (
        <div className="mt-4 prose prose-sm sm:prose-base dark:prose-invert max-w-none">
          <ReactMarkdown components={markdownComponents}>
            {fullProject.longDescription}
          </ReactMarkdown>
        </div>
      )}

      {/* Links */}
      <div className="flex gap-4 items-center">
        {showPrivateBadge && <PrivateRepoBadge />}
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-primary transition-colors"
          >
            Ver en GitHub →
          </a>
        )}
        {site && (
          <a
            href={site.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-primary transition-colors"
          >
            {site.label}
          </a>
        )}
      </div>
    </section>
  );
}
