import Mock from '../../util/mock';
import { ProudctMockService } from './product.mock';

const mock = new Mock(2200);

export const product = new ProudctMockService(mock);
