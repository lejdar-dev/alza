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

/**
 * This hook calculates the number of items that fit in a container based on the item size.
 * It uses the useResizeObserver hook to measure the container size and updates the item count accordingly.
 *
 * @returns An object containing the item count and a boolean indicating if the items have been measured.
 */
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
