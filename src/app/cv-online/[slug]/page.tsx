import { notFound } from 'next/navigation';
import { getCvData, CVData } from '@lib/cvData';
import CvRenderer from '@components/cv/CvRenderer';
import { CvContent } from '@lib/cvData.js';

interface CvPageProps {
  params: {
    slug: string;
  };
}

export default async function CvOnlinePage({ params }: CvPageProps) {
  // const { slug } = params;
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
