// Cache for RSC
const cache: Record<string, string> = {};

export const generatePlaceholder = async (src: string): Promise<string> => {
  if (src in cache) return cache[src];

  const res = await fetch(`/plaiceholder?src=${encodeURIComponent(src)}`);

  const { blurDataUrl } = await res.json();

  cache[src] = blurDataUrl;

  return blurDataUrl;
};
