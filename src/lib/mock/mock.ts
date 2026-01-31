import { Faker, cs_CZ } from '@faker-js/faker';
import { Product } from '../data/product';

export default class Mock {
  faker: Faker;
  constructor(seed: number) {
    this.faker = new Faker({ seed, locale: [cs_CZ] });
  }

  makeUpProduct(): Product {
    return {
      id: this.faker.number.int({ min: 1, max: 1000 }),
      code: this.faker.string.uuid(),
      name: this.faker.commerce.productName(),
      imageUrl: this.faker.image.urlPicsumPhotos(),
      spec: this.faker.commerce.productDescription(),
      price: {
        vat: this.faker.commerce.price(),
        novat: this.faker.commerce.price(),
      },
      availability: {
        text: `&gt; ${this.faker.number.int({ min: 0, max: 100 })} &nbsp;ks`,
      },
      rating: this.faker.number.float({ min: 0, max: 5 }),
    };
  }
}

export const mock = new Mock(2500);
