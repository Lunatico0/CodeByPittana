import type { AboutProps } from "@typings/about";
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import ExtensionRoundedIcon from '@mui/icons-material/ExtensionRounded';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';

export const AboutData: AboutProps = {
  heading: "Sobre mí.",
  paragraphs: [`
Soy **Frontend Engineer** con enfoque en construir interfaces claras, escalables y centradas en el usuario. Trabajo con **React**, **TypeScript** y patrones que priorizan la mantenibilidad y la previsibilidad del sistema. Me interesa especialmente la **arquitectura del frontend**: diseño de componentes, flujos de estado y decisiones que permiten que una UI siga siendo confiable incluso bajo lógica compleja.

Mi formación también incluye experiencia *full-stack*, lo que me permite entender cómo se conectan la capa de datos, la lógica del negocio y la interfaz. Esa visión global me ayuda a tomar decisiones técnicas más acertadas, comunicarme mejor con otros roles y anticipar puntos críticos antes de que se conviertan en problemas.

He trabajado en proyectos con datos, lógica operativa, dashboards, filtros avanzados y entornos donde la exactitud importa. Mi enfoque siempre es el mismo: claridad en el diseño, eficiencia en la ejecución y una base sólida que permita iterar rápido sin romper nada.

En mi trabajo valoro cuatro principios que guían cómo diseño y mantengo sistemas:
`,
  ],
  pillars: [
    {
      id: "arch",
      title: "Arquitectura",
      description:
        "Sistemas pensados desde la estructura: escalables, coherentes y fáciles de mantener a largo plazo.",
      Icon: InventoryRoundedIcon
    },
    {
      id: "org",
      title: "Organización",
      description:
        "Código claro y predecible, con convenciones que facilitan el trabajo en equipo y la evolución del proyecto.",
      Icon: ExtensionRoundedIcon
    },
    {
      id: "perf",
      title: "Performance",
      description:
        "Optimización guiada por datos reales: medición, análisis de cuellos de botella y mejoras progresivas.",
      Icon: SettingsSuggestRoundedIcon
    },
    {
      id: "bp",
      title: "Buenas prácticas",
      description:
        "Diseño consistente, tipado fuerte y documentación simple que reduce errores y acelera la colaboración.",
      Icon: StarsRoundedIcon
    }
  ],
  workStyleTitle: "Mi forma de trabajar",
  workStyle: [
    "Componentes modulares y sistemas UI predecibles.",
    "Decisiones de arquitectura orientadas al mantenimiento a largo plazo.",
    "Optimización basada en métricas, no en intuición.",
    "Comunicación clara y criterio técnico fundamentado.",
  ],
}
