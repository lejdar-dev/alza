'use client';
import { twUnit, useFitItems } from '@/lib/util/dimensions';
import { useInterval } from '@/lib/util/time';
import { cn, generate } from '@lejdar/webdev';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, {
  CSSProperties,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from 'react';

type Props = {
  itemWidth: number;
  itemGap: number;
  children: ReactNode[];
};

const style = {
  container: cn(' w-full flex justify-center'),

  items: cn(
    'max-w-full flex-1',
    'grid grid-flow-col',
    'grid-cols-[0_repeat(auto-fit,calc(var(--item)+var(--item-gap)))] auto-cols-[0]',
    'justify-center',
    'data-[measured=true]:flex',
    'data-[measured=true]:*:transition-all data-[measured=true]:*:duration-300',
    'overflow-hidden'
  ),
  item: cn(
    'flex justify-center',
    'w-[calc(var(--item)_+_var(--item-gap))]',
    'max-w-full overflow-hidden',
    'data-[collapsed=true]:w-0',
    'data-[collapsed=true]:scale-0'
  ),

  arrow: cn(`w-10 h-10 mt-8`, 'cursor-pointer select-none', 'active:scale-95'),
};

export default function Carousel(props: Props) {
  const { itemGap, itemWidth, children } = props;

  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((index) => index + 1), []);
  const previous = useCallback(() => setIndex((index) => index - 1), []);

  useInterval(7000, next);

  const items = React.Children.toArray(children);

  const container = useRef<HTMLDivElement>(null);

  const { itemCount, hasBeenMeasured } = useFitItems(
    container,
    twUnit(itemWidth + itemGap)
  );

  const variables = {
    '--item': `${itemWidth * 0.25}rem`,
    '--item-gap': `${itemGap * 0.25}rem`,
  } as CSSProperties;

  return (
    <div className={style.container} style={variables}>
      <ChevronLeft className={style.arrow} onClick={previous} />
      <div
        className={style.items}
        ref={container}
        data-measured={hasBeenMeasured}
      >
        {generate(children.length + 2, (delta) => delta - 1).map((delta) => (
          <div
            className={cn(style.item, 'group/image')}
            data-blurred={!hasBeenMeasured}
            key={`${'measuring:'.repeat(+!hasBeenMeasured)}:${index + delta}`}
            data-collapsed={
              hasBeenMeasured && (delta < 0 || delta >= Math.max(itemCount, 1))
            }
          >
            {items[(items.length + (index + delta)) % items.length]}
          </div>
        ))}
      </div>
      <ChevronRight className={style.arrow} onClick={next} />
    </div>
  );
}
