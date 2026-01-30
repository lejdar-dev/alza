import DOMPurify from 'isomorphic-dompurify';


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
