import { motion, type Variants } from "framer-motion";
import type { ProjectCardData } from "@/src/types/projects-ui";

interface ProjectCardProps extends ProjectCardData {
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, gitUrl, siteUrl, index = 0 }) => {

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: i * 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <motion.div
      layout
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        y: -8,
        borderColor: "var(--color-primary)",
        boxShadow: "0 0 15px rgba(158, 153, 255, 0.3)",
        transition: { duration: 0.25, ease: "easeOut", delay: 0 }
      }}
      className="group relative p-6 rounded-xl bg-secondary/50 border border-secondary/70 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(135deg,rgba(158,153,255,0.05),rgba(0,255,255,0.05))]" />

      {/* Contenido */}
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-primary mb-2"> {name} </h3>

        <p className="text-text/80 text-sm mb-4">
          {description || "Descripción no disponible."}
        </p>

        <div className="flex gap-4 items-center">
          <a href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent hover:text-primary transition-colors">
            Ver en GitHub →
          </a>
          {
            siteUrl && <a href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:text-primary transition-colors">
              Visitar sitio →
            </a>
          }
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
