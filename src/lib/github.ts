import type { GithubRepo, GithubLanguages, GithubApiRepo } from "@typings/project";

const FEATURED_TOPIC = "portfolio-featured";

/**
 * Obtiene todos los repositorios públicos de un usuario.
 */
export async function fetchGithubRepos(username: string): Promise<GithubRepo[]> {
  const token = process.env.GITHUB_TOKEN;
  const headers: HeadersInit = token ? { Authorization: `token ${token}` } : {};

  const response = await fetch(`https://api.github.com/users/${username}/repos`, {
    headers,
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`Error al obtener repositorios de GitHub: ${response.statusText}`);
  }

  const repos: GithubApiRepo[] = await response.json();

  // Mapeo base y filtrado de forks
  const mappedRepos: GithubRepo[] = repos
    .filter((repo) => !repo.fork)
    .map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      gitUrl: repo.html_url,
      siteUrl: repo.homepage ?? "",
      topics: repo.topics ?? [],
      languages_url: repo.languages_url,
      html_url: repo.html_url,
      homepage: repo.homepage ?? "",
      fork: repo.fork,
    }));


  // Cargamos lenguajes de forma paralela con fallback seguro
  const reposWithLanguages = await Promise.all(
    mappedRepos.map(async (repo) => {
      if (!repo.languages_url) return repo;
      try {
        const res = await fetch(repo.languages_url, { headers });
        if (!res.ok) throw new Error("Error al obtener lenguajes");
        const langs: GithubLanguages = await res.json();
        return { ...repo, languages: langs };
      } catch (error) {
        console.warn(`⚠️ Error al obtener lenguajes para ${repo.name}:`, error);
        return { ...repo, languages: {} };
      }
    })
  );

  return reposWithLanguages;
}

/**
 * Obtiene los repositorios destacados (con el topic configurado).
 */
export async function fetchFeaturedRepos(
  username: string,
  limit = 4
): Promise<GithubRepo[]> {
  const allRepos = await fetchGithubRepos(username);
  const featuredRepos = allRepos.filter((repo) =>
    repo.topics?.includes(FEATURED_TOPIC)
  );

  return featuredRepos.slice(0, limit);
}
