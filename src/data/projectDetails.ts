import { ExtraProjectDetails } from '@typings/projectDetails';

export const extraProjectDetails: ExtraProjectDetails = {
  "controlCubiertas": {
    image: "/images/controlCubiertas.png",
    shortDescription: "Origen de TireOps: app de escritorio (React + Electron) para gestión de cubiertas de flotas, hoy evolucionada a un SaaS multi-tenant en producción.",
    longDescription: `
Primera versión de **TireOps**, el software de gestión de cubiertas para flotas que desarrollo para TMBC: administra el ciclo de vida de cada cubierta, el inventario, el historial y la asignación por vehículo, pensado para uso operativo en depósitos y talleres.

### Qué construí
- UI completa en **React + TypeScript**, optimizada para tareas repetitivas.
- Migración de Web App a **Electron** para ofrecer un entorno de escritorio estable.
- Manejo de datos complejos: vehículos, cubiertas, historial, recapados.
- Sistema de filtros y vistas rápidas para minimizar errores operativos.

### Cómo evolucionó: TireOps
- Hoy es un **SaaS multi-tenant en producción**, con app de escritorio Windows y app web contra el mismo backend. Soy el único desarrollador del producto completo.
- Una base de datos por empresa: el tenant se resuelve desde el **JWT** firmado en cada request, con permisos por rol (**RBAC**).
- Backend en **Node.js, Express y Mongoose** sobre **MongoDB Atlas**, desplegado en Vercel.
- App **Electron** con actualizaciones automáticas, comprobantes impresos, reportes de desgaste y monitoreo de errores con Sentry.
- Historial auditable: cada movimiento se puede corregir o deshacer sin pisar el original.
  `,
    technologies: [
      "React.js",
      "TypeScript",
      "Electron.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS"
    ],
  },
  "Canela-Cakes-menu": {
    image: "/images/Canela.png",
    shortDescription: "Menú digital SPA con navegación fluida, microinteracciones y experiencia optimizada para cafeterías.",
    longDescription: `
Single Page Application accesible vía QR, diseñada para ofrecer una navegación suave y clara en dispositivos móviles.

### Qué construí
- UI en **Astro + TS** con foco en performance.
- Sistema de navegación sincronizado con scroll usando Intersection Observer.
- Microinteracciones y secciones dinámicas para mejorar la experiencia.
- Diseño simple, ligero y fácil de mantener.

### Qué demuestra este proyecto
- Dominio de UX para interfaces móviles.
- Implementación de microinteracciones intuitivas.
- Capacidad para crear SPAs rápidas y centradas en el usuario.
  `,
    technologies: [
      "Astro",
      "TypeScript",
      "Tailwind CSS",
      "UI/UX"
    ],
  },
  "QRStyle": {
    image: "/images/QRStyle.png",
    shortDescription: "Generador visual de QR con personalización avanzada: colores, formas, gradientes, logos y exportación SVG.",
    longDescription: `
Herramienta visual para crear códigos QR estilizados, con previsualización en tiempo real y control granular del diseño.

### Qué construí
- UI en **React** con múltiples capas de estado y controles visuales.
- Lógica personalizada para renderizado y exportación de **SVG**.
- Personalización completa: colores, gradientes, bordes, logos, patrones.
- Diseño UX simple pero flexible, pensado para usuarios no técnicos.

### Qué demuestra este proyecto
- Habilidad para construir interfaces **interactivas y visuales**.
- Dominio de lógica de render dinámico y manipulación de SVG.
- Pensamiento orientado a producto y experiencia de usuario.
  `,
    technologies: [
      "React.js",
      "TypeScript",
      "SVG Rendering",
      "Tailwind CSS",
      "Design Systems"
    ],
  },
  "Artemisa": {
    image: "/images/artemisa-dashboard.png",
    shortDescription: "E-commerce MERN completo con pagos por MercadoPago y un ERP simple para gestionar productos y stock.",
    longDescription: `
Mi primer proyecto grande: una plataforma full-stack con tienda pública y panel de administración para manejar productos, stock, ventas y presupuestos, con un catálogo de unos 350 productos.

### Qué construí
- Frontend en **React + TS** con componentes escalables y formularios complejos.
- API REST en **Node.js y Express** con **MongoDB**, autenticación **JWT** y manejo de imágenes.
- Integración de pagos con **MercadoPago**.
- ERP simple: gestión de productos y stock, presupuestos y dashboards en el panel administrativo.

### Qué demuestra este proyecto
- Experiencia real construyendo **productos completos** (UI + lógica + pagos).
- Integración frontend/backend sólida sobre el stack **MERN**.
- Manejo de inventario, estados complejos y flujos administrativos.
  `,
    technologies: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "MercadoPago"
    ],
  },
  "DobleL": {
    image: "/images/dobleL-Hero.png",
    shortDescription: "Landing page moderna para estudio de arquitectura, diseñada con enfoque en branding, performance y estructura visual clara.",
    longDescription: `
Página institucional creada para un estudio de arquitectura, enfocada en transmitir identidad profesional mediante una estructura visual limpia y animaciones sutiles.

### Qué construí
- Landing page responsiva con secciones dinámicas y diseño modular.
- Layout con jerarquía visual clara y uso de componentes reutilizables.
- Animaciones ligeras y microtransiciones para mejorar la experiencia.
- Optimización de tiempos de carga y performance general de la página.

### Qué demuestra este proyecto
- Capacidad para crear interfaces **claras, modernas y orientadas a marca**.
- Dominio de diseño UI/UX aplicado a proyectos comerciales reales.
- Buen manejo de layouts, tipografía y composición visual.
  `,
    technologies: [
      "Astro",
      "TypeScript",
      "Tailwind CSS",
      "UI/UX",
      "Responsive Design"
    ],
  },
  "CodeByPittana": {
    image: "/images/CodeByPittana.png",
    shortDescription: "Repositorio del portfolio personal, diseñado para presentar experiencia, proyectos y narrativa profesional como Full Stack Engineer.",
    longDescription: `
Portfolio desarrollado para comunicar habilidades técnicas, experiencia y proyectos destacados, con un diseño moderno centrado en claridad y estructura.

### Qué construí
- Arquitectura completa de portfolio con secciones dinámicas y contenido cargado desde archivos de datos.
- Integración con la API de GitHub para mostrar proyectos en tiempo real.
- Sistema de componentes reutilizables y tematizado consistente.
- Animaciones suaves y diseño visual cohesivo, orientado a destacar contenido.

### Qué demuestra este proyecto
- Dominio de **arquitectura frontend** para sitios altamente estructurados.
- Capacidad para integrar datos externos (GitHub API).
- Pensamiento orientado a presentación técnica y experiencia profesional.
  `,
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "GitHub API"
    ],
  },
  "Artemisa-Landing": {
    image: "/images/artemisa.png",
    shortDescription: "Landing page promocional creada para acompañar el lanzamiento del e-commerce Artemisa, con enfoque en claridad visual y conversión.",
    longDescription: `
Página promocional diseñada para presentar los productos y el valor del e-commerce Artemisa, con un enfoque en comunicación visual clara y carga rápida.

### Qué construí
- Landing page responsiva con una estructura pensada para conversión.
- Secciones informativas con imágenes y contenido dinámico.
- Diseño visual alineado con el branding del proyecto principal.
- Optimizaciones básicas de performance y accesibilidad.

### Qué demuestra este proyecto
- Capacidad para crear **interfaces limpias, rápidas y orientadas a producto**.
- Buen manejo de layouts y comunicación visual.
- Experiencia construyendo páginas comerciales dentro de un ecosistema mayor.
  `,
    technologies: [
      "React.js",
      "JavaScript",
      "CSS",
      "HTML",
      "Responsive Design"
    ],
  },
  "discordBot-Musicologo": {
    image: "/images/discordBot.png",
    shortDescription: "Bot modular para Discord con comandos dinámicos, manejo de eventos en tiempo real y consumo de APIs externas.",
    longDescription: `
Bot diseñado para comunidades de Discord con funciones de música, utilidades y administración, construido con arquitectura modular y manejo asincrónico de eventos.

### Qué construí
- Sistema de **comandos dinámicos** cargados automáticamente desde módulos.
- Integración con APIs externas para reproducción de música y utilidades.
- Manejo de eventos en tiempo real usando Discord.js (interacciones, botones, colas).
- Arquitectura modular y extensible pensada para nuevas funcionalidades.

### Qué demuestra este proyecto
- Dominio de **lógica asincrónica** y manejo de eventos en tiempo real.
- Experiencia integrando APIs y construyendo herramientas backend.
- Capacidad para estructurar proyectos Node.js de forma clara y escalable.
  `,
    technologies: [
      "Node.js",
      "Discord.js",
      "JavaScript",
      "Asynchronous Logic",
      "API Integration"
    ],
  },
};
