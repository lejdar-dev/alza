if (typeof window !== 'undefined') {
  if (!window.ResizeObserver)
    import('resize-observer-polyfill').then(({ default: Polyfill }) => {
      window.ResizeObserver = Polyfill;
    });
}
