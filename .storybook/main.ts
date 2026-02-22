import type { StorybookConfig } from '@storybook/nextjs-vite';
import { mergeConfig } from 'vite';
import { indexer } from './virtual-stories/indexer.ts';
import vite from './vite.config.ts';

const config: StorybookConfig = {
  features: {
    experimentalRSC: true,
  },
  stories: [
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/ui/jsx/**/*.tsx',
  ],
  addons: [],
  framework: '@storybook/nextjs-vite',
  experimental_indexers: async (existingIndexers) => [
    ...(existingIndexers ?? []),
    indexer,
  ],
  async viteFinal(config) {
    return mergeConfig(config, vite);
  },
};
export default config;
