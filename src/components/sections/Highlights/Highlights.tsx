'use client'

import React from 'react';
import { HighlightsProps } from '@typings/highlight';
import { motion } from 'framer-motion';
import { FadeInSlideUpItem, StaggerContainer } from "@lib/animationPresets";
import CardWithIcon from '@ui/CardWithIcon';

const Highlights = ({ highlights }: HighlightsProps) => {

  return (
    <section id='highlights' className="w-full mx-auto p-6 rounded-2xl bg-secondary/30 shadow-2xl scroll-mt-24 md:scroll-mt-28">

      <motion.div
        variants={StaggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col"
      >
        <motion.h2
          variants={FadeInSlideUpItem}
          className='text-center pb-4 font-semibold py-2 text-base md:text-2xl text-balance'
        >
          Mi Proceso de Trabajo
        </motion.h2>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          {
            highlights.map((item, index) => {
              const counter = index + 1;
              return (
                <motion.div
                  key={item.title || index}
                  variants={FadeInSlideUpItem}
                >
                  <CardWithIcon {...item} index={counter} className='h-full' />
                </motion.div>
              )
            })
          }
        </div>

      </motion.div>
    </section>
  )
}

export default Highlights
