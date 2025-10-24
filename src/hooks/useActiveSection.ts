import { useState, useEffect } from 'react';

const SECTION_IDS: string[] = [
  'hero',
  'projects',
  'about',
  'experience',
  'contact',
]
export const useActiveSection = () => {
  const [activeId, setActiveId] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-70px 0px -50% 0px',
        threshold: 0.0,
      }
    );

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return activeId;
};
