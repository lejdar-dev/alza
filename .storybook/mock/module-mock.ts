import { resolve } from 'path';
import { UserConfig } from 'vite';

import * as plaiceholder from './modules/plaiceholder.mock.ts';

export default {
  plugins: [
    {
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url?.startsWith('/plaiceholder'))
            return plaiceholder.resolve(req, res);

          return next();
        });
      },
      name: 'module-mock',
      enforce: 'pre',
      resolveId(id: string, importer) {
        if (!importer?.includes('src/')) return null;

        if (/lib\/util\/plaiceholder/.test(id))
          return resolve(import.meta.dirname, './modules/plaiceholder.mock.ts');

        if (/lib\/api\/product.api/.test(id))
          return resolve(import.meta.dirname, './modules/product.mock.ts');

        return null;
      },
    },
  ],
} satisfies UserConfig;
