import { cacheTag, refresh, updateTag } from 'next/cache';
import { product } from '../service/brain';

/** Cached product categories API */
export async function fetchCategories() {
  'use cache';
  cacheTag('categories');

  return await product.fetchCategories();
}
/** Invalidate cached product categories and refresh the page */
export async function refreshCategories() {
  'use server';
  updateTag('categories');
  refresh();
}

/** Cached popular products API */
export async function fetchPopularProducts() {
  'use cache';
  cacheTag('popular-products');

  return await product.fetchPopularProducts();
}

/** Invalidate cached popular products and refresh the page */
export async function refreshPopularProducts() {
  'use server';
  updateTag('popular-products');
  refresh();
}

/** Cached products API */
export async function fetchProducts() {
  'use cache';
  cacheTag('products');

  return await product.fetchProducts();
}

/** Invalidate cached products and refresh the page */
export async function refreshProducts() {
  'use server';
  updateTag('products');
  refresh();
}
