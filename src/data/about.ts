import type { AboutProps } from "@typings/about";
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import ExtensionRoundedIcon from '@mui/icons-material/ExtensionRounded';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';

export const AboutData: AboutProps = {
  heading: "Sobre mí.",
  paragraphs: [`
Soy **Full Stack Engineer** y trabajo con **TypeScript** en todo el producto: **React y Next.js** en la web, **NestJS y Express con MongoDB** en el backend, y **Flutter** en mobile. En **Vela1** entré con trabajo de frontend y hoy desarrollo servicios de backend y dos apps en Flutter: **VelaGo**, un punto de venta en producción con comercios reales, y **VelaHair**, una app de clientes para salones que construyo casi en solitario, desde el discovery y el diseño.

Mi diferencial es el **mobile offline-first**: investigué, propuse y construí la capa de persistencia local y sincronización del punto de venta (**SQLite con Drift**, un outbox durable, migraciones versionadas y manejo de conflictos), para que una venta cobrada sobreviva a una caída de red o a un reinicio de la app.

Por fuera de Vela1 desarrollo **TireOps**, un SaaS multi-tenant de gestión de cubiertas para flotas, en producción, del que soy el único desarrollador; y **Verōk**, mi producto propio de finanzas personales y compartidas, en producción y con uso diario.

Me importa la exactitud donde hay dinero e identidad de por medio: cobros idempotentes, saldos actualizados de forma atómica, concurrencia entre dispositivos, sesiones, rate limiting, RBAC y aislamiento multi-tenant. Trabajo con **TDD** y **SDD** (spec-driven development), y con desarrollo asistido por IA (**Claude Code**): yo decido y la herramienta ejecuta.

En mi trabajo valoro cuatro principios que guían cómo diseño y mantengo sistemas:
`,
  ],
  pillars: [
    {
      id: "arch",
      title: "Arquitectura",
      description:
        "Sistemas pensados desde la estructura: offline-first, multi-tenant y con las decisiones escritas en ADRs y design docs.",
      Icon: InventoryRoundedIcon
    },
    {
      id: "org",
      title: "Testing",
      description:
        "Especificación antes del código (SDD) y test antes del fix (TDD), con tests automatizados en frontend, backend y mobile.",
      Icon: ExtensionRoundedIcon
    },
    {
      id: "perf",
      title: "Exactitud",
      description:
        "Pagos, saldos y sesiones que resisten la concurrencia: cobros idempotentes, operaciones atómicas y permisos por rol.",
      Icon: SettingsSuggestRoundedIcon
    },
    {
      id: "bp",
      title: "Buenas prácticas",
      description:
        "Tipado fuerte, código predecible y CI en GitHub Actions que corre lint, typecheck y tests.",
      Icon: StarsRoundedIcon
    }
  ],
  workStyleTitle: "Mi forma de trabajar",
  workStyle: [
    "Ownership de punta a punta: del discovery y el diseño al deploy y el mantenimiento.",
    "Desarrollo asistido por IA con Claude Code: SDD, subagentes, modelo por fase y revisión doble a ciegas.",
    "Reviso los diffs, corro los tests de cada cambio antes de cada commit y la suite completa antes de cada push.",
    "Comunicación clara y criterio técnico fundamentado.",
  ],
}
