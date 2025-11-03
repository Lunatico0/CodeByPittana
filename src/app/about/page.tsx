import type { Metadata } from "next";
import React from "react";
import { AboutData } from "@data/about";
import AboutSection from "@sections/About/About";
import { seoConfig } from "@data/seoConfig";

export const generateMetadata = (): Metadata => {
  const pageTitle = `Sobre mí | ${seoConfig.title}`;
  const pageDescription = "Conocé mi trayectoria, enfoque y las tecnologías con las que trabajo día a día.";

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `${seoConfig.url}/about`,
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
      canonical: `${seoConfig.url}/about`,
    },
  };
};

const Page = () => {
  return (
    <div>
      <AboutSection {...AboutData} />
    </div>
  );
};

export default Page;
