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
  const mutationRef = useRef<MutationObserver | null>(null);
  const pollingRef = useRef<number | null>(null);
  const seenElementsRef = useRef<Record<string, boolean>>({});

  // Config sensible
  const rootMargin = '-40% 0px -40% 0px';
  const MAX_WAIT_MS = 2500; // no esperar eternamente
  const POLL_INTERVAL = 150;

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
    if (mutationRef.current) {
      mutationRef.current.disconnect();
      mutationRef.current = null;
    }
    if (pollingRef.current) {
      window.clearInterval(pollingRef.current);
      pollingRef.current = null;
    }
    seenElementsRef.current = {};

    const isRootPage = pathname === '/';
    if (!isRootPage) {
      setActiveId('hero');
      return;
    }

    // IntersectionObserver principal
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin,
        threshold: 0.0,
      }
    );
    observerRef.current = io;

    let attachedAny = false;

    const tryAttach = () => {
      sectionIds.forEach((id) => {
        if (seenElementsRef.current[id]) return;
        const el = document.getElementById(id);
        if (el) {
          io.observe(el);
          seenElementsRef.current[id] = true;
          attachedAny = true;
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            setActiveId(id);
          }
        }
      });
    };

    tryAttach();

    if (!attachedAny) {
      pollingRef.current = window.setInterval(() => {
        tryAttach();
      }, POLL_INTERVAL);

      const mo = new MutationObserver(() => {
        tryAttach();
        const allFound = sectionIds.some((id) => !!document.getElementById(id));
        if (allFound) {
          if (pollingRef.current) {
            window.clearInterval(pollingRef.current);
            pollingRef.current = null;
          }
          if (mutationRef.current) {
            mutationRef.current.disconnect();
            mutationRef.current = null;
          }
        }
      });

      mutationRef.current = mo;
      mo.observe(document.body, { childList: true, subtree: true });
    }

    const timeout = window.setTimeout(() => {
      if (pollingRef.current) {
        window.clearInterval(pollingRef.current);
        pollingRef.current = null;
      }
      if (mutationRef.current) {
        mutationRef.current.disconnect();
        mutationRef.current = null;
      }
    }, MAX_WAIT_MS);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      if (mutationRef.current) {
        mutationRef.current.disconnect();
        mutationRef.current = null;
      }
      if (pollingRef.current) {
        window.clearInterval(pollingRef.current);
        pollingRef.current = null;
      }
      window.clearTimeout(timeout);
    };
  }, [sectionIds, pathname]);

  return activeId;
};
