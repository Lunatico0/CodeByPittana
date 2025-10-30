// Define una estructura para el contenido de una sección
export interface CvSection {
  title: string;
  items: Array<{
    title?: string;
    subtitle?: string;
    meta?: string;
    description?: string;
    bullets?: string[];
  }>;
}

// Estructura de Educación, ahora bilingüe
interface EducationItem {
  es: { title: string; subtitle: string };
  en: { title: string; subtitle: string };
}

// Define la estructura completa para un CV (unificado)
export interface CvContent {
  contact: {
    location: string;
    email: string;
    phone: string;
    portfolio: string;
    github: string;
    linkedin: string;
  };
  sidebar: {
    titles: {
      stack: { es: string; en: string };
      education: { es: string; en: string };
      methodologies: { es: string; en: string };
    };
    stack: string[];
    education: EducationItem[];
    methodologies: string[];
  };
  summary: {
    es: string[];
    en: string[];
  };
  sections: {
    es: CvSection[];
    en: CvSection[];
  };
}

// --- CONTENIDO ÚNICO DEL CV ---

const CV_BASE_DATA = {
  contact: {
    location: "Paraná, Entre Ríos, Argentina",
    email: "pittanapatricio@gmail.com",
    phone: "+54 9 3435 417146",
    portfolio: "codebypittana.vercel.app",
    github: "github.com/Lunatico0",
    linkedin: "linkedin.com/in/patricio-pittana-2185b6177",
  },

  // Datos de Sidebar (Generalmente no cambian por idioma, solo títulos)
  sidebar: {
    titles: {
      stack: { es: "Stack Tecnológico Principal", en: "Core Tech Stack" },
      education: { es: "Educación", en: "Education" },
      methodologies: { es: "Metodologías", en: "Methodologies" },
    },
    stack: [
      "React.js (TypeScript)",
      "Next.js / Astro",
      "Node.js / Express",
      "MongoDB / NoSQL",
      "Electron (Desktop Apps)",
      "Tailwind CSS / UI/UX",
      "Docker / Vercel",
      "JWT / OAuth2",
    ],
    education: [
      {
        es: { title: "Desarrollador Full Stack", subtitle: "CoderHouse (Top 10, Nov 2023 - Dic 2024)" },
        en: { title: "Full Stack Developer", subtitle: "CoderHouse (Top 10 Cohort, Nov 2023 - Dec 2024)" },
      },
      {
        es: { title: "Ingeniería Electrónica", subtitle: "UTN (hasta 3er año, no finalizado)" },
        en: { title: "Electronic Engineering", subtitle: "UTN (up to 3rd year, incomplete)" },
      },
      {
        es: { title: "Formación en Inglés", subtitle: "6 años - Nivel estimado B2" },
        en: { title: "English Training", subtitle: "6 years - Estimated Level B2" },
      },
    ],
    methodologies: [
      "Pensamiento Analítico / Problem Solving",
      "TDD / Code Quality",
      "Colaboración Remota / Agile",
      "Autogestión",
    ],
  },

  // Resumen Profesional (Cambia por idioma)
  summary: {
    es: [
      "Desarrollador **Full Stack**, experto en crear apps rápidas y que soporten alta carga, utilizando **React/Next.js (TypeScript)** y **Node.js/Express**. Tengo experiencia creando sistemas completos para logística y tiendas, buscando cómo mejorar lo que no funciona bien mediante soluciones de software medibles.",
      "Sé usar **MongoDB, Astro y Electron**, lo que me permite trabajar en todo el ***stack***. Me conocen por ser preciso, entregar productos mínimos viables (MVPs) muy rápido y trabajar eficazmente en **equipos remotos de todo el mundo**. Estoy dispuesto a mudarme.",
    ],
    en: [
      "**Full Stack & Systems Developer** specializing in the development of **high-performance, scalable** using **React/Next.js (TypeScript)** and **Node.js/Express** applications. Proven track record of architecting and implementing end-to-end systems for retail and logistics, **with a strong ability to translate** operational inefficiencies into measurable software solutions.",
      "Core competencies include **MongoDB, Astro, and Electron**, with full-stack flexibility. Recognized for **technical precision**, **rapid MVP delivery**, and **the ability to work effectively in cross-functional global teams**. Open to relocation.",
    ],
  },

  // Experiencia y Proyectos (Cambia por idioma)
  sections: {
    es: [
      {
        title: "Proyectos Clave y Logros",
        items: [
          {
            title: "Control de Cubiertas (Sistema de Gestión de Flotas)",
            meta: "Electron.js · React · MongoDB · Automatización",
            description: "",
            bullets: [
              "**Desarrollé e implementé** una plataforma de gestión de activos de escritorio para una empresa logística, **previniendo una disminución del 15% en los costos de compra futuros de neumáticos** mediante el uso de analíticas predictivas de mantenimiento.",
              "Aplicación de migración estratégica de Web App a **plataforma de escritorio (Windows) (Electron)** con **100% de tiempo operativo offline** para la gestión de inventario crítica.",
            ],
          },
          {
            title: "Artemisa E-Commerce + ERP Light",
            meta: "Node.js · Express · MongoDB · Integración MercadoPago",
            description: "",
            bullets: [
              "Arquitectura y desarrollo de un sistema híbrido de e-commerce/ERP (**MERN**) como **núcleo operativo** para una empresa minorista.",
              "**Automaticé** el proceso de cotización al cliente con una **reducción del tiempo de respuesta del 70%** (de 10 a 3 minutos) mediante un sistema de presupuestos a medida.",
              "**Diseñé** una **API sólida en Node.js** con **autenticación JWT segura** que permite una capacidad de carga comprobada de **+500 sesiones de usuario concurrentes**.",
            ],
          },
          {
            title: "Menú Digital CanelaCakes y Herramienta Open Source",
            meta: "Astro · Tailwind · Generador de QR personalizado",
            description: "",
            bullets: [
              "**Llevé a cabo** un menú digital single-page basado en **UX y branding**, lo que condujo a una **mejor experiencia de cliente organizada**.",
              "**Desarrollé** una herramienta open-source de generación de QR personalizada, con diseños estilizados y adaptados a la marca.",
            ],
          },
        ],
      },
      {
        title: "Experiencia Profesional",
        items: [
          {
            title: "Desarrollador Backend & Asistente Técnico - Artemisa",
            meta: "Sep 2024 - May 2025",
            description: "",
            bullets: [
              "**Optimicé** consultas de MongoDB y la lógica de la API para la plataforma de comercio electrónico",
              "**Acompañé** la estrategia de despliegue con **Vercel/Firebase**, asegurando **integración y entrega continua**.",
            ],
          },
          {
            title: "Desarrollador Independiente / Integrador de Sistemas",
            meta: "Actualidad",
            description: "",
            bullets: [
              "Proporcioné soluciones personalizadas de software y técnicas, integrando **software con hardware físico** para resolver problemas de automatización específicos.",
            ],
          },
        ],
      },
      {
        title: "Educación y Metodologías",
        items: [
          {
            title: "**Desarrollador Full Stack**",
            meta: "Nov 2023 - Dic 2024",
            description: "**CoderHouse**",
            bullets: [
              "Egresado con Distinción / Rendimiento Superior",
            ],
          },
          {
            title: "**Ingeniería Electrónica** (Incompleta)", // Consolidar Incompleta aquí
            meta: "Hasta 3er año",
            description: "**UTN**", // La institución como descripción
            bullets: [
              "Excelente base en lógica algorítmica y estructuras de sistemas, **fundamental para el diseño de soluciones empresariales**.",
            ],
          },
          {
            title: "**Metodologías Clave:**",
            meta: "",
            description: "",
            bullets: [
              "Resolución de Problemas.",
              "Pensamiento Analítico.",
              "TDD/Calidad de Código.",
              "Colaboración Remota.",
            ],
          },
        ],
      },
    ],
    en: [
      {
        title: "Key Projects & Achievements",
        items: [
          {
            title: "Control de Cubiertas (Fleet Tire Management System)",
            meta: "Electron.js · React · MongoDB · Automation",
            description: "",
            bullets: [
              "**Developed and deployed** a desktop asset management tool for a logistics company, **projecting a 15% reduction in future tire purchasing costs** through predictive maintenance analytics.",
              "**Executed a strategic migration** from a web application to a **Windows desktop application (Electron)**, achieving **100% operational uptime ***offline***** for mission-critical inventory management.",
            ],
          },
          {
            title: "Artemisa E-Commerce + ERP Light",
            meta: "Node.js · Express · MongoDB · MercadoPago Integration",
            description: "",
            bullets: [
              "**Architected and developed** a hybrid e-commerce/ERP system (**MERN**) serving as the **operational core** for a retail business.",
              "**Automated the client quoting process**, achieving a **70% reduction in time-to-quote** (10 → 3 minutes) via a custom budgeting system.",
              " **Built** a **high-performance Node.js API** with secure **JWT authentication**, supporting a tested load of **500+ concurrent user sessions**.",
            ],
          },
          {
            title: "CanelaCakes Digital Menu & Open Source Tooling",
            meta: "Astro · Tailwind · Custom QR Generator",
            description: "",
            bullets: [
              "**Developed** a single-page digital menu with **UX and branding focus**, leading to a **more streamlined and engaging customer experience**.",
              "**Built** an **open-source custom QR generator tool** for **stylized, brand-specific designs**.",
            ],
          },
        ],
      },
      {
        title: "Professional Experience",
        items: [
          {
            title: "FullStack Developer & Technical Assistant - Artemisa",
            meta: "Sep 2024 - May 2025",
            description: "",
            bullets: [
              "**Optimized** MongoDB queries and API logic for the e-commerce platform.",
              "**Collaborated** on deployment strategy using **Vercel/Firebase**, implementing continuous integration and delivery.",
            ],
          },
          {
            title: "Independent Developer / Systems Integrator",
            meta: "Current",
            description: "",
            bullets: [
              "**Delivered tailored software and technical solutions**, integrating **software with physical hardware** for automation and control systems.",
            ],
          },
        ],
      },
      {
        title: "Education & Methodologies",
        items: [
          {
            title: "**Full Stack Developer**",
            meta: "Nov 2023 - Dic 2024",
            description: "**CoderHouse**",
            bullets: [
              "Graduated with Distinction / Superior Performance",
            ],
          },
          {
            title: "**Electronic Engineering** (Incomplete)",
            meta: "Up to 3rd year",
            description: "**UTN**",
            bullets: [
              "Strong foundation in **algorithmic logic** and **system architecture**, essential for designing **enterprise-grade software solutions**.",
            ],
          },
          {
            title: "**Key Methodologies:**",
            meta: "",
            description: "",
            bullets: [
              "Problem Solving.",
              "Analytical Thinking.",
              "TDD/Code Quality.",
              "Remote Collaboration.",
            ],
          },
        ],
      },
    ],
  },
};

export type CVData = typeof CV_BASE_DATA;

export function getCvData(lang: 'es' | 'en', layout: 'visual' | 'harvard') {
  const { summary, sections, sidebar, ...rest } = CV_BASE_DATA;

  // Selecciona el idioma
  const currentSummary = summary[lang];
  const currentSections = sections[lang];

  // Reestructura la educación para el idioma actual
  const currentEducation = sidebar.education.map(item => ({
    title: item[lang].title,
    subtitle: item[lang].subtitle,
  }));

  // Reestructura los títulos de la sidebar para el idioma actual
  const currentSidebarTitles = {
    stack: sidebar.titles.stack[lang],
    education: sidebar.titles.education[lang],
    methodologies: sidebar.titles.methodologies[lang],
  };


  return {
    ...rest,
    summary: currentSummary,
    sections: currentSections,
    lang,
    layout,
    sidebar: {
      ...sidebar,
      education: currentEducation,
      titles: currentSidebarTitles,
    }
  };
}
