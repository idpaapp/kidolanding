import type { NextConfig } from 'next';

const config: NextConfig = {
  output: 'standalone',
  reactCompiler: true,
  experimental: {
    viewTransition: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default config;

