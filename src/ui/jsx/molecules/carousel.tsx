/* eslint-disable react/no-children-prop */
'use client';
import { useAfterFrame } from '@/lib/util/after-frame';
import { useCounter } from '@/lib/util/counter';
import { twUnit, useFitItems } from '@/lib/util/dimensions';
import { useInterval } from '@/lib/util/time';
import { cn, generate } from '@lejdar/webdev';
import { writeStory } from '@story';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, {
  Activity,
  CSSProperties,
  ReactNode,
  useRef,
  useState,
} from 'react';

type Props = {
  itemWidth: number;
  itemGap: number;
  children: ReactNode[];
};

const style = {
  container: cn('w-full flex justify-center'),

  items: cn(
    'max-w-full flex-1 overflow-hidden',
    // SS-Rendered responsive state
    'grid grid-flow-col',
    'grid-cols-[0_repeat(auto-fit,calc(var(--item)+var(--item-gap)))] auto-cols-[0]',
    // Flexible animated layout for hydrated state
    'data-[measured=true]:flex justify-center',
    '*:w-[calc(var(--item)_+_var(--item-gap))]',
    // Prevents flickering caused by initial trnasition
    'data-[animated=false]:*:transition-none'
  ),
  item: cn(
    'flex justify-center',
    'max-w-full overflow-hidden',
    'collapsible data-[collapsed=true]:collapsed'
  ),

  arrow: cn(`w-10 h-10 mt-8`, 'cursor-pointer select-none', 'active:scale-95'),
};

export default function Carousel({ itemGap, itemWidth, children }: Props) {
  const items = React.Children.toArray(children);
  const { index, next, previous } = useCounter();

  useInterval(7000, next);

  const container = useRef<HTMLDivElement>(null);
  const { itemCount, hasBeenMeasured } = useFitItems(
    container,
    twUnit(itemWidth + itemGap)
  );

  const variables = {
    '--item': `${itemWidth * 0.25}rem`,
    '--item-gap': `${itemGap * 0.25}rem`,
  } as CSSProperties;

  const itemStates =
    // Render every item + one on each edge, ready for the animation to by cycled
    generate(children.length + 2, (delta) => delta - 1).map((delta) => ({
      // Whether is collapsed
      collapsed:
        hasBeenMeasured && (delta < 0 || delta >= Math.max(itemCount, 1)),
      // !active = optimized during render
      active: !hasBeenMeasured || delta <= Math.max(itemCount, 1),
      children:
        items[(items.length + ((index % items.length) + delta)) % items.length],
      key: index + delta,
    }));

  // Prevents flickering caused by initial transition
  const [isAnimated, setIsAnimated] = useState(false);
  useAfterFrame(() => setIsAnimated(hasBeenMeasured), [hasBeenMeasured]);

  return (
    <div className={style.container} style={variables}>
      <ChevronLeft className={style.arrow} onClick={previous} />
      <div
        ref={container}
        className={style.items}
        data-measured={hasBeenMeasured}
        data-animated={isAnimated}
      >
        {itemStates.map(({ active, children, collapsed, key }) => (
          <Activity key={key} mode={active ? 'visible' : 'hidden'}>
            <div
              className={style.item}
              data-collapsed={collapsed}
              children={children}
            />
          </Activity>
        ))}
      </div>
      <ChevronRight className={style.arrow} onClick={next} />
    </div>
  );
}

export const story = writeStory({
  args: {
    itemCount: 10,
  },

  component: ({ itemCount }) => (
    <Carousel itemWidth={100} itemGap={10}>
      {generate(itemCount, (index) => (
        <div
          className="w-100 h-100 grid place-items-center bg-gray-300 rounded"
          key={index}
        >
          {index}
        </div>
      ))}
    </Carousel>
  ),
});
