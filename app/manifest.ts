import type { MetadataRoute } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/seo';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: 'مهد ایده',
    description: 'مهد کودک و پیش دبستانی ایده — شهرآرا، گیشا، تهران',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#f97316',
    lang: 'fa',
    dir: 'rtl',
    icons: [
      {
        src: '/images/landing/ideh/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/landing/ideh/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    scope: SITE_URL,
  };
}
