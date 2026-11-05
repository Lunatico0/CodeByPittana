export interface GithubLanguages {
  [language: string]: number;
}

export interface GithubRepo {
  description: string | null;
  fork: boolean;
  gitUrl: string;
  homepage: string;
  html_url: string;
  id: number;
  languages_url?: string;
  languages?: GithubLanguages;
  name: string;
  siteUrl: string;
  topics?: string[];
}

export interface LocalProjectDetails {
  image: string;
  shortDescription: string;
  technologies: string[];
}

export interface ProjectCardData {
  /** Numérico para repos de GitHub; slug de texto para proyectos privados. Es el segmento de /projects/[slug]. */
  id: number | string;
  name: string;
  /** Repositorio privado: no tiene link al código y muestra el badge "Repositorio privado". */
  isPrivate?: boolean;
  description?: string | null;
  gitUrl?: string;
  siteUrl?: string;
  shortDescription?: string;
  longDescription?: string;
  image?: string;
  technologies?: string[];
  languages_url?: string;
  languages?: GithubLanguages;
}

/**
 * Proyecto cargado a mano (no viene de la API de GitHub), con repositorio privado.
 * `image` es opcional: sin imagen, la tarjeta y el detalle se muestran solo con texto.
 * `siteUrl` (demo) es opcional: si no existe, no se muestra ningún link.
 */
export interface PrivateProject extends ProjectCardData {
  id: string;
  isPrivate: true;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  image?: string;
  siteUrl?: string;
  gitUrl?: undefined;
}

interface GithubApiRepo {
  description: string | null;
  fork: boolean;
  homepage: string | null;
  html_url: string;
  id: number;
  languages_url: string;
  name: string;
  topics: string[] | undefined;
}

export interface ProjectProps {
  title?: string;
  moreProjects?: boolean;
  animate?: boolean;
  limit?: number;
}
