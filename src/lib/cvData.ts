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

// const CV_BASE_DATA = {
//   contact: {
//     location: "Paraná, Entre Ríos, Argentina",
//     email: "pittanapatricio@gmail.com",
//     phone: "+54 9 3435 417146",
//     portfolio: "codebypittana.vercel.app",
//     github: "github.com/Lunatico0",
//     linkedin: "linkedin.com/in/patricio-pittana-2185b6177",
//   },

//   sidebar: {
//     titles: {
//       stack: { es: "Stack Tecnológico Principal", en: "Core Tech Stack" },
//       education: { es: "Educación", en: "Education" },
//       methodologies: { es: "Metodologías", en: "Methodologies" },
//     },

//     // *** FRONTEND ENGINEER — React Ecosystem ***
//     stack: [
//       "React.js (TypeScript)",
//       "Next.js / Astro",
//       "Custom Hooks & Component Patterns",
//       "State Management (Context / Reducers)",
//       "Node.js / Express (APIs básicas)",
//       "MongoDB / NoSQL",
//       "Electron (Desktop Apps)",
//       "Tailwind CSS / UI/UX",
//       "Vercel / Render / Firebase",
//     ],

//     education: [
//       {
//         es: { title: "Desarrollador Full Stack", subtitle: "CoderHouse (Top 10%, Nov 2023 - Ene 2025)" },
//         en: { title: "Full Stack Developer", subtitle: "CoderHouse (Top 10%, Nov 2023 - Jan 2025)" },
//       },
//       {
//         es: { title: "Ingeniería Electrónica", subtitle: "UTN (hasta 3er año, no finalizado)" },
//         en: { title: "Electronic Engineering", subtitle: "UTN (up to 3rd year, incomplete)" },
//       },
//       {
//         es: { title: "Formación en Inglés", subtitle: "6 años - Nivel estimado B2" },
//         en: { title: "English Training", subtitle: "6 years - Estimated B2 Level" },
//       },
//     ],

//     methodologies: [
//       "Pensamiento Analítico / Problem Solving",
//       "Patrones de Componentes / Buenas Prácticas",
//       "TDD / Code Quality",
//       "Autogestión y Trabajo Remoto",
//     ],
//   },

//   // ==================================================
//   // RESUMEN – AJUSTADO A FRONTEND ENGINEER (JR+)
//   // ==================================================
//   summary: {
//     es: [
//       "**Frontend Engineer (React/TypeScript)** con experiencia creando interfaces escalables y mantenibles, usando **React, Next.js, Astro y Tailwind** como herramientas principales. Capaz de diseñar componentes reutilizables, flujos limpios y arquitecturas front modernas.",
//       "Apoyo mis proyectos con backend ligero en **Node.js/Express** cuando es necesario (autenticación, APIs simples, integraciones externas). Experiencia real entregando productos completos para logística y retail.",
//       "Me caracterizo por construir rápido, mantener código claro y trabajar con mentalidad orientada a producto."
//     ],

//     en: [
//       "**Frontend Engineer (React/TypeScript)** experienced in building scalable, maintainable interfaces using **React, Next.js, Astro, and Tailwind**. Skilled at designing reusable components, clean flows, and modern frontend architecture.",
//       "I support my work with light backend when needed (Node.js/Express APIs, auth, integrations). Hands-on experience delivering complete products for logistics and retail.",
//       "Known for fast iteration, clean code, and a product-driven mindset."
//     ],
//   },

//   // ==================================================
//   // PROYECTOS — AJUSTADOS PARA FRONTEND ENGINEER
//   // ==================================================
//   sections: {
//     es: [
//       // -----------------------------
//       // PROYECTOS CLAVE
//       // -----------------------------
//       {
//         title: "Proyectos Clave",
//         items: [
//           {
//             title: "Control de Cubiertas (Sistema de Gestión de Flotas)",
//             meta: "React · Electron.js · MongoDB · Component Architecture",
//             bullets: [
//               "Construí la **UI completa en React**, organizada en **componentes reutilizables**, estados globales, vistas condicionales y flujos complejos (asignación, historial, mantenimiento).",
//               "Migré la herramienta a **Electron (Windows Desktop)** para uso 100% offline con persistencia local.",
//               "Diseñé un sistema robusto de vistas, tablas, formularios y validaciones adaptado al flujo real de una empresa logística."
//             ],
//           },

