import { fetchProducts, refreshProducts } from '@/lib/api/product.api';
import { cn } from '@lejdar/webdev';
import { Repeat } from 'lucide-react';
import ErrorBanner from '../atoms/error-banner';
import GalleryProduct, {
  GalleryProductSkeleton,
} from '../molecules/gallery-product';

const style = cn(
  'grid grid-cols-[repeat(auto-fit,15rem)] gap-12 justify-center max-w-full',

  'max-sm:flex max-sm:flex-col max-sm:gap-24 max-sm:*:max-w-90 max-sm:items-center max-sm:px-4'
);

export default async function Gallery() {
  'use cache';

  const { ok, data: products } = await fetchProducts();

  if (ok)
    return (
      <div className={style}>
        {products.map((product) => (
          <GalleryProduct product={product} key={product.id} />
        ))}
      </div>
    );

  return (
    <ErrorBanner
      loadingUI={<GallerySkeleton />}
      // eslint-disable-next-line react-hooks/purity
      key={Math.random().toString()}
      retry={refreshProducts}
      message={'Při komunikaci se serverem došlo k chybě.'}
      retryMessage={
        <>
          <Repeat size={16} />
          Načíst znovu
        </>
      }
    />
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
