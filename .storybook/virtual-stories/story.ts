import { FunctionComponent } from 'react';
import type Mock from '../../src/lib/util/mock';

type GlobalContext = {
  mock: Mock;
};

type Story<Args> = {
  args: Args | (() => Promise<Args> | Args);
  component: FunctionComponent<Args & GlobalContext>;
};

export async function writeStory<Args>(story: Story<Args>) {
  const context = {
    mock: (await import('../../src/lib/util/mock')).mock,
  };

  const { args, component } = story;

  return {
    args,
    component: (args: Args) => component({ ...context, ...args }),
  };
}
