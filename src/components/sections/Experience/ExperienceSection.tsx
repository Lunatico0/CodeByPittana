"use client";

import type { ExperienceProps } from "@typings/experience";
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import TimeLineCard from "@ui/TimeLineCard";
import { motion } from "framer-motion";
import { FadeInSlideUpItem, StaggerContainer } from "@lib/animationPresets";

export default function ExperienceSection({ work, education }: ExperienceProps) {
  return (
    <motion.section
      id="experience"
      variants={StaggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="w-full flex flex-col pt-24 gap-12 md:flex-row md:gap-16 scroll-mt-24 md:scroll-mt-28"
    >

      <motion.div variants={FadeInSlideUpItem} className="flex-1">

        <div className="flex items-center gap-2 mb-6 pt-6">
          <WorkRoundedIcon className="text-primary w-5 h-5" />
          <h2 className="text-2xl md:text-3xl font-bold text-text">Experiencia Laboral</h2>
        </div>

        <div className="relative pl-6 space-y-8">
          {work.map((job, i) => (
            <TimeLineCard key={i} data={job} index={i} />
          ))}
        </div>
      </motion.div>

      <motion.div variants={FadeInSlideUpItem} className="flex-1">

        <div className="flex items-center gap-2 mb-6 md:pt-6">
          <SchoolRoundedIcon className="text-primary w-5 h-5" />
          <h2 className="text-2xl md:text-3xl font-bold text-text">Educación</h2>
        </div>

        <div className="relative pl-6 space-y-8">
          {education.map((edu, i) => (
            <TimeLineCard key={i} data={edu} index={i} />
          ))}
        </div>
      </motion.div>

    </motion.section>
  );
}
