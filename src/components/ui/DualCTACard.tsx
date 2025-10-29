"use client";

import { motion } from 'framer-motion';
import { FadeInSlideUpItem } from "@lib/animationPresets";
import { DualCTACardProps } from "@typings/valueOffer";
import ButtonSecondary from "@ui/ButtonSecondary";

export default function DualCTACard({
  title,
  description,
  ctaText,
  ctaLink,
  isPrimary = false,
  className
}: DualCTACardProps) {

  const baseBorderClass = isPrimary ? 'border-primary/60' : 'border-accent/60';
  const hoverBorderClass = isPrimary ? 'hover:border-primary' : 'hover:border-accent';
  const cardClasses = `
        p-8 md:p-10 rounded-xl h-full flex flex-col justify-between
        bg-secondary/40 backdrop-blur-sm border-2
        transition-colors duration-300 ease-in-out transición aquí ${baseBorderClass} ${hoverBorderClass}
        `;
  return (
    <motion.div
      variants={FadeInSlideUpItem}
      layout
      className={`${cardClasses} ${className}`}
    >
      <div className='duration-300'>
        {/* Título del CTA */}
        <h3 className="text-xl md:text-2xl font-bold text-text mb-4">
          {title}
        </h3>

        {/* Descripción */}
        <p className="text-text/70 text-sm md:text-base leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Botón CTA - Utilizamos el ButtonSecondary para mantener la consistencia */}
      <ButtonSecondary
        as="link"
        href={ctaLink}
        className="mt-4 w-full md:w-auto text-center"

      >
        {ctaText}
      </ButtonSecondary>
    </motion.div>
  );
}
