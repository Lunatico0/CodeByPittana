import type { ExperienceProps } from "@typings/experience";

export const ExperienceData: ExperienceProps = {
  work: [
    {
      id: 'vela1',
      role: "Full Stack Engineer",
      company: "Vela1 (Contractor) | Remoto",
      period: "Febrero 2026 - Presente",
      description: [
        "**VelaHair** (desde agosto 2026), app de clientes para salones en **Flutter, Bloc y Drift**: lideré el discovery y el diseño (research, diseño de pantallas, prototipos navegables v1 y v2) y desde octubre construyo la app casi en solitario: theming por salón, invitación por deep link y QR, reservas con bloqueo de horario y seña, recompensas y referidos, caché offline y EN/ES/KO.",
        "Backend de VelaHair en **NestJS y MongoDB**: modelo de identidad entre salones documentado como ADR, rate limiting del inicio de sesión por código, y fixes de concurrencia y autorización fijados con tests e2e.",
        "**VelaGo** (desde marzo 2026), punto de venta mobile en **Flutter, Bloc y Drift**, **en producción con comercios reales**: investigué y propuse la arquitectura de almacenamiento local y sync (aprobada formalmente por el equipo) y la construí: SQLite con Drift, un **outbox durable** para que las ventas cobradas sobrevivan a la caída de red, migraciones versionadas y un motor de sync con orden por dependencias y pull incremental.",
        "Pagos con terminal en VelaGo: pagos divididos, propinas, reembolsos, devoluciones y cambios, y cierre de lote. También propuse y diseñé el rediseño de la UI, aprobado formalmente. Soy el desarrollador principal, con cerca de dos tercios de los commits.",
        "**Merchant Portal (Business Platform) y storefront** (febrero a julio 2026): apps web para comercios en **React 19 y Next.js 15**, con configuración de tienda, checkout y un editor de tickets y KDS con vista previa en vivo.",
      ]
    },
    {
      id: 'tireops',
      role: "Full Stack Developer",
      company: "TireOps / TMBC (Freelance) | Remoto",
      period: "Mayo 2025 - Presente",
      description: [
        "Software de gestión de cubiertas para flotas, **en producción**, como app de escritorio Windows y app web contra el mismo backend. Soy el único desarrollador del producto completo.",
        "Convertí una app de escritorio en un **SaaS multi-tenant** con una base de datos por empresa: el tenant se resuelve desde el JWT firmado en cada request, con permisos por rol (**RBAC**).",
        "Backend en **Node.js, Express y Mongoose** sobre **MongoDB Atlas**, desplegado en Vercel; app **Electron** con actualizaciones automáticas, comprobantes impresos, reportes de desgaste y monitoreo con Sentry.",
        "Historial auditable: cada movimiento se puede corregir o deshacer, y la corrección queda registrada junto al original en lugar de pisarlo.",
      ]
    },
    {
      id: 'artemisa',
      role: "Full Stack Developer",
      company: "Artemisa (Freelance) | Remoto",
      period: "Septiembre 2024 - Mayo 2025",
      description: [
        "Mi primer proyecto grande: un e-commerce completo en **MERN** (React, TypeScript, Node.js, Express, MongoDB) con pagos por **MercadoPago** y un ERP simple para gestionar productos y stock, con un catálogo de unos 350 productos.",
        "API REST en Node.js y Express con autenticación **JWT**, manejo de imágenes, presupuestos, dashboards y panel de administración.",
      ]
    }
  ],
  education: [
    {
      id: 'fullstack',
      title: "Desarrollador Full-Stack",
      institution: "CoderHouse | Online",
      period: "Octubre 2023 - Enero 2025",
      description:
        "Carrera Full Stack Developer, terminada dentro del **top 10%** por notas y desempeño. Backend (Node.js/Express, autenticación JWT, MongoDB), frontend (React.js, JavaScript, Tailwind CSS) y despliegue. **Proyecto final enfocado en la arquitectura de e-commerce y bases de datos**."
    },
    {
      id: 'engineering',
      title: "Ingeniería Electrónica (Incompleta, hasta 3er año)",
      institution: "UTN (Universidad Tecnológica Nacional)",
      period: "2018 - 2023",
      description:
        "Estudios de electrónica, lógica y matemáticas que me dieron una **base sólida en lógica algorítmica y resolución de problemas complejos**."
    },
    {
      id: 'bachelor',
      title: "Bachiller en Ciencias Económicas",
      institution: "San Miguel (Hermanos Maristas)",
      period: "2004 - 2017",
      description:
        "Formación que proporciona una base fundamental en economía y gestión, facilitando la comprensión de la **lógica financiera y empresarial** detrás de las soluciones de *software*."
    }
  ]
};
