'use server';

/**
 * Generates a placeholder, lowresolution image for a given image URL.
 * Only runs on the server side. (uses @sharp library for image processing)
 */
export async function generatePlaceholder(src: string): Promise<string> {
  'use cache';

  const { getPlaiceholder } = await import('plaiceholder');

  return fetch(src)
    .then((res) => res.arrayBuffer())
    .then(Buffer.from)
    .then(getPlaiceholder)
    .then(({ base64 }) => base64);
}
