// Tests de la lógica de useMediaQuery (subscribe y snapshots de useSyncExternalStore).
// Correr con: node --test src/hooks/useMediaQuery.test.mjs  (o npm test)
// Node 24 importa los .ts directo (type stripping). Sin DOM: se mockea window.matchMedia.
import { test, afterEach } from "node:test";
import assert from "node:assert/strict";

import {
  subscribeMediaQuery,
  getMediaQuerySnapshot,
  getMediaQueryServerSnapshot,
} from "./useMediaQuery.ts";

const originalWindow = globalThis.window;

afterEach(() => {
  globalThis.window = originalWindow;
});

// Mock mínimo de matchMedia: una MediaQueryList por query, con listeners de "change".
function mockWindow(initial = {}) {
  const lists = new Map();
  const windowListeners = new Map();
  const getList = (query) => {
    if (!lists.has(query)) {
      const listeners = new Set();
      lists.set(query, {
        media: query,
        matches: Boolean(initial[query]),
        listeners,
        addEventListener: (type, fn) => type === "change" && listeners.add(fn),
        removeEventListener: (type, fn) => type === "change" && listeners.delete(fn),
      });
    }
    return lists.get(query);
  };
  globalThis.window = {
    matchMedia: (query) => getList(query),
    addEventListener: (type, fn) => {
      if (!windowListeners.has(type)) windowListeners.set(type, new Set());
      windowListeners.get(type).add(fn);
    },
    removeEventListener: (type, fn) => windowListeners.get(type)?.delete(fn),
  };
  return {
    // Simula que el navegador cambia el resultado de la query.
    change(query, matches) {
      const list = getList(query);
      list.matches = matches;
      list.listeners.forEach((fn) => fn({ matches, media: query }));
    },
    listenerCount: (query) => getList(query).listeners.size,
  };
}

const QUERY = "(max-width: 768px)";

test("getMediaQuerySnapshot devuelve el matches actual de la query", () => {
  const win = mockWindow({ [QUERY]: true });
  assert.equal(getMediaQuerySnapshot(QUERY), true);
  win.change(QUERY, false);
  assert.equal(getMediaQuerySnapshot(QUERY), false);
});

test("getMediaQueryServerSnapshot devuelve false, el mismo default de SSR que antes", () => {
  assert.equal(getMediaQueryServerSnapshot(), false);
});

test("subscribeMediaQuery avisa cuando cambia la query y deja de avisar al desuscribir", () => {
  const win = mockWindow({ [QUERY]: false });
  let calls = 0;
  const unsubscribe = subscribeMediaQuery(QUERY, () => {
    calls += 1;
  });

  win.change(QUERY, true);
  assert.equal(calls, 1);
  assert.equal(getMediaQuerySnapshot(QUERY), true);

  unsubscribe();
  assert.equal(win.listenerCount(QUERY), 0);
  win.change(QUERY, false);
  assert.equal(calls, 1);
});
