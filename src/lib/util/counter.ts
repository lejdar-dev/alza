import { useCallback, useState } from 'react';

export function useCounter() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((index) => index + 1), []);
  const previous = useCallback(() => setIndex((index) => index - 1), []);

  return { index, next, previous } as const;
}
