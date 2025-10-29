// data/services.ts (Nueva propuesta)

import { FAQItem, Plan } from "@typings/services";

export const pricingPlans: Plan[] = [
  {
    id: 1,
    name: 'Starter',
    price: 250,
    title: 'Landing Page & Web Estática',
    subtitle: 'Ideal para presencia online o MVPs de validación.',
    deliveryTime: "3-5 semanas",
    isRecommended: false,
    ctaText: 'Ver Detalle y Cotizar',
    ctaLink: "/contact?plan=starter",
    isConsultation: false,
    features: [
      { id: 1, name: 'Fase 1: Análisis y Diseño Básico (Requerimientos, Boceto)' },
      { id: 2, name: 'Web Estática/Informativa (Hasta 5 Páginas/Secciones)' },
      { id: 3, name: 'Diseño 100% Responsivo y SEO Fundacional' },
      { id: 4, name: 'Integración de Formularios de Contacto' },
      { id: 5, name: 'Fase 5: Despliegue en Dominio (Configuración Backend y Frontend)' },
      { id: 6, name: 'Soporte Post-Lanzamiento (1 mes de corrección de bugs)' },
    ],
  },
  {
    id: 2,
    name: 'Pro',
    price: 850,
    title: 'Aplicación Dinámica & Backend (CRUD)',
    subtitle: 'La solución completa para gestionar datos, contenido o usuarios.',
    deliveryTime: "6-10 semanas",
    isRecommended: true,
    ctaText: '¡Quiero el Plan Pro!',
    ctaLink: "/contact?plan=pro",
    features: [
      { id: 1, name: 'Fase 1: Análisis y Diseño Completo (Arquitectura, Casos de Uso)' },
      { id: 2, name: 'Fase 2: Desarrollo Backend (APIs, Modelos, Lógica de Negocio)' },
      { id: 3, name: 'Fase 3: Desarrollo Frontend (Integración de APIs, Manejo de Estado)' },
      { id: 4, name: 'Fase 4: Testing (Pruebas unitarias y funcionales)' },
      { id: 5, name: 'Integración con Bases de Datos Avanzadas (SQL/NoSQL)' },
      { id: 6, name: 'Optimización de Carga y Rendimiento (Lighthouse Score)' },
    ],
  },
  {
    id: 3,
    name: 'Growth',
    price: 1500,
    title: 'E-commerce, SaaS & Consultoría Estratégica',
    subtitle: 'Para proyectos de alta complejidad o necesidad de escalabilidad avanzada.',
    deliveryTime: "A definir",
    isRecommended: false,
    ctaText: 'Hablemos de tu Proyecto',
    ctaLink: "/contact?plan=growth",
    isConsultation: true,
    features: [
      { id: 1, name: 'Todo en Pro más: E-commerce, Plataformas SaaS o Migraciones' },
      { id: 2, name: 'Pasarelas de Pago Complejas (Stripe, Mercado Pago, etc.)' },
      { id: 3, name: 'Paneles de Administración Personalizados (CMS Headless)' },
      { id: 4, name: 'Implementación de Estrategias de Escalabilidad (Microservicios)' },
      { id: 5, name: 'Documentación Técnica y Formación para Futuro Equipo' },
      { id: 6, name: 'Soporte Prioritario y Mantenimiento Avanzado' },
    ],
  },
];

// data/services.ts (FAQS)

export const faqs: FAQItem[] = [
  {
    id: 1,
    question: '¿Qué tecnologías utilizas para el desarrollo?',
    answer: 'Mi stack principal es Full-Stack: Next.js/React con TypeScript para el Frontend; Node.js/Express o Nest.js API Routes para el Backend. En bases de datos, utilizo MongoDB, Firebase o soluciones como Supabase, priorizando siempre la herramienta más robusta para el proyecto.',
  },
  {
    id: 2,
    question: '¿Cuánto tiempo tardará mi proyecto?',
    answer: 'Depende del alcance definido en la fase de análisis. Los proyectos **Starter** (web estática) pueden tardar de **3 a 5 semanas**. Los proyectos **Pro** (web dinámica con backend) suelen tardar de **6 a 10 semanas**. Los proyectos Growth se cotizan y definen tras la fase de consultoría inicial.',
  },
  {
    id: 3,
    question: '¿Qué incluye el mantenimiento y soporte?',
    answer: 'Incluye la corrección de errores críticos (bugs), actualizaciones de dependencias de seguridad y pequeñas modificaciones de contenido. El alcance y duración del soporte post-lanzamiento se definen en el contrato para asegurar la estabilidad y seguridad de la plataforma.',
  },
  {
    id: 4,
    question: '¿Trabajas con diseños ya existentes?',
    answer: 'Absolutamente. Si ya tienes el diseño en Figma, Adobe XD, o un boceto claro, lo tomamos como base y nos enfocamos en el desarrollo funcional, asegurando la máxima fidelidad visual y optimización de rendimiento.',
  },
];
