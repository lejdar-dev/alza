/**
 * This file declares the common app interface.
 */

import { Result } from '@lejdar/webdev';
import { Category, Product } from '../data/product';
import { Network, Server, Validation } from '../data/reason';

export interface Brain {
  product: {
    fetchCategories(): Promise<Result<Category[], Network | Validation>>;
    fetchProducts(): Promise<Result<Product[], Network | Validation | Server>>;
    fetchPopularProducts(): Promise<
      Result<Product[], Network | Validation | Server>
    >;
  };
}
