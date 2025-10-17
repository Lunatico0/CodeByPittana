import { highlights } from '@/src/data/highlights';
import HighlightCard from '@/src/components/sections/Highlights/HighlightCard';
import React from 'react';

const Highlights = () => {

  return (
    <section className="w-full mx-auto p-6 rounded-2xl bg-secondary/30 shadow-2xl">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {
          highlights.map((item, index) => {
            return <HighlightCard key={index} index={index} {...item} />
          })
        }
      </div>
    </section>
  )
}

export default Highlights
