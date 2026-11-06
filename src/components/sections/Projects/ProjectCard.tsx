import { motion } from "framer-motion";
import type { ProjectCardProps } from "@typings/projectCard";
import Image from "next/image.js";
import Link from "next/link.js";
import TechPill from "@ui/TechPill";
import { cardDescription, getProjectLinks, projectSlug } from "@lib/projectList";
import PrivateRepoBadge from "./PrivateRepoBadge";

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  name,
  description,
  gitUrl,
  siteUrl,
  shortDescription,
  image,
  isPrivate,
  className = "",
  languages,
  technologies
}) => {
  const { repoUrl, showPrivateBadge, site } = getProjectLinks({ gitUrl, siteUrl, isPrivate });
  // Los repos públicos sin captura usan el logo; los privados sin imagen van solo con texto.
  const cardImage = image ?? (isPrivate ? null : '/favicon.svg');
  const slug = projectSlug({ id });

  return (
    <motion.div
      whileHover={{
        y: -8,
        borderColor: "#9e99ff",
        boxShadow: "0 0 15px rgba(158, 153, 255, 0.3)",
        transition: { duration: 0.2, ease: "easeOut", delay: 0 },
      }}
      className={`group relative p-3 md:p-6 rounded-xl bg-secondary/50 border border-cardBorder overflow-hidden ${className}`}
    >

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(135deg,rgba(158,153,255,0.05),rgba(0,255,255,0.05))]" />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col justify-between items-start w-full h-full">

        <Link href={`/projects/${slug}`} className="w-full">
          {cardImage && (
            <div
              className="relative w-full aspect-[3/2] rounded-lg overflow-hidden"
            >
              <Image
                src={cardImage}
                alt={name}
                fill
                className={`${cardImage === '/favicon.svg' ? 'object-contain group-hover:-translate-y-0.5' : 'object-cover'} object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105`}
                sizes="(max-width: 768px) 100vw, 50vw"
                data-view-transition-name={`project-image-${slug}`}
              />
            </div>
          )}

          <h3
            className="text-2xl font-bold bg-gradient-to-t from-accent to-primary text-transparent bg-clip-text inline-block my-4"
          >
            {name}
          </h3>

          <p className="text-text/80 text-sm">
            {cardDescription({ shortDescription, description })}
          </p>
        </Link>

        {/* Pills de tecnologias */}
        <div className="flex flex-wrap gap-2 my-2">
          {Object.entries(languages ?? {}).map(([tech, value], _, arr) => {
            const total = arr.reduce((acc, [, v]) => acc + v, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return <TechPill key={tech} name={tech} value={percentage} />;
          })}
          {/* Los privados no tienen lenguajes de GitHub: se muestran sus tecnologías. */}
          {isPrivate && technologies?.map((tech) => (
            <TechPill key={tech} name={tech} />
          ))}
        </div>

        {/* Botones links */}
        <div className="flex gap-4 items-center">
          {showPrivateBadge && <PrivateRepoBadge />}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:text-primary transition-colors"
            >
              Ver en GitHub →
            </a>
          )}
          {site && (
            <a
              href={site.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:text-primary transition-colors"
            >
              {site.label}
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
