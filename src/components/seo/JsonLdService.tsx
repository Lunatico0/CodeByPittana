import { seoConfig } from "@data/seoConfig";

export default function JsonLdService() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Full Stack & Systems Development",
    "provider": {
      "@type": "Person",
      "name": seoConfig.author,
      "url": seoConfig.url,
    },
    "description": "Custom web, backend and mobile development: React / Next.js, NestJS / Node.js with MongoDB, and offline-first Flutter apps.",
    "areaServed": {
      "@type": "Place",
      "name": "Argentina",
    },
    "serviceType": [
      "Web Development",
      "API Design",
      "System Integration",
      "Automation Solutions",
    ],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": `${seoConfig.url}/contact`,
    },
    "url": `${seoConfig.url}/services`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
