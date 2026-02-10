import DOMPurify from 'isomorphic-dompurify';

/**
 * Sanitizes HTML text to prevent XSS attacks.
 * @param text - The HTML text to sanitize.
 * @returns The sanitized HTML text.
 */
export function sanitize(text: string): string {
  return DOMPurify.sanitize(text, {
    USE_PROFILES: {
      html: false,
      mathMl: false,
      svg: false,
      svgFilters: false,
    },
  });
}
