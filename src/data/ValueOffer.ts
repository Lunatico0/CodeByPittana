import type { PillarData, CTAData, ValueOfferSectionProps } from "@typings/valueOffer";
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import ApiRoundedIcon from '@mui/icons-material/ApiRounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import { techIcons } from '@icons/techIcons';

const Diploma = techIcons['diploma']

export const PILLARS_DATA: PillarData[] = [
  {
    id: 'frontend',
    title: 'Web con React y Next.js',
    description:
      'Desarrollo interfaces claras y mantenibles con React, Next.js y TypeScript: portales para comercios, storefronts con checkout y productos propios en producción.',
    Icon: CodeRoundedIcon,
  },
  {
    id: "backend",
    title: "Backend y Datos",
    description:
      'Diseño APIs en NestJS y Node.js con MongoDB, con foco en la exactitud donde hay dinero e identidad: autenticación, permisos, multi-tenancy, pagos y concurrencia.',
    Icon: ApiRoundedIcon,
  },
  {
    id: "performance",
    title: "Mobile Offline-first",
    description:
      'Construyo apps en Flutter que siguen funcionando sin red: persistencia local con Drift (SQLite), outbox durable, migraciones versionadas y sincronización con el backend.',
    Icon: RocketLaunchRoundedIcon,
  },
];


export const CTAS_DATA: CTAData[] = [
  {
    id: "freelance",
    title: "Proyectos y Consultoría (Freelance)",
    description:
      "Puedo colaborar en proyectos puntuales de punta a punta: diseño, frontend, backend y mobile, con tests desde el primer día. Trabajo con estimaciones claras y comunicación directa.",
    ctaText: "Detallar mi Proyecto",
    ctaLink: "/services",
  },
  {
    id: "fulltime",
    title: "Roles Full-Time",
    description:
      "Busco integrarme a equipos que valoren la ingeniería full stack, el testing automatizado y el ownership de punta a punta. Aporto experiencia con productos en producción, offline-first y pagos.",
    Icon: Diploma,
    ctaText: "Descargar CV",
  }
];

export const VALUE_OFFER_SECTION_DATA: ValueOfferSectionProps = {
  pillars: PILLARS_DATA,
  ctas: CTAS_DATA,
}
