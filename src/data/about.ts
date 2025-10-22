import type { AboutData } from "@typings/about";
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import ExtensionRoundedIcon from '@mui/icons-material/ExtensionRounded';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';

export const About: AboutData = {
  heading: "El código es estructura. La estructura es claridad.",
  paragraphs: [
    "Creo firmemente en la programación como una disciplina donde cada línea tiene su importancia. Detrás de una respuesta HTTP, de una animación fluida o de una base de datos optimizada, hay un sistema diseñado para ser robusto y predecible.",
    "Me apasiona entender cómo cada pieza se une: crear endpoints seguros, componentes reutilizables y procesos que puedan escalar. No se trata solo de hacer que algo funcione, sino de hacerlo de la manera correcta.",
    "En cada proyecto, priorizo el rendimiento, la seguridad y la coherencia: si el código es limpio y predecible, todo lo demás fluye sin problemas."
  ],
  pillars: [
    {
      id: "org",
      title: "Organización",
      description: "Estructuras claras que hacen más fácil el mantenimiento y la escalabilidad.",
      Icon: InventoryRoundedIcon
    },
    {
      id: "opt",
      title: "Optimización",
      description: "Rendimiento diseñado desde el principio, no como un añadido al final.",
      Icon: SettingsSuggestRoundedIcon
    },
    {
      id: "comp",
      title: "Componetización",
      description: "Componentes pequeños y reutilizables que forman soluciones más grandes.",
      Icon: ExtensionRoundedIcon
    },
    {
      id: "bp",
      title: "Buenas prácticas",
      description: "Disciplina y estándares para asegurar una calidad constante.",
      Icon: StarsRoundedIcon
    }
  ]
}
