import { useEffect } from 'react';

export function useAfterFrame(
  callback: FrameRequestCallback,
  deps: any[] = []
) {
  return useEffect(() => {
    requestAnimationFrame(callback);
  }, deps);
}
