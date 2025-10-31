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
    const nonForkRepos = repos.filter((repo) => !repo.fork);

    return NextResponse.json(nonForkRepos, {
      headers: {
        "Cache-Control": "s-maxage=900, stale-while-revalidate=60",
      },
    });
  } catch (err) {
    console.error("Error al obtener proyectos:", err);

    let errorMessage = "Error interno del servidor";

    if (err instanceof Error) {
      errorMessage = err.message;
    } else if (typeof err === "string") {
      errorMessage = err;
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
