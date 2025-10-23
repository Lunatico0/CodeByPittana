interface ProjectDetail {
  image: string;
  shortDescription: string;
  longDescription?: string;
  technologies: string[];
}

export type ExtraProjectDetails = Record<string, ProjectDetail>;
