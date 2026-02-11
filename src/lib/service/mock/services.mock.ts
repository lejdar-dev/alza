/**
 * This module describes mocked services for the application.
 * It is used to edge-test UI components without the need of a real backend.
 */

import Mock from '../../util/mock';
import { ProudctMockService } from './product.mock';

/** Use a seed to prevent hydration errors. */
const mock = new Mock(2200);

export const product = new ProudctMockService(mock);
