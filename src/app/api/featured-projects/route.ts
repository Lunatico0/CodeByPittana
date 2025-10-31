import { NextResponse } from "next/server";
import { fetchFeaturedRepos } from "@lib/github";
import { useState } from "react";

const GITHUB_USERNAME = process.env.GITHUB_USERNAME ?? "";

export async function GET() {
  const [error, setError] = useState<string | null>(null);

  if (!GITHUB_USERNAME) {
    return NextResponse.json(
      { error: "Usuario de GitHub no configurado." },
      { status: 500 }
    );
  }

  try {
    const featured = await fetchFeaturedRepos(GITHUB_USERNAME, 4);
    return NextResponse.json(featured, {
      headers: {
        "Cache-Control": "s-maxage=900, stale-while-revalidate=60", // 15 min
      },
    });
  } catch (err) {
    if (err instanceof Error) {
      setError(`Error al cargar proyectos: ${err.message}`);
    } else {
      setError("Error desconocido al cargar proyectos");
    }
  }
}
