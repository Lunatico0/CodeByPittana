import { FadeInSlideUpItem } from "@lib/animationPresets";
import { IntroProps } from '@typings/intro'
import { motion } from 'framer-motion';
import { useGlobalModal } from "@context/GlobalModalContext";
import ButtonPrimary from '@ui/ButtonPrimary';
import ButtonSecondary from '@ui/ButtonSecondary';
import { techIcons } from "@icons/techIcons";
import ReactMarkdown from "react-markdown";
import { markdownComponents } from "@lib/markdownComponents";
const Intro = ({
  title,
  subtitle,
  paragraph,
  ctaLabel,
  ctaHREF,
  secondaryCta,
  secondaryHREF
}: IntroProps) => {
  const { openModal } = useGlobalModal();
  const Icon = techIcons['diploma'];
  return (
    <motion.div
      variants={FadeInSlideUpItem}
      className="md:w-3/5 text-center md:text-left"
    >

      <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-t from-accent to-primary text-transparent bg-clip-text inline-block">
        {title}
      </h1>

      <div className="text-2xl md:text-3xl font-bold leading-tight mb-4 -mt-4">
        <ReactMarkdown components={markdownComponents}>{subtitle}</ReactMarkdown>
      </div>

      <div className="text-lg text-text/70 mb-8">
        <ReactMarkdown components={markdownComponents}>{paragraph}</ReactMarkdown>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <ButtonSecondary
          as="button"
          onClick={() => openModal("cv")}
          className="text-nowrap gap-2 !px-4"
        >
          {Icon}
          Descargar CV
        </ButtonSecondary>
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
