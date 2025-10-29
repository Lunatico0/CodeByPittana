"use client";

import { FadeInSlideUpItem, StaggerContainer } from '@lib/animationPresets';
import { motion } from 'framer-motion';
import React from 'react';
import DualCTACard from '@ui/DualCTACard'
import { VALUE_OFFER_SECTION_DATA } from '@data/ValueOffer';
import CardWithIcon from '@/src/components/ui/CardWithIcon';


const ValueOfferSection = () => {
  const { pillars, ctas } = VALUE_OFFER_SECTION_DATA;

  return (
    <motion.section
      id="value"
      variants={StaggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="w-full mx-auto py-12 md:py-24 scroll-mt-28"
    >
      {/* Título Principal */}
      <motion.h2
        variants={FadeInSlideUpItem}
        className="text-4xl font-bold text-center mb-12 md:mb-16 text-text"
      >
        Mi Oferta de Valor
      </motion.h2>

      {/* === GRID 1: Pilares de Valor (3 columnas) === */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {pillars.map((pillar) => (
          <CardWithIcon
            key={pillar.id}
            paragraph={pillar.description}
            {...pillar}
            className='border border-tertiary/50 text-shadow-2xs text-shadow-tertiary/70'
          />
        ))}
      </div>

      {/* === GRID 2: CTA Dual (2 columnas) === */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <DualCTACard
          key={ctas[0].id}
          {...ctas[0]}
          isPrimary={false}
          className='hover:border-tertiary'
        />
        <DualCTACard
          key={ctas[1].id}
          {...ctas[1]}
          isPrimary={true}
          className='hover:border-tertiary'
        />
      </div>

    </motion.section>
  );
}

export default ValueOfferSection
