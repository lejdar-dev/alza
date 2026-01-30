import { Get, Result, type Paths } from '@lejdar/webdev';
import { Product, type Category } from '../data/product';
import { Network, Server, Validation } from '../data/reason';

import(`@services`) satisfies Promise<Brain>;
export * from '@services';

export interface Brain {
  product: {
    fetchCategories(): Promise<Result<Category[], Network | Validation>>;
    fetchProducts(): Promise<Result<Product[], Network | Validation | Server>>;
    fetchPopularProducts(): Promise<
      Result<Product[], Network | Validation | Server>
    >;
  };
}

export type Repository<Path extends Paths<Brain>> = Get<Brain, Path>;
