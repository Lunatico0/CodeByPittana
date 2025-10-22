import type { AboutData } from "@typings/about";
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import ExtensionRoundedIcon from '@mui/icons-material/ExtensionRounded';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';

export const About: AboutData = {
  heading: "El código es estructura. La estructura es claridad.",
  paragraphs: [
    "La programación es una disciplina donde cada línea tiene su importancia. Detrás de una respuesta HTTP, de una animación fluida o de una base de datos optimizada, hay un sistema diseñado para ser robusto y predecible.",
    "Entender cómo todo se conecta es parte del proceso: cada endpoint, cada componente y cada decisión. No se trata solo de hacer que algo funcione, sino de hacerlo de la manera correcta.",
    "En cada proyecto priorizo el rendimiento, la seguridad y la coherencia. Cuando el código es limpio y consistente, todo lo demás fluye de forma natural."
  ],
  pillars: [
    {
      id: "org",
      title: "Organización",
      description: "Estructuras bien definidas que facilitan el mantenimiento, la lectura y la escalabilidad del código.",
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
      description: "Pequeños componentes reutilizables que forman soluciones más grandes.",
      Icon: ExtensionRoundedIcon
    },
    {
      id: "bp",
      title: "Buenas prácticas",
      description: "Disciplina y consistencia para mantener estándares y asegurar una calidad constante: la base de un código confiable.",
      Icon: StarsRoundedIcon
    }
  ]
}
