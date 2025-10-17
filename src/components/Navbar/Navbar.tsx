"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LogoCodeByPittana from "@/src/components/ui/LogoCodeByPittana";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/projects", label: "Proyectos" },
    { href: "/about", label: "Sobre mí" },
    { href: "/contact", label: "Contacto" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-2 bg-secondary/40 backdrop-blur-md sticky top-0 z-50 border-b border-accent/40 max-w-6xl mx-auto">

      {/* === LOGO === */}
      <li className="list-none">
        <Link href="/" className="relative">
          <LogoCodeByPittana
            neonColors={["#ff00cc", "#b26fff", "#00ffff"]}
            bodyGradient={["#d4a1ff", "#bca3f5", "#e0d2ff"]}
            fillGradient={["#1a1a1a", "#0c0c0c", "#000", "#000"]}
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
          />
        </Link>
      </li>

      {/* === NAV LINKS DESKTOP === */}
      <ul className="hidden md:flex gap-x-8 text-sm font-medium">
        {links.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <li key={href} className="relative">
              <Link
                href={href}
                className={`relative px-5 py-3 transition-colors duration-200 ${isActive
                  ? "text-text"
                  : "text-text/40 hover:text-text"
                  }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="pill"
                    className="absolute inset-0 bg-primary/30 rounded-full -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
                {label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* === MOBILE MENU ICON === */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-text focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <CloseRoundedIcon sx={{ fontSize: 30 }} />
        ) : (
          <MenuRoundedIcon sx={{ fontSize: 30 }} />
        )}
      </button>

      {/* === MOBILE MENU OVERLAY === */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 bg-secondary/90 backdrop-blur-xl border-t border-accent/40 p-6 flex flex-col items-center gap-4 md:hidden"
          >
            {links.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`w-full text-center py-3 rounded-md transition-colors duration-200 ${isActive
                    ? "text-text bg-primary/20"
                    : "text-text/60 hover:text-text hover:bg-primary/10"
                    }`}
                >
                  {label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
