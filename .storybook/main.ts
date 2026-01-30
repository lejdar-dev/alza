import type { StorybookConfig } from '@storybook/nextjs-vite';
import { basename, dirname, relative } from 'path';
import { mergeConfig } from 'vite';

const storyName = (path: string) =>
  basename(path)
    .split('/')
    .at(-1)!
    .split('.')
    .at(0)!
    .replaceAll(/(-\w)|(^\w)/g, (match) => match.toUpperCase().slice(-1));

const combosIndexer: Indexer = {
  test: /^[^.]+?\.tsx$/,
  createIndex: async (path, {}) => {
    const relative_path = relative(process.cwd(), path);
    const dir = dirname(relative('src/ui/jsx', path));

    const name = storyName(path);
    const title = `UI/${dir}/${name}`;

    return [
      {
        type: 'story',
        title,
        importPath: `virtual:${relative_path}`,
        exportName: name,
      },
    ];
  },
};
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
    combosIndexer,
  ],
  async viteFinal(config) {
    return mergeConfig(config, {
      define: {
        'process.env.STORYBOOK': 'true',
      },
      plugins: [
        {
          name: 'virtual-stories',
          resolveId(module: string) {
            if (!/^virtual:/.test(module)) return null;

            return '\0' + module;
          },

          async load(id: string) {
            if (!id.startsWith('\0virtual:')) return null;

            const [, path] = id.split(':');

            const name = storyName(path);

            return `
              import * as tested from  '/${path}';

              const story = tested?.story ?? (() => '🏗️ Story is not implemented.'); 

              const { component, args } = typeof story === 'function' ? {
                component: story,
                args: {}
              } : story
                                  

              export default {
                  component
              }
                  
              export const ${name} = {
                args
              };                        

            `;
          },
        },
      ],
    });
  },
};
export default config;
