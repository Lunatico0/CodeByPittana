interface ProjectDetail {
  /** Nombre visible; si falta, se usa el del repo. No cambia el slug. */
  name?: string;
  image?: string;
  /** Si falta, la tarjeta usa la descripción del repo en GitHub. */
  shortDescription?: string;
  longDescription?: string;
  technologies: string[];
}

export type ExtraProjectDetails = Record<string, ProjectDetail>;
