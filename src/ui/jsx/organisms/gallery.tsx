import { fetchProducts } from '@/lib/api/product.api';
import { cn } from 'webdev';
import GalleryProduct, {
  GalleryProductSkeleton,
} from '../molecules/gallery-product';

const style = cn(
  'grid grid-cols-[repeat(auto-fit,15rem)] gap-12 justify-center max-w-full '
);

export default async function Gallery() {
  'use cache';
  const { ok, data: products, error } = await fetchProducts();

  if (!ok) return 'Error occured.';

  return (
    <div className={style}>
      {products.map((product) => (
        <GalleryProduct product={product} key={product.id} />
      ))}
    </div>
  );
}

export function GallerySkeleton() {
  return (
    <div className={style}>
      <GalleryProductSkeleton />
      <GalleryProductSkeleton />
      <GalleryProductSkeleton />
      <GalleryProductSkeleton />
      <GalleryProductSkeleton />
      <GalleryProductSkeleton />
      <GalleryProductSkeleton />
      <GalleryProductSkeleton />
      <GalleryProductSkeleton />
      <GalleryProductSkeleton />
      <GalleryProductSkeleton />
      <GalleryProductSkeleton />
      <GalleryProductSkeleton />
      <GalleryProductSkeleton />
      <GalleryProductSkeleton />
      <GalleryProductSkeleton />
      <GalleryProductSkeleton />
    </div>
  );
}

export const story = () => <Gallery />;
