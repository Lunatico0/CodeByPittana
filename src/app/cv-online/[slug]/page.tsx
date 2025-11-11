import { notFound } from 'next/navigation';
import { getCvData } from '@/src/lib/cvData';
import CvRenderer from '@components/cv/CvRenderer';
import { CvPageProps } from '@typings/cvPage';
import { seoConfig } from '@data/seoConfig';
import { Metadata } from 'next';

export async function generateMetadata({ params }: CvPageProps): Promise<Metadata> {
  const { slug } = params;

  const parts = slug.split('-');
  if (parts.length !== 2) {
    return {
      title: "CV Online | Patricio Pittana",
      description: "Currículum Vitae profesional de Patricio Pittana.",
      robots: { index: false },
    };
  }

  const [langCode, layoutType] = parts;
  const lang = langCode === 'es' ? 'Español' : langCode === 'en' ? 'Inglés' : 'Idioma Desconocido';
  const layout = layoutType === 'visual' ? 'Visual' : layoutType === 'harvard' ? 'Harvard' : 'Formato Desconocido';

  const pageTitle = `CV Online (${lang} - ${layout}) | ${seoConfig.author}`;
  const pageDescription = `Currículum Vitae profesional de ${seoConfig.author} en formato ${layout} (${langCode.toUpperCase()}). Experiencia en desarrollo Full Stack.`;
  const canonicalUrl = `${seoConfig.url}/cv-online/${slug}`;

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
          url: seoConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `Vista previa del CV de ${seoConfig.author}`,
        },
      ],
    },
    twitter: {
      title: pageTitle,
      description: pageDescription,
      images: [seoConfig.ogImage],
    },
    robots: {
      index: false,
      follow: false,
      nocache: true,
      noarchive: true,
      nosnippet: true,
    }
  };
}

export default async function CvOnlinePage({ params }: CvPageProps) {
  const finalParams = await params;
  const { slug } = finalParams;

  const parts = slug.split('-');
  if (parts.length !== 2) {
    return notFound();
  }

  const [langCode, layoutType] = parts;
  const lang = langCode === 'es' ? 'es' : langCode === 'en' ? 'en' : null;
  const layout = layoutType === 'visual' ? 'visual' : layoutType === 'harvard' ? 'harvard' : null;

  if (!lang || !layout) {
    return notFound();
  }

  const cvData = getCvData(lang, layout);

  return (
    <main className="min-h-screen bg-bg text-text p-4 md:p-8">
      <CvRenderer data={cvData} />
    </main>
  );
}
