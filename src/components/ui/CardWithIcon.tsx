"use client";

import React from "react";
import { motion } from "framer-motion";
import type { CardWithIconProps } from "@typings/cardWithIcon";

const CardWithIcon = ({
  Icon,
  title,
  paragraph,
  index,
  variant = "default",
  className = "",
}: CardWithIconProps) => {
  const baseStyles = `
    group relative overflow-hidden rounded-xl border transition-all
    bg-secondary/50 border-secondary/70
  `;

  const hoverStyles =
    variant === "about"
      ? ""
      : "hover:border-primary/80 hover:shadow-[0_0_15px_rgba(158,153,255,0.3)]";

  const variantStyles =
    variant === "compact"
      ? "p-4 text-sm"
      : variant === "about"
        ? "p-4 flex items-start gap-4 bg-secondary/30 border-secondary/60"
        : "p-6";

  return (
    <motion.div
      layout
      whileHover={variant === "about" ? {} : {
        y: -8,

      }}
      transition={{
        layout: { duration: 0.1, ease: "easeOut" },
        default: { duration: 0.1, ease: "easeOut" },
      }}
      className={`${baseStyles} ${hoverStyles} ${variantStyles} ${className}`}
    >
      {/* 🔹 Variante "about" → estructura más simple */}
      {variant === "about" ? (
        <>
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
            {Icon ? (
              <Icon className="text-lg" />
            ) : (
              <span className="font-semibold">{title[0]}</span>
            )}
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm md:text-base">{title}</h4>
            {paragraph && (
              <p className="text-text/70 text-sm leading-snug">{paragraph}</p>
            )}
          </div>
          <div className="absolute -right-10 -bottom-8 transition-transform duration-300 rotate-12">
            {Icon && <Icon className="text-accent/10" style={{ fontSize: 120 }} />}
          </div>
        </>
      ) : (
        <>
          {/* 🔸 Versión Default o Compact */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(135deg,rgba(158,153,255,0.05),rgba(0,255,255,0.05))]" />

          <div className="flex items-center gap-4 mb-3">
            <div className="p-3 rounded-full bg-primary/10 text-primary-light">
              {Icon && <Icon fontSize="medium" className="text-primary/80" />}
            </div>

            <h3
              className={`text-lg md:text-xl font-semibold text-text text-balance ${variant === "compact" ? "text-base" : ""
                }`}
            >
              {index !== undefined && index > 0 && (
                <span className="pr-2 opacity-70">{index}</span>
              )}
              {title}
            </h3>
          </div>

          {paragraph && (
            <p className="text-text/70 text-sm leading-relaxed text-balance">
              {paragraph}
            </p>
          )}

          <div className="absolute -right-10 -bottom-8 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125">
            {Icon && <Icon className="text-accent/10" style={{ fontSize: 120 }} />}
          </div>
        </>
      )}
    </motion.div>
  );
};

export default CardWithIcon;
