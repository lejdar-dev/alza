import { fetchPopularProducts } from '@/lib/api/product.api';
import Carousel from '../molecules/carousel';
import PopularProduct, {
  PopularProductSkeleton,
} from '../molecules/popular-product';

export default async function Popular() {
  'use cache';
  const { ok, data: products, error } = await fetchPopularProducts();

  if (!ok) return 'Error occured.';

  return (
    <Carousel itemWidth={60} itemGap={8}>
      {products.map((product) => (
        <PopularProduct key={product.id} product={product} />
      ))}
    </Carousel>
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
      <PopularPritemCount itemCountoductSkeleton />
      <PopularProductSkeleton />
    </Carousel>
  );
}

export const story = () => <Popular />;
