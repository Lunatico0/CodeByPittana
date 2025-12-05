import { HighlightsDataArray } from '@typings/highlight';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import SearchIcon from '@mui/icons-material/Search';

export const HighlightsData: HighlightsDataArray = [
  {
    Icon: SearchIcon,
    title: 'Arquitectura y Diseño Inicial',
    paragraph:
      'Antes de codificar, defino el flujo del sistema, modelo los datos y establezco la estructura del frontend. Esto evita retrabajos y garantiza una base predecible y escalable.',
  },
  {
    Icon: CodeRoundedIcon,
    title: 'Desarrollo Enfocado e Iterativo',
    paragraph:
      'Implemento componentes reutilizables y lógica clara, priorizando mantenibilidad. Avanzo en ciclos cortos: primero lo funcional, luego la refinación basada en pruebas y observación.',
  },
  {
    Icon: RocketLaunchRoundedIcon,
    title: 'Entrega, Validación y Mejora Continua',
    paragraph:
      'Lanzo versiones tempranas, mido rendimiento y comportamiento del usuario, e introduzco mejoras basadas en datos reales para asegurar evolución sin pérdida de calidad.',
  },
];
