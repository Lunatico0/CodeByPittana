import { motion } from "framer-motion";

interface ProjectCardProps {
  name: string;
  description: string;
  gitUrl?: string;
  siteUrl?: string;
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, gitUrl, siteUrl, index = 0 }) => {


  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -8, // equivale a translateY(-8px)
        borderColor: "var(--color-primary)",
        boxShadow: "0 0 15px rgba(158, 153, 255, 0.3)"
      }}
      transition={{
        layout: { duration: 0.4, ease: "easeOut" },
        default: { duration: 0.3, ease: "easeOut" }
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
