import { useCallback, useSyncExternalStore } from 'react';

// Se suscribe a los cambios de la query (evento "change" de MediaQueryList).
export const subscribeMediaQuery = (query: string, onChange: () => void) => {
  const media = window.matchMedia(query);
  media.addEventListener('change', onChange);
  return () => media.removeEventListener('change', onChange);
};

export const getMediaQuerySnapshot = (query: string) => window.matchMedia(query).matches;

// En servidor no hay window: mismo default que el useState(false) anterior.
export const getMediaQueryServerSnapshot = () => false;

export const useMediaQuery = (query: string) => {
  const subscribe = useCallback(
    (onChange: () => void) => subscribeMediaQuery(query, onChange),
    [query]
  );

  return useSyncExternalStore(
    subscribe,
    () => getMediaQuerySnapshot(query),
    getMediaQueryServerSnapshot
  );
};
