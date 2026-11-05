// Tests de la mezcla de proyectos privados (manuales) con los de GitHub.
// Correr con: node --test src/lib/projectList.test.mjs  (o npm test)
// Node 24 importa los .ts directo (type stripping), sin dependencias.
import { test } from "node:test";
import assert from "node:assert/strict";

import {
  buildGithubCards,
  findProjectBySlug,
  getProjectLinks,
  loadProjectCards,
  mergeProjects,
  projectSlug,
} from "./projectList.ts";
import { privateProjects } from "../data/privateProjects.ts";
import { GITHUB_ORDER, GITHUB_WHITELIST } from "../data/githubProjects.ts";

const PRIVATE_FIXTURE = [
  { id: "vela1", name: "Vela1", isPrivate: true, shortDescription: "a", longDescription: "a", technologies: [] },
  { id: "verok", name: "Verōk", isPrivate: true, shortDescription: "b", longDescription: "b", technologies: [] },
  { id: "tireops", name: "TireOps", isPrivate: true, shortDescription: "c", longDescription: "c", technologies: [] },
];

const repo = (id, name, extra = {}) => ({
  id,
  name,
  description: null,
  fork: false,
  gitUrl: `https://github.com/x/${name}`,
  html_url: `https://github.com/x/${name}`,
  homepage: "",
  siteUrl: "",
  topics: [],
  ...extra,
});

const names = (list) => list.map((p) => p.name);

test("privados primero, en su orden, y despues los de GitHub en el orden recibido", () => {
  const github = [repo(3, "C"), repo(1, "A"), repo(2, "B")];
  const result = mergeProjects(PRIVATE_FIXTURE, github);
  assert.deepEqual(names(result), ["Vela1", "Verōk", "TireOps", "C", "A", "B"]);
});

test("los privados se muestran aunque GitHub devuelva vacio", () => {
  const result = mergeProjects(PRIVATE_FIXTURE, []);
  assert.deepEqual(names(result), ["Vela1", "Verōk", "TireOps"]);
});

test("sin duplicados de slug: gana la primera aparicion", () => {
  const github = [repo(1, "A"), { ...repo(1, "A bis") }, { ...repo(9, "Choca"), id: "verok" }];
  const result = mergeProjects(PRIVATE_FIXTURE, github);
  assert.deepEqual(names(result), ["Vela1", "Verōk", "TireOps", "A"]);
  const slugs = result.map(projectSlug);
  assert.equal(new Set(slugs).size, slugs.length);
});

test("limit > 0 recorta el total; limit 0 devuelve todos", () => {
  const github = [repo(1, "A"), repo(2, "B")];
  assert.deepEqual(names(mergeProjects(PRIVATE_FIXTURE, github, 4)), ["Vela1", "Verōk", "TireOps", "A"]);
  assert.equal(mergeProjects(PRIVATE_FIXTURE, github, 0).length, 5);
});

test("si GitHub falla, loadProjectCards devuelve los privados y el error", async () => {
  const { projects, error } = await loadProjectCards(
    PRIVATE_FIXTURE,
    async () => {
      throw new Error("rate limit");
    },
  );
  assert.deepEqual(names(projects), ["Vela1", "Verōk", "TireOps"]);
  assert.match(error, /rate limit/);
});

test("si GitHub responde, loadProjectCards mezcla sin error", async () => {
  const { projects, error } = await loadProjectCards(PRIVATE_FIXTURE, async () => [repo(1, "A")], 0);
  assert.deepEqual(names(projects), ["Vela1", "Verōk", "TireOps", "A"]);
  assert.equal(error, null);
});

test("buildGithubCards filtra por whitelist, ordena por ORDER y suma detalles locales", () => {
  const repos = [repo(1, "B"), repo(2, "Fuera"), repo(3, "A"), repo(4, "C")];
  const details = { A: { image: "/images/a.png", shortDescription: "detalle A" } };
  const cards = buildGithubCards(repos, details, ["A", "B", "C"], ["A", "C", "B"]);
  assert.deepEqual(names(cards), ["A", "C", "B"]);
  assert.equal(cards[0].image, "/images/a.png");
  assert.equal(cards[0].shortDescription, "detalle A");
});

test("findProjectBySlug encuentra privados por slug de texto y repos por id numerico", () => {
  const github = [repo(42, "A")];
  assert.equal(findProjectBySlug("tireops", PRIVATE_FIXTURE, github)?.name, "TireOps");
  assert.equal(findProjectBySlug("42", PRIVATE_FIXTURE, github)?.name, "A");
  assert.equal(findProjectBySlug("nada", PRIVATE_FIXTURE, github), undefined);
});

test("getProjectLinks: privado muestra badge y nunca link a GitHub", () => {
  const links = getProjectLinks({ ...PRIVATE_FIXTURE[0], gitUrl: "https://github.com/x/secreto" });
  assert.equal(links.showPrivateBadge, true);
  assert.equal(links.repoUrl, null);
  assert.equal(links.site, null);
});

test("getProjectLinks: privado con demo muestra solo el link a la demo", () => {
  const links = getProjectLinks({ ...PRIVATE_FIXTURE[1], siteUrl: "https://demo.example" });
  assert.equal(links.repoUrl, null);
  assert.deepEqual(links.site, { href: "https://demo.example", label: "Visitar sitio →" });
});

test("getProjectLinks: una URL de demo (?demo=1) se rotula Probar demo", () => {
  const links = getProjectLinks({ ...PRIVATE_FIXTURE[2], siteUrl: "https://app.example/login?demo=1" });
  assert.deepEqual(links.site, { href: "https://app.example/login?demo=1", label: "Probar demo →" });
});

test("datos reales: TireOps linkea a su demo pública", () => {
  const tireops = privateProjects.find((p) => projectSlug(p) === "tireops");
  assert.equal(tireops?.siteUrl, "https://control-cubiertas.vercel.app/login?demo=1");
});

test("getProjectLinks: repo publico conserva GitHub y el texto de Discord", () => {
  const links = getProjectLinks(repo(1, "Bot", { siteUrl: "https://discord.com/oauth2/authorize?client_id=1" }));
  assert.equal(links.showPrivateBadge, false);
  assert.equal(links.repoUrl, "https://github.com/x/Bot");
  assert.equal(links.site?.label, "Añadir a Discord →");
});

test("datos reales: Vela1, Verōk y TireOps privados, en ese orden, sin repo ni imagen", () => {
  assert.deepEqual(privateProjects.map(projectSlug), ["vela1", "verok", "tireops"]);
  for (const p of privateProjects) {
    assert.equal(p.isPrivate, true);
    assert.equal(p.gitUrl, undefined);
    assert.ok(p.shortDescription.length > 0);
    assert.ok(p.longDescription.length > 0);
  }
  assert.equal(privateProjects[0].image, undefined, "Vela1 va sin imagen (sin permiso de la empresa)");
});

test("datos reales: controlCubiertas no se muestra aparte de TireOps", () => {
  assert.equal(GITHUB_WHITELIST.includes("controlCubiertas"), false);
  assert.equal(GITHUB_ORDER.includes("controlCubiertas"), false);
  const tireops = privateProjects.find((p) => projectSlug(p) === "tireops");
  assert.doesNotMatch(tireops.longDescription, /también está en esta sección/);
});

test("datos reales: sin em dash ni en dash en los textos", () => {
  const text = JSON.stringify(privateProjects);
  const dashes = new RegExp("[" + String.fromCharCode(0x2013, 0x2014) + "]");
  assert.equal(dashes.test(text), false);
});
