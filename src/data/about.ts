import type { AboutProps } from "@typings/about";
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import ExtensionRoundedIcon from '@mui/icons-material/ExtensionRounded';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';

export const AboutData: AboutProps = {
  heading: "El código es estructura. La estructura es claridad.",
  paragraphs: [
    "Mi pasión por la programación nació al ver cómo líneas de C/C++ se convertían en funcionalidad tangible. Este principio guía mi trabajo hoy: **construir sistemas robustos y predecibles**, asegurando la solidez del backend y la usabilidad impecable del frontend.",
    "No pongo el foco solo en un lado del stack, sino en el **valor integral**. Me impulsa la obsesión por el detalle visual y la seguridad inquebrantable del código. Creo que una arquitectura limpia y escalable es tan crucial para el desarrollador como una excelente experiencia lo es para el usuario.",
    "Aporto soluciones creativas a desafíos complejos. Mi filosofía es simple: las ideas del cliente son el motor, pero mi experiencia aporta las **contraideas efectivas** para sorprender y garantizar la viabilidad técnica. Siempre con comunicación abierta y entregas de avances diarios para alinear la visión desde el inicio."
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
