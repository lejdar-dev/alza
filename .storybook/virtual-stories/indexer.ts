import ejs from 'ejs';
import { readFileSync } from 'fs';
import { basename, dirname, relative, resolve } from 'path';
import { UserConfig } from 'vite';

const storyTemplate = readFileSync(
  resolve(import.meta.dirname, 'story.ts.ejs')
).toString();

const storyName = (path: string) =>
  basename(path)
    .split('/')
    .at(-1)!
    .split('.')
    .at(0)!
    .replaceAll(/(-\w)|(^\w)/g, (match) => match.toUpperCase().slice(-1));

export const indexer = {
  test: /^[^.]+?\.tsx$/,

  createIndex: async (path: string) => {
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
} as const;

export const vite = {
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

        return ejs.render(storyTemplate, {
          module: path,
          story: storyName(path),
        });
      },
    },
  ],
} satisfies UserConfig;
