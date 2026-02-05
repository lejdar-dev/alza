import { mock } from '@/lib/mock/mock';
import { Product } from '@data/product';
import Image from 'next/image';
import { cn } from 'webdev';
import Rating from '../atoms/rating';
import { sanitize } from '@/lib/util/sanitize';
import BuyMenu from '../atoms/buy-menu';

const style = {
  container: cn(
    'w-60 h-124 relative',
    'grid grid-rows-[repeat(5,auto)_1fr] grid-cols-[1fr_auto]'
  ),
  image: cn('w-full', 'col-span-2 pb-2'),
  rating: cn('text-lg', 'absolute', 'left-2', 'top-54'),
  novat: cn('text-positive text-lg'),
  vat: cn('text-text-low text-sm'),
  menu: cn('row-span-2'),
  availability: cn(
    'col-span-2 py-4',
    'text-sm text-center text-text-low font-semibold'
  ),
  name: cn('col-span-2', 'text-lg font-bold text-secondary pb-1'),
  specs: cn('col-span-2 h-min ', 'text-text-low text-justify line-clamp-5 '),
};

export default function GalleryProduct({ product }: { product: Product }) {
  const { imageUrl, spec, name, rating, availability, price } = product;

  const sane = sanitize(availability.text);
  return (
    <div className={style.container}>
      <Image
        className={style.image}
        src={imageUrl}
        width={200}
        height={200}
        alt={'Product image'}
      />
      <Rating score={rating} className={style.rating} />
      <span className={style.novat}>{price.novat}</span>
      <BuyMenu className={style.menu} />
      <span className={style.vat}>{price.vat}</span>
      <span
        className={style.availability}
        dangerouslySetInnerHTML={{ __html: sane }}
      />
      <span className={style.name}>{name}</span>

      <div className={style.specs}>{spec}</div>
    </div>
  );
}

export const story = () => <GalleryProduct product={mock.makeUpProduct()} />;
