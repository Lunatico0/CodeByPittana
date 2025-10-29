"use client";

import { motion } from "framer-motion";
import { StaggerContainer, FadeInSlideUpItem } from "@lib/animationPresets";
import { techAndSoftSkills } from '@data/techAndSoftSkills';
import SkillCategoryCard from './SkillCategoryCard';

export default function MainTechs() {
  return (
    <section id='tech' className="w-full mx-auto scroll-mt-24 md:scroll-mt-28">
      <motion.div
        variants={StaggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}

        className="flex flex-col"
      >
        <motion.h3
          variants={FadeInSlideUpItem}
          className="text-center pb-8 font-bold text-3xl"
        >
          Tecnologías y Habilidades
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techAndSoftSkills.map((stack, index) => (
            <motion.div
              key={index}
              variants={FadeInSlideUpItem}
              className={stack.title === "Habilidades Interpersonales" ? "md:col-span-2" : "md:col-span-1"}
            >
              <SkillCategoryCard
                title={stack.title}
                pills={stack.pills}
                isSoftSkill={stack.title === "Habilidades Interpersonales"}
              />
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
