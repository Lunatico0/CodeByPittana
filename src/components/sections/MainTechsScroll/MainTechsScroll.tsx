'use client';

import React from 'react';
import TechPill from '@/src/components/ui/TechPill';

const MAIN_TECHNOLOGIES = [
  'Reactjs', 'Nextjs', 'Nodejs', 'Express', 'JavaScript',
  'TypeScript', 'MongoDB', 'TailwindCSS', 'Astro', 'NestJS',
];

const SCROLL_ITEMS = [...MAIN_TECHNOLOGIES, ...MAIN_TECHNOLOGIES];

const MainTechsScroll = () => {
  return (
    <section>

      <div className="relative flex whitespace-nowrap overflow-hidden">
        <div className="flex my-2 animate-infinite-scroll items-center gap-6 md:gap-8">
          {SCROLL_ITEMS.map((tech, index) => (
            // Usamos una clave única y el TechPill
            <TechPill key={`${tech}-${index}`} name={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainTechsScroll;
