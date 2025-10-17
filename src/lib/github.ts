import type { GithubRepo } from "@typings/project";
const FEATURED_TOPIC = "portfolio-featured";

export async function fetchGithubRepos(username: string): Promise<GithubRepo[]> {
  const response = await fetch(`https://api.github.com/users/${username}/repos`, {
    headers: { "Accept": "application/vnd.github.v3+json" },
  });

  if (!response.ok) {
    throw new Error(`Error al obtener repositorios de GitHub: ${response.statusText}`);
  }

  const repos = await response.json();

  return repos.map((repo: any) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    gitUrl: repo.html_url,
    siteUrl: repo.homepage,
    topics: repo.topics ?? [],
  }));
}

export async function fetchFeaturedRepos(username: string, limit = 4): Promise<GithubRepo[]> {
  const allRepos = await fetchGithubRepos(username);
  const featuredRepos = allRepos.filter((repo: any) =>
    repo.topics && repo.topics.includes(FEATURED_TOPIC)
  );
  return featuredRepos.slice(0, limit);
}
