import { HighlightsDataArray } from '@typings/highlight';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import SearchIcon from '@mui/icons-material/Search';

export const HighlightsData: HighlightsDataArray = [
  {
    Icon: SearchIcon,
    title: 'Discovery, Diseño y Especificación',
    paragraph:
      'Antes de codificar, investigo el problema, diseño las pantallas y el modelo de datos, y escribo la especificación (SDD) y las decisiones técnicas. Así el código parte de una base acordada y no de supuestos.',
  },
  {
    Icon: CodeRoundedIcon,
    title: 'Desarrollo Guiado por Tests',
    paragraph:
      'Trabajo con TDD: primero el test que falla, después el código que lo hace pasar. Uso desarrollo asistido por IA (Claude Code) con subagentes y revisión doble a ciegas, y reviso los diffs.',
  },
  {
    Icon: RocketLaunchRoundedIcon,
    title: 'Entrega y Mantenimiento',
    paragraph:
      'Corro los tests de cada cambio antes de cada commit y la suite completa antes de cada push, con CI en GitHub Actions y monitoreo con Sentry. Después del lanzamiento sigo con fixes y features sobre el producto en producción.',
  },
];
