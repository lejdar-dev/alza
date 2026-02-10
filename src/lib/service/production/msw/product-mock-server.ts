/**
 *  Sets up a mock server for production, since the real API is blocked by Cloudflare.
 */

import { http, HttpResponse } from 'msw';
import products from './products.json' assert { type: 'json' };

export const handlers = [
  http.post('https://www.alza.cz/Services/RestService.svc/v2/products', () => {
    return HttpResponse.json(products);
  }),
];

if (typeof window === 'undefined') {
  const { setupServer } = await import('msw/node');
  const server = setupServer(...handlers);
  server.listen();
} else {
  const { setupWorker } = await import('msw/browser');
  const worker = setupWorker(...handlers);
  worker.start();
}
