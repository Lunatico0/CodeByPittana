import { seoConfig } from "@data/seoConfig";

const socialLinks = {
  linkedin: "https://www.linkedin.com/in/patricio-pittana",
  github: "https://github.com/CodeByPittana",
  twitter: "https://twitter.com/CodeByPittana",
  instagram: "https://www.instagram.com/codebypittana",
};

export default function JsonLdPerson() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${seoConfig.url}#patricio-angel-pittana`,
    "name": "Patricio Ángel Pittana",
    "url": seoConfig.url,
    "image": `${seoConfig.url}/favicon.svg`,
    "jobTitle": "Full Stack Developer & Systems Integrator",
    "description": seoConfig.description,
    "email": "mailto:contacto@codebypittana.com",
    "nationality": "Argentina",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AR"
    },
    "sameAs": Object.values(socialLinks),
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance / Code by Pittana",
      "url": seoConfig.url
    },
    "alumniOf": [
      { "@type": "EducationalOrganization", "name": "CoderHouse" },
      { "@type": "EducationalOrganization", "name": "Universidad Tecnológica Nacional (UTN)" }
    ],
    "knowsLanguage": ["Spanish", "English"],
    "occupation": {
      "@type": "Occupation",
      "name": "Full Stack Developer",
      "description": seoConfig.description
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full Stack Developer"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
