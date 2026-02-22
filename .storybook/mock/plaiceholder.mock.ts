import { resolve } from 'path';
import { UserConfig } from 'vite';
import { generatePlaceholder } from '../../src/lib/util/plaiceholder';

export default {
  plugins: [
    {
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (!req.url?.startsWith('/plaiceholder')) return next();
          const { searchParams } = new URL(req.url, 'http://localhost');

          const src = searchParams.get('src') as string;

          res.end(
            JSON.stringify({ blurDataUrl: await generatePlaceholder(src) })
          );
        });
      },
      name: 'plaiceholder-placeholder',
      enforce: 'pre',
      resolveId(id: string, importer) {
        if (!/lib\/util\/plaiceholder/.test(id) || !importer?.includes('src/'))
          return null;

        console.log(importer, id);

        return resolve(import.meta.dirname, './modules/plaiceholder.ts');
      },
    },
  ],
} satisfies UserConfig;
