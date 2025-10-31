import { NextResponse } from "next/server";
import { fetchFeaturedRepos } from "@lib/github";

const GITHUB_USERNAME = process.env.GITHUB_USERNAME ?? "";

export async function GET() {
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
  } catch (err: any) {
    console.error("Error al obtener proyectos destacados:", err);
    return NextResponse.json(
      { error: err.message || "Error interno del servidor" },
      { status: 500 }
    );
  }
}
