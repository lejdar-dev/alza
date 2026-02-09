import { product } from '../service/brain';

export function fetchCategories() {
  return product.fetchCategories();
}

export function fetchPopularProducts() {
  return product.fetchPopularProducts();
}

export function fetchProducts() {
  return product.fetchProducts();
}
