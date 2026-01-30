export function register() {
  // Polyfill ResizeObserver for older browsers
  if (typeof window !== 'undefined') polyfill();
}

function polyfill() {
  if (!window.ResizeObserver)
    import('resize-observer-polyfill').then(({ default: Polyfill }) => {
      window.ResizeObserver = Polyfill;
    });
}
