import { mkdirSync, writeFileSync } from 'fs';
import { TurbopackOptions } from 'next/dist/server/config-shared';

const evnironment = process.env.INTERFACE ?? 'production';

if (!['mock', 'development', 'production'].includes(evnironment))
  throw `\n‼️  Interface for '${evnironment}' environment does not exist. Update the INTERFACE env to either mock, development or production.\n`;

mkdirSync('.next/types', { recursive: true });

writeFileSync(
  `.next/types/interface.d.ts`,
  `declare module '@services' {
  export * from '@/lib/service/${evnironment}/services.${evnironment}.ts'
}`
);

export default {
  '@services': `@/lib/service/${evnironment}/services.${evnironment}.ts`,
} as TurbopackOptions['resolveAlias'];
