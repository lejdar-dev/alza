import { spawnSync } from 'child_process';
import { existsSync, writeFileSync } from 'fs';

const config_file = './tsconfig.gen.json';

if (existsSync(config_file)) process.exit(0);

const branches = ['dev', 'main', 'preview'];

const branch = spawnSync('git', ['rev-parse', '--abbrev-ref', 'HEAD'])
  .stdout.toString()
  .trim();

if (!branches.includes(branch))
  throw new Error(`Branch ${branch} is not a valid branch`);

const environment = {
  dev: 'mock',
  preview: 'production',
  main: 'production',
}[branch];

const tsconfig = {
  compilerOptions: {
    paths: {
      '@/*': ['./src/*'],
      '@data/*': ['./src/lib/data/*'],
      '@services': [
        `./src/lib/service/${environment}/services.${environment}.ts`,
      ],
    },
  },
};

writeFileSync(config_file, JSON.stringify(tsconfig, null, 2));
