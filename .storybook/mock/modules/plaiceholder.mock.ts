// Cache for RSC

import { memoize } from 'micro-memoize';

export const generatePlaceholder = memoize(
  async (src: string): Promise<string> => {
    const res = await fetch(
      `http://localhost:6006/plaiceholder?src=${encodeURIComponent(src)}`
    );

    const { blurDataUrl } = await res.json();

    return blurDataUrl;
  },
  { transformKey: (src: string) => ({ src }) }
);

export async function resolve(req: any, res: any) {
  const { searchParams } = new URL(req.url, 'http://localhost');

  const src = searchParams.get('src') as string;

  const { generatePlaceholder } =
    await import('../../../src/lib/util/plaiceholder');

  const data = { blurDataUrl: await generatePlaceholder(src) };

  res.end(JSON.stringify(data));
}
