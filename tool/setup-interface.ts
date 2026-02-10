/**
 * This tool sets up the application's service interface.
 * It generates an `interface.d.ts` file in the `.next/types` directory.
 * This file declares the `@services` module and points to the appropriate implementation based on the selected environment.
 * It also sets up Turbopack aliases to ensure `@services` resolves to the correct service module (`mock`, `development`, or `production`).
 *
 * Environment can be switched by setting the `INTERFACE` environment variable to `mock`, `development`, or `production`.
 * Restarting the development server is required to apply the changes.
 * Default environment is `production`.
 */

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
