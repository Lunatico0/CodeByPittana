export interface GithubLanguages {
  [language: string]: number;
}

export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  gitUrl: string;
  siteUrl: string;
  topics?: string[];
  html_url: string;
  homepage: string;
  languages_url?: string;
  languages?: GithubLanguages;
}

export interface LocalProjectDetails {
  image: string;
  shortDescription: string;
  technologies: string[];
}

export interface ProjectCardData {
  id: number;
  name: string;
  description?: string | null;
  gitUrl?: string;
  siteUrl?: string;
  shortDescription?: string;
  image?: string;
  technologies?: string[];
  languages_url?: string;
  languages?: GithubLanguages;
}
