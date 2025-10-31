import { NextResponse } from "next/server";
import { fetchGithubRepos } from "@lib/github";

const GITHUB_USERNAME = process.env.GITHUB_USERNAME ?? "";

export async function GET() {
  if (!GITHUB_USERNAME) {
    return NextResponse.json(
      { error: "Usuario de GitHub no configurado." },
      { status: 500 }
    );
  }

  try {
    const repos = await fetchGithubRepos(GITHUB_USERNAME);
    // const nonForkRepos = repos.filter((repo) => !repo.fork);

    return NextResponse.json(repos, {
      headers: {
        "Cache-Control": "s-maxage=900, stale-while-revalidate=60",
      },
    });
  } catch (err: any) {
    console.error("Error al obtener proyectos:", err);
    return NextResponse.json(
      { error: err.message || "Error interno del servidor" },
      { status: 500 }
    );
  }
}
