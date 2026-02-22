import { resolve } from 'path';
import { AliasOptions, loadEnv, mergeConfig, UserConfig } from 'vite';
import moduleMock from './mock/module-mock.ts';
import * as virtualStories from './virtual-stories/indexer';

// Load INTERFACE env
const { INTERFACE } = loadEnv(
  'development',
  resolve(import.meta.dirname, '..'),
  ''
);
process.env.INTERFACE = INTERFACE;

export default mergeConfig(
  {
    define: {
      'process.env.STORYBOOK': 'true',
    },
    resolve: {
      alias: (await import('../tool/setup-interface.ts'))
        .default as AliasOptions,
    },
    envDir: '../',
  } satisfies UserConfig,
  mergeConfig(virtualStories.vite, moduleMock)
);
