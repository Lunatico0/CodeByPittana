
import Projects from "@sections/Projects/Projects";

const GITHUB_USERNAME = process.env.GITHUB_USERNAME ?? "";

export default async function ProjectsPage() {
  if (!GITHUB_USERNAME) {
    console.error("Error: La variable de entorno GITHUB_USERNAME no está definida.");
    return (
      <section className="p-6 text-center text-red-400">
        Error al cargar proyectos: Usuario de GitHub no configurado.
      </section>
    );
  }

  return (
    <section className="p-6">
      <Projects title="Todos los Proyectos" animate={true} limit={0} />
    </section>
  );
}
