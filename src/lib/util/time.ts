import { DependencyList, useEffect } from 'react';

/**
 * This hook sets up an interval that calls a callback function at a specified delay.
 * @param delay - The delay in milliseconds between each call to the callback.
 * @param callback - The function to call at the specified delay.
 * @param deps - The dependencies to watch for changes. (default: [callback])
 */
export function useInterval(
  delay: number,
  callback: () => void,
  deps: DependencyList = [callback]
) {
  useEffect(() => {
    const interval = setInterval(callback, delay);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay, ...deps]);
}
