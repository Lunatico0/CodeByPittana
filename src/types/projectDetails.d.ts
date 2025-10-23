interface ProjectDetail {
  image: string;
  shortDescription: string;
  technologies: string[];
}

export type ExtraProjectDetails = Record<string, ProjectDetail>;
