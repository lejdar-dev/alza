import { mock } from '@/lib/mock/mock';
import { Product } from '@data/product';
import Image from 'next/image';
import { cn } from 'webdev';
import Rating from '../atoms/rating';

const style = {
  container: cn(
    'w-60 relative',
    'grid grid-rows-[repeat(3,auto)_1fr_auto] grid-cols-[1fr_auto]',
    'place-items-'
  ),
  image: cn('w-full', 'col-span-2 pb-2'),
  name: cn('col-span-2', 'text-lg font-bold text-secondary'),
  rating: cn('text-lg', 'col-span-2  my-1 mb-3'),
  novat: cn('text-positive text-lg mt-2'),
  specs: cn('col-span-2 h-min ', 'text-text-low text-justify line-clamp-5 '),

};

export default function PopularProduct({ product }: { product: Product }) {
  const { imageUrl, spec, name, rating, price } = product;

  return (
    <div className={style.container}>
      <Image
        className={style.image}
        src={imageUrl}
        width={200}
        height={200}
        alt={'Product image'}
      />
      <span className={style.name}>{name}</span>
      <Rating score={rating} className={style.rating} />

      <p className={style.specs}>{spec}</p>
      <span className={style.novat}>{price.novat}</span>
    </div>
  );
}

export const story = () => <PopularProduct product={mock.makeUpProduct()} />;
