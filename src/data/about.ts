import type { AboutData } from "@typings/about";
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import ExtensionRoundedIcon from '@mui/icons-material/ExtensionRounded';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';

export const About: AboutData = {
  heading: "El código es estructura. La estructura es claridad.",
  paragraphs: [
    "Creo en la programación como una disciplina donde cada línea cuenta. Detrás de una respuesta HTTP, de una animación fluida o de una base de datos optimizada hay un sistema pensada para ser robusto y predecible.",
    "Me motiva entender cómo cada pieza encaja: diseñar endpoints seguros, componentes reutilizables y procesos que escalen. No se trata solo de hacer que algo funcione, sino de hacerlo correctamente.",
    "En cada proyecto priorizo rendimiento, seguridad y coherencia: si el código es limpio y predecible, el resto fluye."
  ],
  pillars: [
    {
      id: "org",
      title: "Organización",
      description: "Estructuras claras que facilitan mantenimiento y escalado",
      Icon: InventoryRoundedIcon
    },
    {
      id: "opt",
      title: "Optimización",
      description: "Rendimiento pensado desde el diseño, no añadido al final.",
      Icon: SettingsSuggestRoundedIcon
    },
    {
      id: "comp",
      title: "Componetización",
      description: "Piezas pequeñas y reutilizables que componen soluciones grandes.",
      Icon: ExtensionRoundedIcon
    },
    {
      id: "bp",
      title: "Buenas prácticas",
      description: "Disciplina y estándares para entregar calidad consistente.",
      Icon: StarsRoundedIcon
    }
  ]
}
