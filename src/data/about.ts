import type { AboutProps } from "@typings/about";
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import ExtensionRoundedIcon from '@mui/icons-material/ExtensionRounded';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';

export const AboutData: AboutProps = {
  heading: "Sobre mí.",
  paragraphs: [
    `Soy **Frontend Engineer**, especializado en construir interfaces claras, escalables y centradas en la experiencia del usuario. Trabajo principalmente con **React**, **TypeScript** y patrones que aseguran código mantenible, predecible y fácil de extender.
    Me interesa especialmente la arquitectura del frontend: cómo se estructura un sistema de componentes, cómo fluye el estado y cómo lograr que una interfaz sea confiable incluso cuando la lógica detrás es compleja.`,
    `También cuento con habilidades *full-stack* que me permiten entender el ciclo completo de un producto: desde la definición del modelo de datos hasta la capa de presentación. Esa visión integral me ayuda a tomar mejores decisiones técnicas, comunicarme bien con otros roles y anticipar problemas antes de que aparezcan.`,
    `He trabajado en proyectos reales con datos, lógica operativa, filtros avanzados, dashboards y funcionalidades donde la precisión importa. Mi enfoque siempre es el mismo: **claridad, eficiencia y una base sólida que permita iterar sin fricción**.`,
  ],
  pillars: [
    {
      id: "arch",
      title: "Arquitectura",
      description: "Sistemas pensados desde la estructura: escalables, coherentes y fáciles de razonar.",
      Icon: InventoryRoundedIcon
    },
    {
      id: "org",
      title: "Organización",
      description: "Código ordenado, predecible y fácil de seguir para cualquier miembro del equipo.",
      Icon: ExtensionRoundedIcon
    },
    {
      id: "perf",
      title: "Performance",
      description: "Optimización basada en medición, focalizada en UX real.",
      Icon: SettingsSuggestRoundedIcon
    },
    {
      id: "bp",
      title: "Buenas prácticas",
      description: "Consistencia, tipado fuerte y documentación clara que facilitan la colaboración.",
      Icon: StarsRoundedIcon
    }
  ],
  workStyleTitle: "Mi forma de trabajar",
  workStyle: [
    "Código modular y componentes reutilizables.",
    "Estructuras claras orientadas al mantenimiento a largo plazo.",
    "Optimización del rendimiento basada en medición y no intuición.",
    "Comunicación directa y decisiones técnicas fundamentadas.",
  ],
  valuesTitle: "Principios que aplico",
  values: [
    {
      title: "Arquitectura",
      text: "Sistemas pensados desde la estructura: escalables, coherentes y fáciles de razonar.",
    },
    {
      title: "Organización",
      text: "Código ordenado, predecible y fácil de seguir para cualquier miembro del equipo.",
    },
    {
      title: "Performance",
      text: "Optimización basada en medición, focalizada en UX real.",
    },
    {
      title: "Buenas prácticas",
      text: "Consistencia, tipado fuerte y documentación clara que facilitan la colaboración.",
    },
  ],
}
