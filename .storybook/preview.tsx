import type { Preview } from '@storybook/nextjs-vite';
import React, { Suspense } from 'react';
import Providers from '../src/lib/api/providers';
import '../src/ui/styles/global.css';

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
        <Suspense fallback={'Loading async component...'}>
          <Story />
        </Suspense>
      </Providers>
    ),
  ],
};

export default preview;
