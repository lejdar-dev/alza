import {
  fetchPopularProducts,
  refreshPopularProducts,
} from '@/lib/api/product.api';
import { Repeat } from 'lucide-react';
import ErrorBanner from '../atoms/error-banner';
import Carousel from '../molecules/carousel';
import PopularProduct, {
  PopularProductSkeleton,
} from '../molecules/popular-product';

export default async function Popular() {
  'use cache';

  const { ok, data: products } = await fetchPopularProducts();

  if (ok)
    return (
      <Carousel itemWidth={60} itemGap={8}>
        {products.map((product) => (
          <PopularProduct key={product.id} product={product} />
        ))}
      </Carousel>
    );

  return (
    <ErrorBanner
      loadingUI={<PopularSkeleton />}
      // eslint-disable-next-line react-hooks/purity
      key={Math.random().toString()}
      retry={refreshPopularProducts}
      message={'Při komunikaci se serverem došlo k chybě.'}
      retryMessage={
        <>
          <Repeat size={16} />
          Načíst znovu
        </>
      }
      className="h-132"
    />
  );
}

export function PopularSkeleton() {
  return (
    <Carousel itemWidth={60} itemGap={8}>
      <PopularProductSkeleton />
      <PopularProductSkeleton />
      <PopularProductSkeleton />
      <PopularProductSkeleton />
      <PopularProductSkeleton />
      <PopularProductSkeleton />
      <PopularProductSkeleton />
      <PopularProductSkeleton />
      <PopularProductSkeleton />
      <PopularProductSkeleton />
    </Carousel>
  );
}

export const story = () => <Popular />;
