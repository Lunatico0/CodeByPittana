'use client'

import { highlights } from '@/src/data/highlights';
import HighlightCard from '@/src/components/sections/Highlights/HighlightCard';
import React from 'react';
import { motion } from 'framer-motion';
import { FadeInSlideUpItem, StaggerContainer } from "@/src/lib/animationPresets";

const Highlights = () => {

  return (
    <section className="w-full mx-auto p-6 rounded-2xl bg-secondary/30 shadow-2xl">
      <motion.div
        variants={StaggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 gap-8 md:grid-cols-3"
      >
        {
          highlights.map((item, index) => {
            return (
              <motion.div
                key={item.title || index}
                variants={FadeInSlideUpItem}
              >
                <HighlightCard {...item} />
              </motion.div>
            )
          })
        }
      </motion.div>
    </section>
  )
}

export default Highlights
