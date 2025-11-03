import { seoConfig } from '@data/seoConfig';
import { Metadata } from 'next';
import Projects from "@sections/Projects/Projects";

export const generateMetadata = (): Metadata => {
  const pageTitle = `Proyectos | ${seoConfig.author}`;
  const pageDescription =
    "Explora todos los proyectos de desarrollo Full Stack, desde aplicaciones de gestión (ERP) hasta soluciones de automatización con Next.js, Node.js y React.js.";

  return {
    title: pageTitle,
    description: pageDescription,

    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `${seoConfig.url}/projects`,
      images: [
        {
          url: seoConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `Proyectos de ${seoConfig.author}`,
        },
      ],
    },

    twitter: {
      title: pageTitle,
      description: pageDescription,
      images: [seoConfig.ogImage],
    },

    alternates: {
      canonical: `${seoConfig.url}/projects`,
    },
  };
};

const GITHUB_USERNAME = process.env.GITHUB_USERNAME ?? "";

export default async function ProjectsPage() {
  if (!GITHUB_USERNAME) {
    console.error("Error: La variable de entorno GITHUB_USERNAME no está definida.");
    return (
      <section className="p-6 text-center text-red-400">
        Error al cargar proyectos: Usuario de GitHub no configurado.
      </section>
    );
  }

  return (
    <section className="p-6">
      <Projects title="Todos los Proyectos" animate={true} limit={0} />
    </section>
  );
}
