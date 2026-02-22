import { mergeConfig } from 'vite';
import * as virtualStories from './virtual-stories/indexer';

export default mergeConfig(
  {
    define: {
      'process.env.STORYBOOK': 'true',
    },
  },
  virtualStories.vite
);
