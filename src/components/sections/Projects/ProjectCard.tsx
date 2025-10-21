import { motion } from "framer-motion";
import type { ProjectCardData } from "@/src/types/project";
import Image from "next/image.js";
import Link from "next/link.js";

interface ProjectCardProps extends ProjectCardData {
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  name,
  description,
  gitUrl,
  siteUrl,
  shortDescription,
  image = '/favicon.svg'
}) => {

  return (
    <motion.div
      whileHover={{
        y: -8,
        borderColor: "var(--color-primary)",
        boxShadow: "0 0 15px rgba(158, 153, 255, 0.3)",
        transition: { duration: 0.2, ease: "easeOut", delay: 0 },
      }}
      className="group relative p-3 md:p-6 rounded-xl bg-secondary/50 border border-secondary/70 overflow-hidden"
    >

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(135deg,rgba(158,153,255,0.05),rgba(0,255,255,0.05))]" />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col justify-between items-start w-full h-full">

        <Link href={`/projects/${id}`} className="w-full">
          <div
            className="relative w-full aspect-[3/2] rounded-lg overflow-hidden"
          >
            <Image
              src={image}
              alt={name}
              fill
              className={`${image === '/favicon.svg' ? 'object-contain group-hover:-translate-y-0.5' : 'object-cover'} object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105`}
              sizes="(max-width: 768px) 100vw, 50vw"
              data-view-transition-name={`project-image-${id}`}
            />
          </div>

          <h3
            className="text-2xl font-bold bg-gradient-to-t from-accent to-primary text-transparent bg-clip-text inline-block my-4"
          >
            {name}
          </h3>

          <p className="text-text/80 text-sm mb-4">
            {(description ? shortDescription + description : shortDescription) || "Descripción no disponible."}
          </p>
        </Link>

        {/* Botones links */}
        <div className="flex gap-4 items-center">
          {gitUrl && (
            <a
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:text-primary transition-colors"
            >
              Ver en GitHub →
            </a>
          )}
          {siteUrl && (
            <a
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:text-primary transition-colors"
            >
              Visitar sitio →
            </a>
          )}
        </div>
      </div>


      {/* Borde animado (subtle gradient ring) */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          background: "conic-gradient(from 180deg, #ff00cc22, #9e99ff22, #00ffff22, #ff00cc22)",
          mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "destination-out",
          padding: "1px",
        }}
      />
    </motion.div>
  );
};

export default ProjectCard;
