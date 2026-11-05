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
    methodologies: { es: string[]; en: string[] };
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

// --- CONTENIDO ÚNICO DEL CV (Full Stack, actualizado a nov 2026) ---

const CV_BASE_DATA = {
  contact: {
    location: "Paraná, Entre Ríos, Argentina (remoto)",
    email: "pittanapatricio@gmail.com",
    phone: "+54 9 3435 417146",
    portfolio: "codebypittana.vercel.app",
    github: "github.com/Lunatico0",
    linkedin: "www.linkedin.com/in/patricio-pittana",
  },

  sidebar: {
    titles: {
      stack: { es: "Stack Tecnológico", en: "Technical Stack" },
      education: { es: "Educación", en: "Education" },
      methodologies: { es: "Idiomas", en: "Languages" },
    },

    stack: [
      "TypeScript, JavaScript, Dart",
      "React, Next.js, Vite, Tailwind CSS, MUI, Zustand",
      "Node.js, NestJS, Express",
      "MongoDB / Mongoose, REST, Zod, Swagger",
      "Flutter, Bloc, GoRouter, Drift (SQLite)",
      "Offline-first sync, FCM, Capacitor (Android)",
      "JWT, TOTP 2FA, Passkeys, RBAC, multi-tenant, rate limiting",
      "MercadoPago, card terminal payments",
      "TDD, SDD, Jest, Vitest, flutter_test",
      "GitHub Actions, Vercel, Sentry, Electron",
      "Claude Code (SDD, subagents)",
    ],

    education: [
      {
        es: {
          title: "Full Stack Developer",
          subtitle: "CoderHouse (2023 a 2025, top 10%)",
        },
        en: {
          title: "Full Stack Developer",
          subtitle: "CoderHouse (2023 to 2025, top 10%)",
        },
      },
      {
        es: {
          title: "Ingeniería Electrónica (incompleta)",
          subtitle: "UTN, 2018 a 2023 (hasta 3er año)",
        },
        en: {
          title: "Electronic Engineering (incomplete)",
          subtitle: "UTN, 2018 to 2023 (up to 3rd year)",
        },
      },
    ],

    methodologies: {
      es: [
        "Español: nativo",
        "Inglés: B2",
      ],
      en: [
        "Spanish: native",
        "English: B2",
      ],
    },
  },

  summary: {
    es: [
      "**Full Stack Engineer** que trabaja en todo el producto: **React y Next.js** en la web, **NestJS y Express con MongoDB** en el backend, y **Flutter** en mobile. En **Vela1** entré con trabajo de frontend y hoy desarrollo servicios de backend y dos apps en Flutter: un punto de venta **en producción** con comercios reales y una app de clientes para salones camino a su lanzamiento.",
      "Mi diferencial es el **mobile offline-first**: investigué, propuse y construí la capa de persistencia local y sync de un punto de venta en Flutter (**SQLite con Drift**, outbox durable, migraciones versionadas, manejo de conflictos).",
      "Me importa la exactitud donde hay dinero e identidad: cobros idempotentes, saldos atómicos, concurrencia entre dispositivos, RBAC y aislamiento multi-tenant. Trabajo con **TDD** y **SDD**, y con desarrollo asistido por IA (**Claude Code** con SDD, subagentes, modelo por fase y revisión doble a ciegas): reviso los diffs, corro los tests de cada cambio antes de cada commit y la suite completa antes de cada push.",
    ],
    en: [
      "**Full Stack Engineer** working across the whole product: **React and Next.js** on the web, **NestJS and Express with MongoDB** on the backend, and **Flutter** on mobile. At **Vela1** I joined on frontend work and today ship backend services and two Flutter apps: a point of sale **in production** with real merchants and a salon customer app on its way to launch.",
      "My differentiator is **offline-first mobile**: I researched, proposed and built the local persistence and sync layer of a Flutter point of sale (**SQLite via Drift**, a durable outbox, versioned schema migrations, conflict handling).",
      "I care about correctness where money and identity are involved: idempotent charges, atomic balance updates, race conditions between devices, RBAC and multi-tenant isolation. I work test-first (**TDD**) with **SDD**, and AI-assisted (**Claude Code** with SDD, subagents, a model per phase and blind double review): I review the diffs, run the tests of each change before every commit and the full suite before every push.",
    ],
  },

  sections: {
    es: [
      {
        title: "Experiencia Profesional",
        items: [
          {
            title: "Full Stack Engineer, Vela1 (Contractor)",
            meta: "Feb 2026 a Presente · Remoto",
            description: "Vela1 desarrolla software de comercio para negocios (punto de venta, e-commerce, gestión de salones). Trabajo en tres líneas de producto.",
          },
          {
            title: "VelaHair: app de clientes para salones (Flutter, Bloc, Drift)",
            meta: "Ago 2026 a Presente · Mi foco principal",
            bullets: [
              "Lideré el discovery y el diseño (research, diseño de pantallas, prototipos navegables v1 y v2) y después construí la app casi en solitario: theming por salón, invitación por deep link y QR, reservas con bloqueo de horario y seña, recompensas y referidos, caché offline, EN/ES/KO.",
              "Construí lo que la app necesita en la plataforma VelaStudio: backend en **NestJS y MongoDB** (modelo de identidad entre salones documentado como ADR, rate limiting del código de acceso, fixes de concurrencia y autorización fijados con tests e2e) y las páginas web que abren la app.",
            ],
          },
          {
            title: "VelaGo: punto de venta mobile en producción (Flutter, Bloc, Drift)",
            meta: "Mar 2026 a Presente",
            bullets: [
              "Investigué y propuse la arquitectura de almacenamiento local y sync (aprobada por el equipo) y la construí: **SQLite con Drift**, un **outbox durable** para que las ventas cobradas sobrevivan a la caída de red, migraciones hasta v8 y un motor de sync con estacionamiento de rechazos, orden por dependencias y pull incremental.",
              "Construí los pagos con terminal (divididos, propinas, reembolsos, cierre de lote), devoluciones y cambios, y el bloqueo entre terminales de las órdenes en espera.",
              "Propuse y diseñé el rediseño de la UI, aprobado por el equipo. Desarrollador principal: cerca de dos tercios de los commits.",
            ],
          },
          {
            title: "Merchant Portal (Business Platform) y storefront",
            meta: "Feb 2026 a Jul 2026",
            bullets: [
              "Apps web para comercios en **React 19 y Next.js 15**: configuración de tienda, checkout y un editor de tickets y KDS con vista previa en vivo.",
            ],
          },
          {
            title: "Full Stack Developer, TireOps / TMBC (Freelance)",
            meta: "May 2025 a Presente · Remoto · En producción",
            description: "Software de gestión de cubiertas para flotas. Único desarrollador del producto completo: backend en Node.js, app de escritorio en Electron y apps web en React.",
            bullets: [
              "Convertí una app de escritorio en un **SaaS multi-tenant** con una base de datos por empresa, con el tenant resuelto desde el JWT firmado en cada request y permisos por rol (**RBAC**), sobre **MongoDB Atlas**.",
              "App **Electron** con actualizaciones automáticas, comprobantes impresos, reportes de desgaste y un historial de movimientos auditable y corregible.",
            ],
          },
          {
            title: "Full Stack Developer, Artemisa (Freelance)",
            meta: "Sep 2024 a May 2025 · Remoto",
            bullets: [
              "Mi primer proyecto grande: e-commerce **MERN** completo con pagos por **MercadoPago** y un ERP simple para gestionar productos y stock (unos 350 productos).",
            ],
          },
        ],
      },
      {
        title: "Proyectos",
        items: [
          {
            title: "Verōk: plataforma de finanzas compartidas",
            meta: "Producto propio en producción · Next.js 16 · React 19 · MongoDB Atlas · Capacitor (Android)",
            bullets: [
              "Producto que diseñé, construí y opero, con uso diario real: finanzas personales y compartidas con fondo común, aportes proporcionales al ingreso, reparto automático y cierre mensual.",
              "**TOTP 2FA**, **Passkeys**, cifrado AES-256-GCM de campos sensibles, push por FCM, updater propio firmado, CI en GitHub Actions con **629 tests** (Vitest) y backups nocturnos.",
            ],
          },
        ],
      },
    ],

    en: [
      {
        title: "Professional Experience",
        items: [
          {
            title: "Full Stack Engineer, Vela1 (Contractor)",
            meta: "Feb 2026 to Present · Remote",
            description: "Vela1 builds commerce software for merchants (point of sale, e-commerce, salon management). I work across three product lines.",
          },
          {
            title: "VelaHair: salon customer app (Flutter, Bloc, Drift)",
            meta: "Aug 2026 to Present · My main focus",
            bullets: [
              "Led discovery and design (research, screen design, clickable v1 and v2 prototypes), then built the app almost single-handedly: per-salon theming, invitation deep links and QR, booking with holds and deposits, rewards and referrals, offline cache, EN/ES/KO.",
              "Built what the app needs across the VelaStudio platform: **NestJS and MongoDB** backend (cross-salon identity model documented as an ADR, OTP rate limiting, concurrency and authorization fixes pinned by e2e tests) and the web pages that open the app.",
            ],
          },
          {
            title: "VelaGo: mobile point of sale in production (Flutter, Bloc, Drift)",
            meta: "Mar 2026 to Present",
            bullets: [
              "Researched and proposed the local storage and sync architecture (approved by the team), then built it: **SQLite via Drift**, a **durable outbox** so charged sales survive network loss, migrations up to v8, and a sync engine with rejection parking, dependency ordering and incremental pull.",
              "Built card terminal payments (split, tips, refunds, settlement), returns and exchanges, and cross-terminal locking of held orders.",
              "Proposed and designed the app's UI redesign, approved by the team. Main developer: about two thirds of the commits.",
            ],
          },
          {
            title: "Merchant Portal (Business Platform) and storefront",
            meta: "Feb 2026 to Jul 2026",
            bullets: [
              "Merchant web apps in **React 19 and Next.js 15**: store settings, checkout, and a receipt and KDS editor with live preview.",
            ],
          },
          {
            title: "Full Stack Developer, TireOps / TMBC (Freelance)",
            meta: "May 2025 to Present · Remote · In production",
            description: "Fleet tire management software. Sole developer of the whole product: Node.js backend, Electron desktop app and React web apps.",
            bullets: [
              "Turned a desktop app into a **multi-tenant SaaS** with one database per company, the tenant resolved from the signed JWT on every request, with per-role permissions (**RBAC**), on **MongoDB Atlas**.",
              "Auto-updating **Electron** app, printed receipts, wear reports and an auditable, correctable movement history.",
            ],
          },
          {
            title: "Full Stack Developer, Artemisa (Freelance)",
            meta: "Sep 2024 to May 2025 · Remote",
            bullets: [
              "My first large project: a complete **MERN** e-commerce with **MercadoPago** payments and a simple ERP to manage products and stock (about 350 products).",
            ],
          },
        ],
      },
      {
        title: "Projects",
        items: [
          {
            title: "Verōk: shared finance platform",
            meta: "Personal product in production · Next.js 16 · React 19 · MongoDB Atlas · Capacitor (Android)",
            bullets: [
              "Product I designed, built and run, in real daily use: personal and shared finances with a common fund, income-proportional contributions, automatic split and monthly close.",
              "**TOTP 2FA**, **Passkeys**, AES-256-GCM field encryption, FCM push, a self-hosted signed updater, CI on GitHub Actions with **629 tests** (Vitest), and nightly backups.",
            ],
          },
        ],
      },
    ],
  },
};

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
      methodologies: sidebar.methodologies[lang],
      titles: currentSidebarTitles,
    },
  };
}
