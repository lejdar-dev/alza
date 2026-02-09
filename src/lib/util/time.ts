import { DependencyList, useEffect, useLayoutEffect } from 'react';

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
