import { cacheTag, refresh, updateTag } from 'next/cache';
import { product } from '../service/brain';

export async function fetchCategories() {
  'use cache';
  cacheTag('categories');

  return await product.fetchCategories();
}

export async function refreshCategories() {
  'use server';
  updateTag('categories');
  refresh();
}

export async function fetchPopularProducts() {
  'use cache';
  cacheTag('popular-products');

  return await product.fetchPopularProducts();
}

export async function refreshPopularProducts() {
  'use server';
  updateTag('popular-products');
  refresh();
}

export async function fetchProducts() {
  'use cache';
  cacheTag('products');

  return await product.fetchProducts();
}

export async function refreshProducts() {
  'use server';
  updateTag('products');
  refresh();
}
