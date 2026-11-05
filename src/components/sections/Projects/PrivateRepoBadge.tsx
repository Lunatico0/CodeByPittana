import { FiLock } from "react-icons/fi";

/** Reemplaza al link "Ver en GitHub" en los proyectos con repositorio privado. */
export default function PrivateRepoBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl border border-text/20 text-text/70 text-sm ${className}`}
    >
      <FiLock aria-hidden="true" className="shrink-0" />
      Repositorio privado
    </span>
  );
}
