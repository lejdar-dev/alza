/**
 * This file runs on the client side to instrument the browser environment.
 */

if (!('ResizeObserver' in globalThis))
  import('resize-observer-polyfill').then(({ default: Polyfill }) => {
    window.ResizeObserver = Polyfill;
  });
