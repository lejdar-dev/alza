import Reason, { Network, Server, Validation } from '@/lib/data/reason';
import bindAll from '@/lib/util/bind-all';
import { Result } from '@lejdar/webdev';
import z from 'zod';
import { Product } from '../../data/product';
import { type Repository } from '../brain';

export class ProductService implements Repository<'product'> {
  constructor() {
    bindAll(this);
  }

  async fetchCategories() {
    return Result.ok([
      { label: 'Macbooky', id: 'mackbooks' },
      { label: 'Herní', id: 'gaming' },
      { label: 'Kancelářské', id: 'office' },
      { label: 'Profesionální', id: 'professional' },
      { label: 'Stylové', id: 'stylish' },
      { label: 'Zakladní', id: 'basic' },
      { label: 'Dotykové', id: 'touch' },
      { label: 'Na splátky', id: 'installments' },
      { label: 'VR Ready', id: 'vr' },
      { label: 'IRIS Graphics', id: 'iris' },
      { label: 'Brašny, batohy', id: 'bags' },
      { label: 'Příslušenství', id: 'accessories' },
    ]);
  }

  async fetchProducts(): Promise<
    Result<Product[], Network | Validation | Server>
  > {
    const result = await fetch(
      'https://www.alza.cz/Services/RestService.svc/v2/products',
      {
        method: 'POST',
        body: JSON.stringify(ProductService.FILTER_PARAMETERS),
      }
    )
      .then((res) => res.json())
      .then((res) => Result.ok(res))
      .catch(() => Result.fail(Reason.network));

    if (!result.ok) return result;

    return this.parseProducts(result.data);
  }

  async fetchPopularProducts() {
    return this.fetchProducts();
  }

  private parseProducts(
    json: unknown[]
  ): Result<Product[], Validation | Server<any>> {
    const { success: failed, data } =
      ProductService.FAILED_RESPONSE_SCHEMA.safeParse(json);

    if (failed) return Result.fail(Reason.server(data.msg ?? 'null'));

    const parsed = ProductService.PRODUCT_RESPONSE_SCHEMA.safeParse(json);

    if (!parsed.success) return Result.fail(Reason.validation);

    return Result.ok(
      parsed.data.data.map(
        (product) =>
          ({
            id: product.id,
            name: product.name,
            imageUrl: product.img,
            spec: product.spec,
            price: { vat: product.priceWithoutVat, novat: product.price },
            availability: product.avail,
            rating: product.rating,
          }) satisfies Product
      )
    );
  }

  private static FILTER_PARAMETERS = {
    filterParameters: {
      id: 18855843,
      isInStockOnly: false,
      newsOnly: false,
      wearType: 0,
      orderBy: 0,
      page: 1,
      params: [],
      producers: [],
      sendPrices: true,
      type: 'action',
      typeId: '',
      branchId: '',
    },
  };

  private static FAILED_RESPONSE_SCHEMA = z.object({
    err: z.number().positive(),
    msg: z.string().nullable(),
  });

  private static PRODUCT_RESPONSE_SCHEMA = z.object({
    data: z.array(
      z.object({
        id: z.number(),
        code: z.string(),
        img: z.string(),
        name: z.string(),
        spec: z.string(),
        price: z.string(),
        priceWithoutVat: z.string(),
        avail: z.string(),
        rating: z.number(),
      })
    ),
  });
}
