import type { PrivateProject } from "../types/project";

/**
 * Proyectos con repositorio privado: no vienen de la API de GitHub.
 * Se muestran primero en Proyectos (home y /projects), en este orden, con el badge
 * "Repositorio privado" y sin link al código. `id` es el slug de /projects/[slug].
 *
 * Imagen: opcional. Para sumarla, dejá la captura en public/images/ y completá `image`
 * con su ruta (por ejemplo "/images/verok.png"). Sin `image`, se muestra solo texto.
 * Demo: `siteUrl` es opcional; solo se muestra el link si existe.
 */
export const privateProjects: PrivateProject[] = [
  {
    id: "vela1",
    name: "Vela1",
    isPrivate: true,
    // Sin imagen a propósito: todavía no hay permiso de la empresa para capturas.
    shortDescription:
      "Full Stack Engineer (Contractor) en Vela1, software para comercios: VelaHair, app de clientes para salones en camino a lanzamiento; VelaGo, punto de venta mobile en producción con comercios reales; y el Merchant Portal (Business Platform).",
    longDescription: `
Vela1 desarrolla software para comercios: punto de venta, e-commerce y gestión de salones. Trabajo ahí como **Full Stack Engineer (Contractor)** desde febrero de 2026, en tres líneas de producto. El código es de la empresa, por eso el repositorio es privado.

### VelaHair: app de clientes para salones (desde agosto 2026)
- **En camino a lanzamiento.** Lideré el discovery y el diseño (research, diseño de pantallas, prototipos navegables v1 y v2) y desde octubre construyo la app en **Flutter, Bloc y Drift** casi en solitario.
- Una sola app que reúne todos los salones, cada uno con su propia marca gracias al theming en tiempo de ejecución.
- Invitación por deep link y QR, inicio de sesión por teléfono y código, reservas con bloqueo de horario y seña pagada dentro de la app, recompensas y referidos, modo offline de solo lectura y EN/ES/KO.
- Backend en **NestJS y MongoDB**: modelo de identidad entre salones documentado como ADR, rate limiting del inicio de sesión por código, y fixes de concurrencia y autorización fijados con tests e2e.

### VelaGo: punto de venta mobile (desde marzo 2026)
- **En producción con comercios reales.** Flutter, Bloc, GoRouter y Drift.
- Investigué y propuse la arquitectura de almacenamiento local y sync (aprobada formalmente por el equipo) y la construí: SQLite con Drift, un **outbox durable** para que las ventas cobradas sobrevivan a la caída de red, migraciones versionadas y un motor de sync con orden por dependencias y pull incremental.
- Pagos con terminal: pagos divididos, propinas, cierre de lote, devoluciones y cambios, y bloqueo entre terminales de las órdenes en espera.
- Propuse y diseñé el rediseño de la UI, aprobado formalmente. Soy el desarrollador principal, con cerca de dos tercios de los commits.

### Merchant Portal (Business Platform) y storefront (febrero a julio 2026)
- Apps web para comercios en **React 19 y Next.js 15**: configuración de tienda (horarios, usuarios con configuración de 2FA, grupos de clientes), checkout del storefront y un editor de tickets, comandas y tablero KDS con vista previa en vivo.
    `,
    technologies: [
      "Flutter",
      "Dart",
      "Drift",
      "NestJS",
      "MongoDB",
      "React.js",
      "Next.js",
      "TypeScript",
    ],
  },
  {
    id: "verok",
    name: "Verōk",
    isPrivate: true,
    image: "/images/verok.png",
    shortDescription:
      "Mi producto propio de finanzas personales y compartidas, en producción y con uso diario: fondo común, aportes proporcionales al ingreso, cierre mensual y seguridad con 2FA y Passkeys.",
    longDescription: `
Producto que diseñé, construí y opero, **en producción y con uso diario**. Hecho con **Next.js 16, React 19 y TypeScript**, **MongoDB Atlas** con Mongoose, Tailwind CSS 4 y Vercel. El repositorio es privado.

### Qué hace
- Finanzas personales y compartidas: fondo común con aportes proporcionales al ingreso de cada integrante, división automática, cierre mensual, línea de tiempo de saldos, movimientos recurrentes, metas de ahorro e importación de CSV.
- Grupos con roles de admin y miembro, protección del último admin e invitaciones con códigos de un solo uso que vencen a los 7 días.

### Seguridad
- JWT en cookies HTTP-only, **2FA con TOTP**, **Passkeys / WebAuthn**, inicio de sesión con Google, y recuperación y borrado de cuenta.
- Cifrado **AES-256-GCM** de campos sensibles en reposo, rate limiting y registro de auditoría de accesos.

### Android y operación
- App Android con **Capacitor**: notificaciones push con Firebase Cloud Messaging, bloqueo biométrico y un actualizador propio (manifiesto versionado con SHA-256 y links de descarga firmados por 10 minutos).
- **CI en GitHub Actions** (lint, typecheck y tests) con 629 tests en Vitest, backups nocturnos de MongoDB con un workflow programado, monitoreo con Sentry, changelog y registro de decisiones.
    `,
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "Capacitor",
      "Vitest",
    ],
  },
  {
    id: "tireops",
    name: "TireOps",
    isPrivate: true,
    image: "/images/tireops.png",
    siteUrl: "https://control-cubiertas.vercel.app/login?demo=1",
    shortDescription:
      "SaaS multi-tenant de gestión de cubiertas para flotas, en producción: app de escritorio Windows en Electron y app web contra el mismo backend. Soy el único desarrollador.",
    longDescription: `
Software de gestión de cubiertas para talleres y empresas de transporte, que desarrollo como **freelance para TMBC** desde mayo de 2025. Está **en producción** y sigo sumando fixes y features. Soy el único desarrollador del producto completo: backend, app de escritorio Electron y dos apps web en React. El repositorio es privado.

Nació como **controlCubiertas**, la app de escritorio que también está en esta sección con su código público, y evolucionó a un SaaS.

### Qué construí
- **SaaS multi-tenant** con una base de datos de MongoDB por empresa: un plano de control (tenants y usuarios) y un plano de datos donde cada request resuelve la conexión de su tenant desde el JWT firmado, revalidado contra el plano de control en cada llamada.
- Autenticación con access tokens de corta duración y refresh tokens, y permisos por rol (**RBAC**).
- Backend en **Node.js y Express** con Mongoose, validación con Zod y documentación con Swagger, desplegado como función serverless en Vercel sobre **MongoDB Atlas**.
- App **Electron** con actualizaciones automáticas desde GitHub Releases, comprobantes impresos por movimiento con numeración correlativa reservada en el backend, reportes de flota y desgaste, y monitoreo de errores con Sentry.
- Historial auditable: cada movimiento se puede corregir o deshacer, y la corrección queda registrada junto al original en lugar de pisarlo.
    `,
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "Electron.js",
      "React.js",
    ],
  },
];
