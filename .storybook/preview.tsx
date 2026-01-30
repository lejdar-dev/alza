import React from 'react';
import type { Preview } from '@storybook/nextjs-vite';
import '../src/ui/styles/global.css';
import Providers from '../src/lib/api/providers';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <Providers>
        <Story />
      </Providers>
    ),
  ],
};

export default preview;
