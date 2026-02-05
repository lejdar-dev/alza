import { usePopularProducts } from '@/lib/service/product';
import Carousel from '../molecules/carousel';
import PopularProduct from '../molecules/popular-product';

export default function Popular() {
  const products = usePopularProducts();

  return (
    <Carousel
      renderItem={(index) => {
        return (
          <PopularProduct
            product={products.at(index % products.length)!}
            key={products.at(index % products.length)!.id}
          />
        );
      }}
      maxItemsVisible={Math.min(10, products.length)}
      itemWidth={60}
      itemGap={12}
    />
  );
}

export const story = () => <Popular />;
