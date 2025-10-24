"use client";

import { SkillCategoryCardProps } from "@typings/skills";
import TechPill from "@ui/TechPill";
import { motion } from "framer-motion";

const SkillCategoryCard = ({ title, pills, isSoftSkill }: SkillCategoryCardProps) => {
  return (
    <>
      <motion.div
        className={`p-6 rounded-xl border ${isSoftSkill ? 'bg-primary/10 border-accent/30 h-full' : 'bg-secondary/20 border-primary/20 h-full'}`}
      >
        <h4 className="text-xl font-bold mb-4 text-tertiary">{title}</h4>

        <div className="flex flex-wrap gap-2">
          {pills.map((name) => (
            <TechPill key={name} name={name} />
          ))}
        </div>
      </motion.div >
    </>
  )
}

export default SkillCategoryCard
