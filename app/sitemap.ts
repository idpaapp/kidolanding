import type { MetadataRoute } from 'next';
import { SITE_URL, getAllServiceIds } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = getAllServiceIds().map((id) => ({
    url: `${SITE_URL}/services/${id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages];
}
