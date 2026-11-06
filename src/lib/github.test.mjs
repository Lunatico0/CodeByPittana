// Tests del fetch de repos de GitHub (paginación).
// Correr con: node --test src/lib/github.test.mjs  (o npm test)
// Node 24 importa los .ts directo (type stripping), sin dependencias.
import { test, afterEach } from "node:test";
import assert from "node:assert/strict";

import { fetchFeaturedRepos, fetchGithubRepos } from "./github.ts";

const originalFetch = globalThis.fetch;

afterEach(() => {
  globalThis.fetch = originalFetch;
});

// Mockea fetch: registra cada URL pedida y devuelve repos sin languages_url
// para que no haya fetch de lenguajes.
function mockFetch(repos = []) {
  const urls = [];
  globalThis.fetch = async (url) => {
    urls.push(String(url));
    return { ok: true, statusText: "OK", json: async () => repos };
  };
  return urls;
}

const repoListUrls = (urls) => urls.filter((u) => u.includes("/users/"));

test("fetchGithubRepos pide 100 repos por página (GitHub devuelve 30 por defecto)", async () => {
  const urls = mockFetch();
  await fetchGithubRepos("Lunatico0");
  const [url] = repoListUrls(urls);
  assert.ok(url, "no se pidió la lista de repos");
  assert.equal(new URL(url).searchParams.get("per_page"), "100");
});

test("fetchFeaturedRepos también pide 100 repos por página", async () => {
  const urls = mockFetch([
    { id: 1, name: "QRStyle", fork: false, topics: ["portfolio-featured"], html_url: "h", homepage: null, description: null },
  ]);
  const featured = await fetchFeaturedRepos("Lunatico0");
  const [url] = repoListUrls(urls);
  assert.equal(new URL(url).searchParams.get("per_page"), "100");
  assert.deepEqual(featured.map((r) => r.name), ["QRStyle"]);
});
