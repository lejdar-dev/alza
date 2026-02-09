import chain from '@/lib/util/chain';
import * as mock from '../mock/services.mock';
import * as production from '../production/services.production';

export const product = chain(production.product, mock.product);
