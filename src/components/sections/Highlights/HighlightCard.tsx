"use client";

import React from 'react'
import { motion } from 'framer-motion';
import { HighlightItem } from '@typings/highlight';


const HighlightCard = ({ Icon, title, paragraph }: HighlightItem) => {
  return (
    <motion.div
      layout
      whileHover={{
        y: -8,
        borderColor: "var(--color-primary)",
        boxShadow: "0 0 15px rgba(158, 153, 255, 0.3)",
      }}
      transition={{
        layout: { duration: 0.4, ease: "easeOut" },
        default: { duration: 0.2, ease: "easeOut" }
      }}
      className="group relative p-6 rounded-xl bg-secondary/50 border border-secondary/70 overflow-hidden min-h-full"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(135deg,rgba(158,153,255,0.05),rgba(0,255,255,0.05))]" />

      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-full bg-primary/10 text-primary-light">
          <Icon fontSize='medium' className='text-primary/80' />
        </div>
        <h3 className="text-xl font-semibold text-white text-balance">{title}</h3>
      </div>
      <p className="text-text/70 text-sm text-balance">
        {paragraph}
      </p>
      <div className='absolute -right-10 -bottom-8 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125'>
        <Icon sx={{ fontSize: 120 }} className='text-accent/10' />
      </div>

    </motion.div>
  )
}

export default HighlightCard
