import type { PillarData, CTAData, ValueOfferSectionProps } from "@typings/valueOffer";
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import ApiRoundedIcon from '@mui/icons-material/ApiRounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import { techIcons } from '@icons/techIcons';

const Diploma = techIcons['diploma']

export const PILLARS_DATA: PillarData[] = [
  {
    id: 'frontend',
    title: 'Experiencias Frontend',
    description:
      'Desarrollo interfaces claras, escalables y centradas en el usuario. Trabajo con React/Next.js aplicando patrones modernos, tipado fuerte y diseño de componentes reutilizables.',
    Icon: CodeRoundedIcon,
  },
  {
    id: "backend",
    title: "Arquitectura y Datos",
    description:
      'Diseño APIs y lógica de negocio bien estructurada, priorizando escalabilidad, consistencia de datos y claridad en el flujo entre frontend y backend.',
    Icon: ApiRoundedIcon,
  },
  {
    id: "performance",
    title: "Optimización y Rendimiento",
    description:
      'Refactorizo y optimizo código para mejorar velocidad, legibilidad y eficiencia. Me enfoco en medir, entender y mejorar el rendimiento real de las aplicaciones.',
    Icon: RocketLaunchRoundedIcon,
  },
];


export const CTAS_DATA: CTAData[] = [
  {
    id: "freelance",
    title: "Proyectos y Consultoría (Freelance)",
    description:
      "Puedo colaborar en proyectos puntuales aportando diseño de interfaces, arquitectura frontend y desarrollo basado en buenas prácticas. Trabajo con estimaciones claras y comunicación directa.",
    ctaText: "Detallar mi Proyecto",
    ctaLink: "/services",
  },
  {
    id: "fulltime",
    title: "Roles Full-Time",
    description:
      "Busco integrarme a equipos que valoren la ingeniería frontend, la claridad en el código y la mejora continua. Aporto disciplina, enfoque y capacidad para resolver problemas reales con impacto.",
    Icon: Diploma,
    ctaText: "Descargar CV",
  }
];

export const VALUE_OFFER_SECTION_DATA: ValueOfferSectionProps = {
  pillars: PILLARS_DATA,
  ctas: CTAS_DATA,
}
