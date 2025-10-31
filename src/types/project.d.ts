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
  id: number;
  name: string;
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
