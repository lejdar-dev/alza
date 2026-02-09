if (!('ResizeObserver' in globalThis))
  import('resize-observer-polyfill').then(({ default: Polyfill }) => {
    window.ResizeObserver = Polyfill;
  });
