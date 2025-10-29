import { useState, useEffect, useRef } from 'react';

export const DESKTOP_SECTION_IDS: string[] = [
  'hero',
  'projects',
  'tech',
  'about',
  'experience',
  'value',
  'contact',
];

export const MOBILE_SECTION_IDS: string[] = [
  'hero',
  'highlights',
  'projects',
  'tech',
  'about',
  'experience',
  'value',
  'contact',
];

export const useActiveSection = (sectionIds: string[], pathname: string) => {
  const [activeId, setActiveId] = useState('hero');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const rootMargin = '-40% 0px -40% 0px';

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const isRootPage = pathname === '/';
    if (!isRootPage) {
      setActiveId('hero');
      return;
    }

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
        rootMargin: rootMargin,
        threshold: 0.0,
      }
    );

    observerRef.current = observer;

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [sectionIds, pathname]);

  return activeId;
};
