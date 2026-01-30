import {
  DependencyList,
  RefObject,
  useCallback,
  useLayoutEffect,
  useState,
} from 'react';

export function useResizeObserver<Element extends HTMLElement>(
  ref: RefObject<Element | null>,
  onUpdate: (element: Element) => void,
  deps: DependencyList = [onUpdate]
) {
  const callback = useCallback((element: Element) => {
    onUpdate(element);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useLayoutEffect(() => {
    const measure = () => {
      const element = ref.current!;
      callback(element);
    };

    const observer = new ResizeObserver(measure);
    observer.observe(ref.current!);

    return () => observer.disconnect();
  }, [ref, callback]);
}

export const rem = () => 16;
export const twUnit = (value: number) => (value / 4) * rem();

export const useFitItems = (
  container: RefObject<HTMLElement | null>,
  itemSize: number
) => {
  const [itemCount, setItemCount] = useState<null | number>(null);
  const hasBeenMeasured = itemCount !== null;

  useResizeObserver(container, ({ clientWidth }) =>
    setItemCount(Math.floor(clientWidth / itemSize))
  );

  return { itemCount, hasBeenMeasured } as
    | { hasBeenMeasured: true; itemCount: number }
    | { hasBeenMeasured: false; itemCount: null };
};
