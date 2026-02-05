import { cn } from 'webdev';
import GalleryProduct from '../molecules/gallery-product';
import { useProducts } from '@/lib/service/product';

const style = cn('grid grid-cols-[repeat(auto-fit,15rem)] gap-12 justify-center max-w-full ');



export default function Gallery() {
  const products = useProducts();

  return (
    <div className={style}>
      {products.map((product) => (
        <GalleryProduct product={product} key={product.id} />
      ))}
    </div>
  );
}

export const story = () => <Gallery />;
