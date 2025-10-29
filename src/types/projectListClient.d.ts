import type { ProjectCardData } from "./project";

export interface ProjectListClientProps {
  finalProjects: ProjectCardData[];
  title: string;
  moreProjects: boolean;
  visivility?: string;
}
