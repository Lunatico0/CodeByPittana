export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  gitUrl: string;
  siteUrl: string;
  topics?: string[];
}

export interface LocalProjectDetails {
  image: string;
  shortDescription: string;
  technologies: string[];
}
