import type { RefObject } from 'react';

export type ClickOutsideHandler = (event: Event) => void;

export type UseClickOutside = (
  ref: RefObject<HTMLElement | null>,
  handler: ClickOutsideHandler
) => void;
