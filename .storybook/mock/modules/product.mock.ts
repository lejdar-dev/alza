import { memoize } from 'micro-memoize';
import * as original from '../../../src/lib/api/product.api';

export const fetchCategories = memoize(original.fetchCategories);

export const fetchProducts = memoize(original.fetchProducts);
export const fetchPopularProducts = memoize(original.fetchPopularProducts);

export {
  refreshCategories,
  refreshPopularProducts,
  refreshProducts,
} from '../../../src/lib/api/product.api';
