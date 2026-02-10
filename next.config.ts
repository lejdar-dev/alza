import type { NextConfig } from 'next';
import aliases from './tool/setup-interface';

const nextConfig: NextConfig = {
  cacheComponents: true,

  turbopack: {
    resolveAlias: aliases,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'image.alza.cz',
      },
    ],
  },
};

export default nextConfig;
