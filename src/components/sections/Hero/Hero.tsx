"use client";

import Intro from "@sections/Hero/Intro";
import { motion } from 'framer-motion'
import ProfileImage from "@sections/Hero/ProfileImage";
import type { HeroProps } from "@typings/hero";
import { StaggerContainer } from "@lib/animationPresets";

export default function Hero({ ...props }: HeroProps) {
  return (
    <motion.section
      id="hero"
      className="flex flex-col md:flex-row items-center gap-6 scroll-mt-32"
      variants={StaggerContainer}
      initial="hidden"
      animate="visible"
    >
      <ProfileImage />
      <Intro {...props} />
    </motion.section >
  );
}