//           {
//             title: "Artemisa E-Commerce + ERP Light",
//             meta: "React · Tailwind · Node.js · Component Patterns",
//             bullets: [
//               "Desarrollé el **frontend completo** para el panel administrativo: dashboards, tablas, filtros dinámicos, formularios inteligentes y flujos de cotización.",
//               "Apliqué **component patterns**, composición y diseño responsive moderno con Tailwind.",
//               "Integración del frontend con APIs Node/Express (auth JWT, endpoints CRUD, carga de imágenes)."
//             ],
//           },

//           {
//             title: "Menú Digital CanelaCakes + Herramienta QR",
//             meta: "Astro · Tailwind · Web UX",
//             bullets: [
//               "Diseñé una experiencia **single-page** rápida y optimizada para dispositivos móviles.",
//               "Creé un **generador de QR** personalizable usando web tooling propio y estilos adaptados a la marca."
//             ]
//           }
//         ]
//       },

//       // -----------------------------
//       // EXPERIENCIA PROFESIONAL
//       // -----------------------------
//       {
//         title: "Experiencia Profesional",
//         items: [
//           {
//             title: "Desarrollador Frontend – Proyecto Artemisa (freelance)",
//             meta: "Sep 2024 - May 2025",
//             bullets: [
//               "Desarrollo de interfaces (dashboard, ventas, stock) en React.",
//               "Optimización de UX en flujos comerciales críticos.",
//               "Soporte a integraciones (Vercel, Firebase, MercadoPago)."
//             ],
//           },

//           {
//             title: "Desarrollador Independiente",
//             meta: "Actualidad",
//             bullets: [
//               "Construcción de interfaces, paneles, dashboards y herramientas para pequeñas empresas.",
//               "Integración ligera con APIs propias o externas.",
//             ],
//           },
//         ],
//       }, {
//         title: "Educación",
//         items: [
//           {
//             title: "**Desarrollador Full Stack**",
//             meta: "Nov 2023 - Ene 2025",
//             description: "**CoderHouse**",
//             bullets: [
//               "Egresado con Distinción / Rendimiento Superior",
//             ],
//           },
//           {
//             title: "**Ingeniería Electrónica** (Incompleta)", // Consolidar Incompleta aquí
//             meta: "Hasta 3er año",
//             description: "**UTN**", // La institución como descripción
//             bullets: [
//               "Excelente base en lógica algorítmica y estructuras de sistemas, **fundamental para el diseño de soluciones empresariales**.",
//             ],
//           },
//           {
//             title: "**Metodologías Clave:**",
//             meta: "",
//             description: "",
//             bullets: [
//               "Resolución de Problemas.",
//               "Pensamiento Analítico.",
//               "TDD/Calidad de Código.",
//               "Colaboración Remota.",
//             ],
//           },
//         ],
//       },
//     ],


//     // ==================================================
//     // ENGLISH VERSION
//     // ==================================================
//     en: [
//       {
//         title: "Key Projects",
//         items: [
//           {
//             title: "Control de Cubiertas (Fleet Tire Management System)",
//             meta: "React · Electron.js · MongoDB · Component Architecture",
//             bullets: [
//               "Built the **full UI in React**, using reusable components, global state, conditional rendering, and operational workflows.",
//               "Migrated the app to a **Windows Desktop Electron build**, enabling full offline usage.",
//               "Designed structured views, tables, forms, and validations for real logistics workflows."
//             ],
//           },

//           {
//             title: "Artemisa E-Commerce + ERP Light",
//             meta: "React · Tailwind · Node.js · Component Patterns",
//             bullets: [
//               "Developed the **entire admin/frontend interface** (dashboard, quoting flow, stock, clients).",
//               "Applied **component patterns**, composition, and responsive UI with Tailwind.",
//               "Integrated the frontend with a Node.js API (JWT auth, CRUD endpoints)."
//             ],
//           },

