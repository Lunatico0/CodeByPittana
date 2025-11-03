import ReactMarkdown from "react-markdown";
import { extraProjectDetails } from "@data/projectDetails";
import { fetchGithubRepos } from "@lib/github";
import Image from "next/image";
import TechPill from "@ui/TechPill";
import type { ProjectCardData } from "@typings/project";
import { markdownComponents } from "@lib/markdownComponents";
import { ProjectPageProps } from '@typings/projectPage';
import { seoConfig } from '@data/seoConfig';
import { Metadata } from 'next';

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = params;

  const username = process.env.GITHUB_USERNAME ?? "";

  const repos = await fetchGithubRepos(username);
  const project = repos.find((r) => r.id.toString() === slug);

  if (!project) {
    return {
      title: `Proyecto no encontrado | ${seoConfig.siteName}`,
      description: seoConfig.description,
    };
  }

  const details =
    (extraProjectDetails as Record<string, Partial<ProjectCardData>>)[project.name] ?? {};

  const fullProject: Partial<ProjectCardData> = {
    ...project,
    ...details,
    shortDescription: details.shortDescription || project.description || seoConfig.description,
    image: details.image || seoConfig.ogImage,
  };

  const pageTitle = `${fullProject.name} | ${seoConfig.author}`;
  const pageDescription = fullProject.shortDescription;
  const canonicalUrl = `${seoConfig.url}/projects/${slug}`;
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

  const username = process.env.GITHUB_USERNAME ?? "";
  let project = null;

  try {
    const repos = await fetchGithubRepos(username);
    project = repos.find((r) => r.id.toString() === slug);
  } catch (error) {
    console.error("Error fetching repos:", error);
  }

  const discordAuthPrefix = 'https://discord.com/oauth2/authorize?';

  if (!project) {
    return <div className="p-8 text-center text-red-400">Proyecto no encontrado</div>;
  }

  const details =
    (extraProjectDetails as Record<string, Partial<ProjectCardData>>)[project.name] ?? {};

  const fullProject: ProjectCardData = {
    ...project,
    ...details,
    image: details.image ?? "/favicon.svg",
    shortDescription: details.shortDescription || project.description || "Sin descripción",
    longDescription: details.longDescription || project.description || "Sin descripción",
    technologies: details.technologies ?? [],
  };

  const linkText = fullProject.siteUrl && fullProject.siteUrl.startsWith(discordAuthPrefix)
    ? 'Añadir a Discord →'
    : 'Visitar sitio →';

  return (
    <section className="relative flex flex-col justify-center w-full mx-auto gap-4 text-sm md:text-base">
      {/* Imagen */}
      <div className={`${fullProject.image === '/favicon.svg' ? 'aspect-square max-w-md w-full mx-auto' : 'aspect-[3/2] w-full '} relative rounded-xl overflow-hidden`}
      >
        <Image
          src={fullProject.image ?? "/favicon.svg"}
          alt={fullProject.name}
          fill
          className="object-cover object-center rounded-xl"
          data-view-transition-name={`project-image-${fullProject.id}`}
          priority
        />
      </div>

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
      <div className="flex gap-4">
        {fullProject.gitUrl && (
          <a
            href={fullProject.gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-primary transition-colors"
          >
            Ver en GitHub →
          </a>
        )}
        {fullProject.siteUrl && (
          <a
            href={fullProject.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-primary transition-colors"
          >
            {linkText}
          </a>
        )}
      </div>
    </section>
  );
}
