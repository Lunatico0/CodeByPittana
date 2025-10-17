import Link from 'next/link'
import React from 'react'

type IntroProps = {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHREF: string;
  secondaryCta: string;
  secondaryHREF: string;
};

const Intro = ({
  title,
  subtitle,
  ctaLabel,
  ctaHREF,
  secondaryCta,
  secondaryHREF
}: IntroProps) => {
  return (
    <div className="md:w-3/5 text-center md:text-left">

      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 bg-gradient-to-t from-accent to-primary text-transparent bg-clip-text inline-block">
        {title}
      </h1>

      <p className="text-lg text-text/70 mb-8">{subtitle}</p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <Link
          href={ctaHREF}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-bgDark font-bold shadow-lg shadow-primary/30 hover:opacity-90 transition-opacity"
        >
          {ctaLabel}
        </Link>
        <Link
          href={secondaryHREF}
          className="px-6 py-3 rounded-xl bg-secondary border border-primary text-primary font-bold hover:bg-primary/10 transition-colors"
        >
          {secondaryCta}
        </Link>
      </div>
    </div>
  )
}

export default Intro
