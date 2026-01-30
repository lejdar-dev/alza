import { Faker, base, cs_CZ, de, de_AT, en } from '@faker-js/faker';
import { generate } from '@lejdar/webdev';
import { Category, Product } from '../data/product';
import { formatPrice } from './format';

export default class Mock {
  faker: Faker;
  constructor(seed: number) {
    this.faker = new Faker({ seed, locale: [cs_CZ, base, de_AT, de, en] });

    this.makeUpProduct = this.makeUpProduct.bind(this);
    this.makeUpCategory = this.makeUpCategory.bind(this);
  }

  makeUpProduct(options?: {
    extraLongName?: boolean;
    extraLongSpecs?: boolean;
  }): Product {
    const price = this.faker.number.int({ min: 1500, max: 15000 });
    const { extraLongName = false, extraLongSpecs = false } = options ?? {};

    return {
      id: this.faker.number.int({ min: 1, max: 1000000 }),
      name: generate(
        extraLongName ? 3 : 1,
        this.faker.commerce.productName
      ).join(' '),
      imageUrl: this.faker.image.urlPicsumPhotos({ height: 500, width: 500 }),
      spec: generate(
        extraLongSpecs ? 3 : 1,
        this.faker.commerce.productDescription
      ).join(' '),
      price: {
        vat: `${formatPrice(price)}`,
        novat: `${formatPrice(price * 0.75)}`,
      },
      availability: `Skladem &gt; ${this.faker.number.int({ min: 0, max: 100 })} &nbsp;ks`,
      rating: this.faker.number.float({ min: 0, max: 5 }),
    };
  }
  makeUpCategory(): Category {
    return {
      id: this.faker.string.uuid(),
      label: this.faker.commerce.department(),
    };
  }

  async timeout(max: number) {
    await new Promise((resolve) => {
      setTimeout(
        () => {
          resolve(void 0);
        },
        this.faker.number.int({ min: 0, max })
      );
    });
  }

  decide(): boolean {
    return this.faker.datatype.boolean();
  }
}

export const mock = new Mock(2500);
