import type { ContactProps } from "@typings/contact";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export const ContactData: ContactProps = {
  heading: "Convierte tu idea en código.",
  subheading: "Hablemos de tu próximo proyecto.",
  paragraph:
    "Ya sea una plataforma compleja, una aplicación móvil o simplemente quieres saludar, estoy listo para escuchar y colaborar. Utiliza el formulario o contáctame directamente.",
  ctaLabel: "Enviar Mensaje",
  socialLinks: [
    {
      Icon: GitHubIcon,
      name: "GitHub",
      href: "https://github.com/Lunatico0"
    },
    {
      Icon: LinkedInIcon,
      name: "LinkedIn",
      href: "https://linkedin.com/in/patricio-pittana-2185b6177/"
    },
    {
      Icon: EmailIcon,
      name: "Email",
      href: "mailto:pittanapatricio@gmail.com"
    },
  ],
};
