"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LogoCodeByPittana from "@components/ui/LogoCodeByPittana";
import useClickOutside from "@hooks/useClickOutside";
import { useActiveSection, DESKTOP_SECTION_IDS, MOBILE_SECTION_IDS } from "@hooks/useActiveSection";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { links, mobileLinks } from "@data/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const pathname = usePathname();

  const sectionIdsToObserve = useMemo(() =>
    isMobile ? MOBILE_SECTION_IDS : DESKTOP_SECTION_IDS,
    [isMobile]
  );

  const activeSectionId = useActiveSection(sectionIdsToObserve, pathname);

  const navRef = useRef<HTMLElement>(null);
  const closeMenu = () => setIsOpen(false);
  useClickOutside(navRef, closeMenu);

  useEffect(() => {
    setIsHeroVisible(activeSectionId === 'hero');
  }, [activeSectionId]);

  return (
    <nav
      ref={navRef}
      className="w-full bg-secondary/40 backdrop-blur-md sticky top-0 z-50 border-b border-accent/40 "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2 ">
        {/* === LOGO === */}
        <li className="list-none">
          <Link href="/#hero" className="relative">
            <LogoCodeByPittana
              isHeroVisible={isHeroVisible}
              neonColors={["#ff00cc", "#b26fff", "#00ffff"]}
              bodyGradient={["#d4a1ff", "#bca3f5", "#e0d2ff"]}
              fillGradient={["#1a1a1a", "#0c0c0c", "#000", "#000"]}
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
            />
          </Link>
        </li>

        {/* === NAV LINKS DESKTOP === */}
        <ul className="hidden md:flex gap-x-3 text-sm font-medium">
          {links.map(({ href, label, id }) => {
            const isActive = activeSectionId === id;
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
              // ... (Animaciones de motion.div sin cambios)

              className="absolute top-full left-0 right-0 bg-secondary border-t border-accent/40 p-6 flex flex-col items-center gap-4 md:hidden"
              style={{ transformOrigin: 'top center' }}
            >
              {
                mobileLinks.map(({ href, label, id }) => {
                  const isActive = activeSectionId === id;
                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={`w-full text-center py-3 rounded-xl transition-colors duration-200 text-text/60 hover:text-text hover:bg-primary/10 ${isActive && 'bg-primary/20 border-tertiary/50 border'}`}
                    >
                      {label}
                    </Link>
                  );
                })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
