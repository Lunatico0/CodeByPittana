import { NavLink, NavId } from "@typings/navigation";

const allLinks: Record<string, NavLink> = {
  hero: { href: "/#hero", id: 'hero', label: "Inicio" },
  highlights: { href: "/#highlights", id: 'highlights', label: "Proceso" },
  projects: { href: "/#projects", id: 'projects', label: "Proyectos" },
  tech: { href: "/#tech", id: 'tech', label: "Habilidades" },
  about: { href: "/#about", id: 'about', label: "Sobre mí" },
  experience: { href: "/#experience", id: 'experience', label: "Experiencia" },
  value: { href: "/#value", id: 'value', label: "Servicios" },
  contact: { href: "/#contact", id: 'contact', label: "Contacto" },
};

const buildLinks = (keys: NavId[]): NavLink[] => {
  return keys.map(key => allLinks[key]);
};


export const links = buildLinks([
  'projects',
  'tech',
  'about',
  'experience',
  'value',
  'contact'
]);


export const mobileLinks = buildLinks([
  'highlights',
  'projects',
  'tech',
  'about',
  'experience',
  'value',
  'contact'
]);

export const SPALinks = buildLinks([
  'hero',
  'highlights',
  'projects',
  'tech',
  'about',
  'experience',
  'value',
  'contact'
]);

// export const pagesLinks: NavLink[] = buildLinks([
//   'about',
//   'contact',
//   'projects',
//   'experience',
// ])

export const pagesLinks = [
  { href: "/about", id: 'about', label: "Sobre mí" },
  { href: "/contact", id: 'contact', label: "Contacto" },
  { href: "/projects", id: 'projects', label: "Proyectos" },
  { href: "/services", id: 'experience', label: "Servicios" },
];
