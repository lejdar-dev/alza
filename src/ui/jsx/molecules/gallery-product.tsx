import { sanitize } from '@/lib/util/sanitize';
import { Product } from '@data/product';
import { cn } from '@lejdar/webdev';
import PreloadedImage from '../atoms/preloaded-image';
import Rating from '../atoms/rating';
import { SkeletonBox, SkeletonLine } from '../atoms/skeleton';
import BuyMenu from './buy-menu';

const style = {
  container: cn(
    'mx-w-full w-full relative',
    'grid grid-rows-[auto_repeat(4,auto)_1fr] grid-cols-[1fr_auto]'
  ),
  image: cn(
    'relative w-[calc(100%_-_2rem)] ml-4 aspect-square ',
    'col-span-2 '
  ),
  rating: cn('text-lg', 'absolute', 'left-[-1rem]', 'bottom-2'),
  novat: cn('text-positive text-lg mt-2'),
  vat: cn('text-text-low text-sm'),
  menu: cn('row-span-2 mt-2'),
  availability: cn(
    'col-span-2 my-4',
    'text-sm text-center text-text-low font-semibold'
  ),
  name: cn('col-span-2', 'text-lg font-bold text-secondary mb-1 line-clamp-2'),
  specs: cn('col-span-2 h-min ', 'text-text-low text-justify line-clamp-5 '),
};

export default async function GalleryProduct({
  product,
}: {
  product: Product;
}) {
  'use cache';

  const { imageUrl, spec, name, rating, availability, price } = product;

  const sane = sanitize(availability);

  return (
    <div className={style.container}>
      <div className={style.image}>
        <PreloadedImage
          src={imageUrl}
          fill={true}
          className="object-contain"
          alt={'Product image'}
        />
        <Rating score={rating} className={style.rating} />
      </div>
      <span className={style.novat}>{price.novat}</span>
      <BuyMenu className={style.menu} />
      <p className={style.vat}>{price.vat}</p>
      <span
        className={style.availability}
        dangerouslySetInnerHTML={{ __html: sane }}
      />
      <span className={style.name}>{name}</span>

      <div className={style.specs}>{spec}</div>
    </div>
  );
}

export function GalleryProductSkeleton() {
  return (
    <div className={cn(style.container)}>
      <div className={cn(style.image)}>
        <SkeletonBox />
      </div>
      <SkeletonLine className={cn(style.novat, 'w-18 ')} />
      <SkeletonBox className={cn(style.menu, 'h-8 w-24')} />
      <SkeletonLine className={cn(style.vat, 'w-16')} />

      <SkeletonLine className={cn(style.availability, 'w-30 mx-auto')} />
      <SkeletonLine className={cn(style.name, 'bg-surface')} />

      <div className={cn(style.specs)}>
        <SkeletonLine />
        <SkeletonLine />
        <SkeletonLine />
        <SkeletonLine className="w-[90%]" />
      </div>
    </div>
  );
}

export const story = {
  args: {
    skeleton: false,
    extraLongName: false,
    extraLongSpecs: false,
  },
  component: async ({
    skeleton,
    extraLongName,
    extraLongSpecs,
  }: {
    skeleton: boolean;
    extraLongName: boolean;
    extraLongSpecs: boolean;
  }) => {
    if (skeleton) return <GalleryProductSkeleton />;

    const { mock } = await import('@/lib/util/mock');

    return (
      <div className={'w-60'}>
        <GalleryProduct
          product={mock.makeUpProduct({ extraLongName, extraLongSpecs })}
        />
      </div>
    );
  },
};
