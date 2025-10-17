export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  gitUrl: string;
  siteUrl: string;
  topics?: string[];
  html_url: string;
  homepage: string;
}

export interface LocalProjectDetails {
  image: string;
  shortDescription: string;
  technologies: string[];
}
