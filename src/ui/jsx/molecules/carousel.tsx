import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CSSProperties, useCallback, useState } from 'react';
import { cn, generate } from 'webdev';

type Props = {
  renderItem: (index: number) => React.ReactNode;
  maxItemsVisible: number;
  itemWidth: number;
  itemGap: number;
};

const style = {
  container: cn('relative max-w-full w-auto','flex justify-center'),
  items: cn(
    'max-w-full',
    'grid grid-flow-col',
    'grid-cols-[repeat(auto-fit,_calc(var(--item)_+_var(--item-gap)))] auto-cols-[0]',
    'justify-center'
  ),
  item: cn('w-full flex justify-center max-w-full overflow-hidden'),

  arrow: cn(`w-5 min-w-5`),
};

export default function Carousel(props: Props) {
  const { renderItem, maxItemsVisible, itemGap, itemWidth } = props;

  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((index) => index + 1), []);
  const previous = useCallback(() => setIndex((index) => index - 1), []);

  return (
    <div
      className={style.container}
      style={
        {
          gridAutoColumns: '0',
          '--item': `${itemWidth * 0.25}rem`,
          '--item-gap': `${itemGap * 0.25}rem`,
        } as CSSProperties
      }
    >
      <ArrowLeft className={style.arrow} onClick={previous} />

      <div className={style.items}>
        {generate(maxItemsVisible, (delta) => delta - 1).map((delta) => (
          <div className={style.item} key={index + delta}>
            {renderItem(index + delta)}
          </div>
        ))}
      </div>

      <ArrowRight className={style.arrow} onClick={next} />
    </div>
  );
}

export const story = () => (
  <Carousel
    itemWidth={20}
    itemGap={4}
    renderItem={(index: number) => (
      <div className="min-w-20 w-20 text-center h-20 bg-surface">
        Item n. {index}
      </div>
    )}
    maxItemsVisible={10}
  />
);
