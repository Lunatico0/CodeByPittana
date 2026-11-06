// Mezcla de proyectos privados (cargados a mano) con los repos públicos de GitHub.
// Funciones puras, solo con imports de tipos: el test las corre directo con `node --test`.
import type { GithubRepo, ProjectCardData } from "../types/project";

type DetailsByName = Record<string, Partial<ProjectCardData>>;

const DISCORD_AUTH_PREFIX = "https://discord.com/oauth2/authorize?";

/**
 * Slug de la URL /projects/[slug]: el nombre del repo para los de GitHub (id numérico)
 * y el slug de texto para los privados. Las tarjetas de GitHub ya traen el nombre del
 * repo como id (ver buildGithubCards), así el slug no cambia si los detalles pisan `name`.
 */
export function projectSlug(project: Pick<ProjectCardData, "id"> & { name?: string }): string {
  if (typeof project.id === "number" && project.name) return project.name;
  return String(project.id);
}

/** Texto de la tarjeta: la descripción local seguida de la de GitHub, sin "undefined". */
export function cardDescription(
  project: Pick<ProjectCardData, "shortDescription" | "description">,
): string {
  const text = `${project.shortDescription ?? ""}${project.description ?? ""}`;
  return text || "Descripción no disponible.";
}

/**
 * Repos de GitHub a tarjetas: filtra por whitelist, ordena según `order`
 * y suma los detalles locales (imagen, nombre visible, descripciones, tecnologías) por nombre de repo.
 * El id pasa a ser el slug (nombre del repo), que los detalles no pueden pisar.
 */
export function buildGithubCards(
  repos: GithubRepo[],
  details: DetailsByName,
  whitelist: readonly string[],
  order: readonly string[],
): ProjectCardData[] {
  return repos
    .filter((repo) => whitelist.includes(repo.name))
    .sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name))
    .map((repo) => ({ ...repo, ...(details[repo.name] ?? {}), id: projectSlug(repo) }));
}

/**
 * Privados primero (en su orden) y después los de GitHub (en el orden recibido).
 * Sin slugs duplicados: gana la primera aparición. `limit` > 0 recorta el total.
 */
export function mergeProjects(
  privates: readonly ProjectCardData[],
  github: readonly ProjectCardData[],
  limit = 0,
): ProjectCardData[] {
  const seen = new Set<string>();
  const merged: ProjectCardData[] = [];

  for (const project of [...privates, ...github]) {
    const slug = projectSlug(project);
    if (seen.has(slug)) continue;
    seen.add(slug);
    merged.push(project);
  }

  return limit > 0 ? merged.slice(0, limit) : merged;
}

/**
 * Carga los de GitHub con `loadGithub` y los mezcla con los privados.
 * Si GitHub falla, igual devuelve los privados, junto con el mensaje de error.
 */
export async function loadProjectCards(
  privates: readonly ProjectCardData[],
  loadGithub: () => Promise<ProjectCardData[]>,
  limit = 0,
): Promise<{ projects: ProjectCardData[]; error: string | null }> {
  try {
    const github = await loadGithub();
    return { projects: mergeProjects(privates, github, limit), error: null };
  } catch (err) {
    const error = err instanceof Error ? err.message : "Error desconocido";
    return { projects: mergeProjects(privates, [], limit), error };
  }
}

/**
 * Busca un proyecto por slug, primero entre los privados y después entre los de GitHub.
 * También acepta el id numérico de GitHub, que fue el slug hasta que pasó a ser el nombre del repo.
 */
export function findProjectBySlug<T extends Pick<ProjectCardData, "id" | "name">>(
  slug: string,
  privates: readonly T[],
  github: readonly T[],
): T | undefined {
  return [...privates, ...github].find(
    (project) => projectSlug(project) === slug || String(project.id) === slug,
  );
}

export interface ProjectLinks {
  /** Link al código; siempre null si el repositorio es privado. */
  repoUrl: string | null;
  /** Mostrar el badge "Repositorio privado" en lugar del link a GitHub. */
  showPrivateBadge: boolean;
  /** Link al sitio o demo, solo si existe. */
  site: { href: string; label: string } | null;
}

/** Decide qué links muestra la tarjeta y el detalle de un proyecto. */
export function getProjectLinks(
  project: Pick<ProjectCardData, "gitUrl" | "siteUrl" | "isPrivate">,
): ProjectLinks {
  const isPrivate = project.isPrivate === true;
  const siteUrl = project.siteUrl ?? "";

  return {
    repoUrl: !isPrivate && project.gitUrl ? project.gitUrl : null,
    showPrivateBadge: isPrivate,
    site: siteUrl
      ? {
        href: siteUrl,
        label: siteUrl.startsWith(DISCORD_AUTH_PREFIX)
          ? "Añadir a Discord →"
          : siteUrl.includes("demo=1")
            ? "Probar demo →"
            : "Visitar sitio →",
      }
      : null,
  };
}
