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
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-src 'self' https://*.kidoban.ir http://*.kidoban.ir; frame-ancestors 'self' https://*.kidoban.ir http://*.kidoban.ir;",
          },
        ],
      },
    ];
  },
};

export default config;

