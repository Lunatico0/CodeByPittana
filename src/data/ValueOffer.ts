import type { PillarData, CTAData, ValueOfferSectionProps } from "@typings/valueOffer";

import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import ApiRoundedIcon from '@mui/icons-material/ApiRounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';


export const PILLARS_DATA: PillarData[] = [
  {
    id: 'frontend',
    title: 'Experiencias Frontend',
    description: 'Diseño interfaces intuitivas y veloces. Me enfoco en React/Next.js para una experiencia de usuario (UX) accesible y moderna.',
    Icon: CodeRoundedIcon,
  },
  {
    id: "backend",
    title: "Arquitectura de Datos y APIs",
    description: "Construyo el cimiento robusto de tu aplicación: APIs seguras, lógica de negocio escalable y modelos de base de datos optimizados.",
    Icon: ApiRoundedIcon,
  },
  {
    id: "performance",
    title: "Optimización y Rendimiento",
    description: "Auditoría de código y refactorización para garantizar tiempos de carga ultrarrápidos y máxima eficiencia, de principio a fin.",
    Icon: RocketLaunchRoundedIcon,
  },
];

export const CTAS_DATA: CTAData[] = [
  {
    id: "freelance",
    title: "Proyectos y Consultoría (Freelance)",
    description: "Colaboremos en tu idea específica. Ofrezco cotización detallada basada en horas de análisis, diseño y desarrollo, adaptada a tu presupuesto.",
    ctaText: "Detallar mi Proyecto",
    ctaLink: "/services",
  },
  {
    id: "fulltime",
    title: "Roles Full-Time (Empleo)",
    description: "Busco integrarme a equipos de alto rendimiento. Mi enfoque es la disciplina, calidad y compromiso a largo plazo con desafíos innovadores.",
    ctaText: "Descargar CV y Trayectoria",
    ctaLink: "/downloads/patricio_pittana_cv.pdf",
  },
];

export const VALUE_OFFER_SECTION_DATA: ValueOfferSectionProps = {
  pillars: PILLARS_DATA,
  ctas: CTAS_DATA,
}
