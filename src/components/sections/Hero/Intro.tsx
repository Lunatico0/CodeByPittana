import ButtonPrimary from '@ui/ButtonPrimary';
import ButtonSecondary from '@ui/ButtonSecondary';
import React from 'react'
import { IntroProps } from '@typings/intro'
import { motion } from 'framer-motion';
import { FadeInSlideUpItem } from "@lib/animationPresets";

const Intro = ({
  title,
  subtitle,
  ctaLabel,
  ctaHREF,
  secondaryCta,
  secondaryHREF
}: IntroProps) => {
  return (
    <motion.div
      variants={FadeInSlideUpItem}
      className="md:w-3/5 text-center md:text-left"
    >

      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 bg-gradient-to-t from-accent to-primary text-transparent bg-clip-text inline-block">
        {title}
      </h1>

      <p className="text-lg text-text/70 mb-8">{subtitle}</p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <ButtonSecondary as="link" href={secondaryHREF}>
          {secondaryCta}
        </ButtonSecondary>
        <ButtonPrimary as="link" href={ctaHREF}>
          {ctaLabel}
        </ButtonPrimary>
      </div>
    </motion.div>
  )
}

export default Intro