//           {
//             title: "CanelaCakes Digital Menu + QR Tool",
//             meta: "Astro · Tailwind · UX Design",
//             bullets: [
//               "Built a fast single-page digital menu optimized for mobile.",
//               "Created a custom QR generator with brand-oriented styles."
//             ]
//           }
//         ]
//       },

//       {
//         title: "Professional Experience",
//         items: [
//           {
//             title: "Frontend Developer – Artemisa Project (freelance)",
//             meta: "Sep 2024 - May 2025",
//             bullets: [
//               "Developed React interfaces for core operational modules.",
//               "Improved UX and page performance across the admin panel.",
//               "Supported integrations (Vercel, Firebase, MercadoPago)."
//             ],
//           },

//           {
//             title: "Independent Developer",
//             meta: "Current",
//             bullets: [
//               "Delivered frontend-heavy tools, dashboards, and custom interfaces.",
//               "Integrated lightweight Node.js APIs as needed."
//             ],
//           },
//         ],
//       },
//       {
//         title: "Education",
//         items: [
//           {
//             title: "**Full Stack Developer**",
//             meta: "Nov 2023 - Dic 2025",
//             description: "**CoderHouse**",
//             bullets: [
//               "Graduated with Distinction / Superior Performance",
//             ],
//           },
//           {
//             title: "**Electronic Engineering** (Incomplete)",
//             meta: "Up to 3rd year",
//             description: "**UTN**",
//             bullets: [
//               "Strong foundation in **algorithmic logic** and **system architecture**, essential for designing **enterprise-grade software solutions**.",
//             ],
//           },
//           {
//             title: "**Key Methodologies:**",
//             meta: "",
//             description: "",
//             bullets: [
//               "Problem Solving.",
//               "Analytical Thinking.",
//               "TDD/Code Quality.",
//               "Remote Collaboration.",
//             ],
//           },
//         ],
//       },
//     ],
//   },
// };

export type CVData = typeof CV_BASE_DATA;

export function getCvData(lang: "es" | "en", layout: "visual" | "harvard") {
  const { summary, sections, sidebar, ...rest } = CV_BASE_DATA;

  const currentSummary = summary[lang];
  const currentSections = sections[lang];

  const currentEducation = sidebar.education.map(item => ({
    title: item[lang].title,
    subtitle: item[lang].subtitle,
  }));

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
    },
  };
}





