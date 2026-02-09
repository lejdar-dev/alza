import { generate } from 'webdev';
import { type Repository } from '../brain';
import { Category, Product } from '../../data/product';
import Mock from '../../util/mock';
import bindAll from '@/lib/util/bind-all';

export class ProudctMockService implements Repository<'product'> {
  constructor(private mock: Mock) {
    bindAll(this);
  }

  async fetchProducts(): Promise<Product[]> {
    return generate(
      this.mock.faker.number.int({ min: 5, max: 50 }),
      this.mock.makeUpProduct
    );
  }
  async fetchCategories(): Promise<Category[]> {
    return generate(
      this.mock.faker.number.int({ min: 5, max: 15 }),
      this.mock.makeUpCategory
    );
  }

  async fetchPopularProducts(): Promise<Product[]> {
    return generate(
      this.mock.faker.number.int({ min: 5, max: 50 }),
      this.mock.makeUpProduct
    );
  }
}
