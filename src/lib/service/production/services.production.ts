import './msw/product-mock-server';
import { ProductService } from './product.production';

export const product = new ProductService();
