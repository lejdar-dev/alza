import { mock } from '@/lib/util/mock';
import { Product } from '@data/product';
import { cn } from '@lejdar/webdev';
import PreloadedImage from '../atoms/preloaded-image';
import Rating from '../atoms/rating';
import { SkeletonBox, SkeletonLine } from '../atoms/skeleton';
import PreloadedImage from './preloaded-image';

const style = {
  container: cn(
    'w-60 h-132 relative',
    'grid grid-rows-[auto_auto_auto_auto_1fr] grid-cols-[1fr_auto] '
  ),
  image: cn(
    'relative max-w-[calc(100%_-_2rem)] m-4 aspect-square  ',
    'col-span-2 '
  ),

  name: cn('col-span-2', 'text-lg font-bold text-secondary line-clamp-2'),
  rating: cn('text-lg', 'col-span-2  my-1 mb-3'),
  novat: cn('text-positive text-lg mt-2'),
  specs: cn('col-span-2 h-min ', 'text-text-low text-justify line-clamp-5 '),
};

export default async function PopularProduct({
  product,
}: {
  product: Product;
}) {
  'use cache';
  const { imageUrl, spec, name, rating, price } = product;

  return (
    <div className={style.container}>
      <div className={style.image}>
        <PreloadedImage
          src={imageUrl}
          blurDataURL={''}
          fill={true}
          className="object-contain"
          alt={'Product image'}
        />
      </div>
      <p className={style.name}>{name}</p>
      <Rating score={rating} className={style.rating} />

      <p className={style.specs}>{spec}</p>
      <span className={style.novat}>{price.novat}</span>
    </div>
  );
}

export function PopularProductSkeleton() {
  return (
    <div className={style.container}>
      <div className={style.image}>
        <SkeletonBox />
      </div>
      <SkeletonLine className={style.name} />
      <SkeletonLine className={cn(style.rating, 'w-[43.125%]')} />
      <div className={style.specs}>
        <SkeletonLine />
        <SkeletonLine />
        <SkeletonLine />
        <SkeletonLine className="w-[90%]" />
      </div>
      <SkeletonLine className={cn(style.novat, 'w-[40%]')} />
    </div>
  );
}

export const story = writeStory({
  args: {
    skeleton: false,
    extraLongSpecs: false,
    extraLongName: false,
  },
  component({ mock, skeleton, ...mockProps }) {
    if (skeleton) return <PopularProductSkeleton />;

    const product = mock.makeUpProduct(mockProps);

    return (
      <Suspense fallback={<PopularProductSkeleton />}>
        <PopularProduct product={product} />
      </Suspense>
    );
  },
});
