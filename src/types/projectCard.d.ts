import type { ProjectCardData } from "./project";

export interface ProjectCardProps extends ProjectCardData {
  index?: number;
  className?: string;
}
