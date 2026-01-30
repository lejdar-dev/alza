// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import compat from 'eslint-plugin-compat';
import { defineConfig, globalIgnores } from 'eslint/config';
// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format

import importPlugin from 'eslint-plugin-import';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  // Typescript

  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-namespace': 'off',
    },
  },

  // Legacy browser compatibility
  {
    ...compat.configs['flat/recommended'],
    settings: {
      polyfills: ['fetch', 'URL', 'ResizeObserver', 'Promise'],
    },
  },

  {
    plugins: { import: importPlugin },
    rules: {
      'import/no-restricted-paths': [
        'error',
        {
          zones: [
            {
              target: ['./src/ui/**/*', './src/lib/!(api|service)/**/*'],
              from: './src/lib/service/**/*',
              message:
                'Architecture Violation: Modules should not be imported directly from /lib/services. Use /lib/api instead.',
            },
          ],
        },
      ],
    },
  },

  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  ...storybook.configs['flat/recommended'],
]);

export default eslintConfig;
