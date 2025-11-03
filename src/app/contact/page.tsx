import type { Metadata } from "next";
import ContactSection from "@sections/Contact/ContactSection";
import { Suspense } from "react";
import Loading from "@ui/Loading";
import { seoConfig } from "@data/seoConfig";

export const generateMetadata = (): Metadata => {
  const pageTitle = `Contacto | ${seoConfig.title}`;
  const pageDescription =
    "Ponte en contacto conmigo para colaboraciones, proyectos o consultas profesionales.";

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `${seoConfig.url}/contact`,
      images: [
        {
          url: seoConfig.ogImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      title: pageTitle,
      description: pageDescription,
      images: [seoConfig.ogImage],
    },
    alternates: {
      canonical: `${seoConfig.url}/contact`,
    },
  };
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Suspense fallback={<Loading />}>
        <ContactSection />
      </Suspense>
    </main>
  );
}
