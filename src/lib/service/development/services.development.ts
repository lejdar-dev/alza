/**
 * This module combines production and mock services, giving precedence to production implementations.
 * It enables modular development of production services by seamlessly falling back to mocks for any features that haven't been implemented yet.
 */

import chain from '@/lib/util/chain';
import * as mock from '../mock/services.mock';
import * as production from '../production/services.production';

export const product = chain(production.product, mock.product);