const CV_BASE_DATA = {
  contact: {
    location: "Paraná, Entre Ríos, Argentina",
    email: "pittanapatricio@gmail.com",
    phone: "+54 9 3435 417146",
    portfolio: "codebypittana.vercel.app",
    github: "github.com/Lunatico0",
    linkedin: "linkedin.com/in/patricio-pittana-2185b6177",
  },

  sidebar: {
    titles: {
      stack: { es: "Stack Tecnológico", en: "Technical Stack" },
      education: { es: "Educación", en: "Education" },
      methodologies: { es: "Idiomas", en: "Languages" },
    },

    stack: [
      "React (TypeScript)",
      "Next.js, Astro",
      "Node.js, Express",
      "MongoDB / NoSQL",
      "REST APIs",
      "Tailwind CSS",
      "Electron",
      "Firebase, Vercel",
    ],

    education: [
      {
        es: {
          title: "Full Stack Developer",
          subtitle: "CoderHouse (Top 10%, 2023–2025)",
        },
        en: {
          title: "Full Stack Developer",
          subtitle: "CoderHouse (Top 10%, 2023–2025)",
        },
      },
      {
        es: {
          title: "Ingeniería Electrónica (Incompleta)",
          subtitle: "UTN",
        },
        en: {
          title: "Electronic Engineering (Incomplete)",
          subtitle: "UTN",
        },
      },
    ],

    methodologies: [
      "English: B2 reading/listening, B1 speaking",
      "Spanish: Native",
    ],
  },

  summary: {
    es: [
      "Frontend Engineer especializado en React/TypeScript, enfocado en arquitectura de UI escalable y sistemas de componentes predecibles.",
      "Experiencia desarrollando herramientas internas para logística y retail, trabajando con datos operativos reales y flujos complejos.",
      "Perfil frontend-first con fundamentos sólidos de backend ligero en Node.js/Express.",
    ],
    en: [
      "Frontend Engineer specialized in React/TypeScript, focused on scalable UI architecture and predictable component systems.",
      "Experience building internal tools for logistics and retail, working with real operational data and complex flows.",
      "Strong frontend-first profile with solid fundamentals in lightweight backend development using Node.js/Express.",
    ],
  },

  sections: {
    es: [
      {
        title: "Proyectos Clave",
        items: [
          {
            title: "Control de Cubiertas — Fleet Tire Management System",
            meta: "React · Electron · Node.js · MongoDB",
            bullets: [
              "Desarrollo completo de la interfaz para un sistema de gestión de flota utilizado por 45–65 vehículos.",
              "Aplicación de escritorio empaquetada con Electron, con operación 100% offline para depósitos y talleres.",
              "Diseño de flujos estructurados, validaciones y seguimiento de historial de mantenimiento utilizados diariamente.",
            ],
          },
          {
            title: "Artemisa — Retail E-Commerce + Admin Panel",
            meta: "React · Tailwind · Node.js",
            bullets: [
              "Desarrollo del panel administrativo completo para un catálogo de aproximadamente 350 productos.",
              "Implementación de patrones de componentes limpios y layouts responsive.",
              "Integración con APIs Node.js, autenticación JWT, operaciones CRUD y manejo de imágenes.",
            ],
          },
          {
            title: "QrStyles — Advanced QR Customization Tool",
            meta: "JavaScript · Canvas · SVG",
            bullets: [
              "Desarrollo de un generador de códigos QR personalizables con gradientes, formas, márgenes y logos embebidos.",
              "Implementación de exportación SVG para impresión de alta calidad y activos de branding.",
            ],
          },
        ],
      },
      {
        title: "Experiencia Profesional",
        items: [
          {
            title: "Frontend Developer — Artemisa (Freelance)",
            meta: "Sep 2024 – May 2025",
            bullets: [
              "Desarrollo de interfaces React para ventas, stock y flujos de presupuestado utilizados diariamente.",
              "Mejora de UX y soporte de integraciones con Firebase, MercadoPago y Vercel.",
            ],
          },
          {
            title: "Independent Developer",
            meta: "2024 – Presente",
            bullets: [
              "Desarrollo de dashboards, herramientas administrativas y sistemas internos para pequeños negocios.",
              "Construcción de APIs ligeras en Node.js e integración con servicios externos.",
            ],
          },
        ],
      },
    ],

    en: [
      {
        title: "Key Projects",
        items: [
          {
            title: "Control de Cubiertas — Fleet Tire Management System",
            meta: "React · Electron · Node.js · MongoDB",
            bullets: [
              "Developed the full UI for a fleet management system used by 45–65 vehicles.",
              "Packaged as a Windows-ready Electron desktop application with 100% offline operation.",
              "Designed structured workflows, validations, and maintenance history tracking used daily.",
            ],
          },
          {
            title: "Artemisa — Retail E-Commerce + Admin Panel",
            meta: "React · Tailwind · Node.js",
            bullets: [
              "Built the complete admin interface for a retail catalog of approximately 350 products.",
              "Implemented clean component patterns and responsive layouts across the panel.",
              "Integrated Node.js APIs including JWT authentication, CRUD operations, and image handling.",
            ],
          },
          {
            title: "QrStyles — Advanced QR Customization Tool",
            meta: "JavaScript · Canvas · SVG",
            bullets: [
              "Built a customizable QR generator with gradients, shapes, margins, and embedded logos.",
              "Implemented SVG export for high-quality printing and branding assets.",
            ],
          },
        ],
      },
      {
        title: "Professional Experience",
        items: [
          {
            title: "Frontend Developer — Artemisa (Freelance)",
            meta: "Sep 2024 – May 2025",
            bullets: [
              "Developed React interfaces for sales, stock, and quoting workflows used daily.",
              "Improved UX flows and supported integrations with Firebase, MercadoPago, and Vercel.",
            ],
          },
          {
            title: "Independent Developer",
            meta: "2024 – Present",
            bullets: [
              "Delivered dashboards, admin tools, and internal systems for small businesses.",
              "Built lightweight Node.js APIs and integrated external services as required.",
            ],
          },
        ],
      },
    ],
  },
};
