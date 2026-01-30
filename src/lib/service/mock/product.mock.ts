import { Network, Server, Validation } from '@/lib/data/reason';
import bindAll from '@/lib/util/bind-all';
import { Result, generate } from '@lejdar/webdev';
import { Category, Product } from '../../data/product';
import Mock from '../../util/mock';
import { type Repository } from '../brain';

export class ProudctMockService implements Repository<'product'> {
  constructor(private mock: Mock) {
    bindAll(this);
  }

  async fetchProducts(): Promise<
    Result<Product[], Network | Validation | Server>
  > {
    const products = generate(
      this.mock.faker.number.int({ min: 5, max: 50 }),
      () => this.mock.makeUpProduct()
    );

    return Result.ok(products);
  }
  async fetchCategories(): Promise<Result<Category[], Network | Validation>> {
    const categories = generate(
      this.mock.faker.number.int({ min: 5, max: 15 }),
      this.mock.makeUpCategory
    );

    return Result.ok(categories);
  }

  async fetchPopularProducts(): Promise<
    Result<Product[], Network | Validation | Server>
  > {
    const popularProducts = generate(
      this.mock.faker.number.int({ min: 5, max: 50 }),
      () => this.mock.makeUpProduct()
    );

    return Result.ok(popularProducts);
  }
}
