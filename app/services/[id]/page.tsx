import { notFound } from 'next/navigation';
import { getKindergartenData } from '@/lib/kindergarten-data';
import { ServiceDetailClient, type ServiceDetailData } from '@/components/landing/ServiceDetailClient';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  buildPageMetadata,
  buildBreadcrumbSchema,
  buildServiceSchema,
  getServiceById,
  getAllServiceIds,
  DEFAULT_KEYWORDS,
  SITE_NAME,
} from '@/lib/seo';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return getAllServiceIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) {
    return { title: 'خدمت پیدا نشد' };
  }

  const title = service.type === 'extra' ? service.name : service.title;

  return buildPageMetadata({
    title: `${title} | ${SITE_NAME}`,
    description: `${service.description} — مهد کودک و پیش دبستانی ایده در شهرآرا، گیشا، تهران.`,
    path: `/services/${id}`,
    keywords: [...DEFAULT_KEYWORDS, title, `${title} مهد ایده`],
    image: service.gallery[0] || '/res/photo_1.jpg',
    type: 'article',
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { id } = await params;
  const service = getServiceById(id);
  const kindergartenData = getKindergartenData();

  if (!service || !kindergartenData) {
    notFound();
  }

  const title = service.type === 'extra' ? service.name : service.title;

  const jsonLd = [
    buildBreadcrumbSchema([
      { name: SITE_NAME, path: '/' },
      { name: title, path: `/services/${id}` },
    ]),
    buildServiceSchema({ id: service.id, title, description: service.description }, kindergartenData),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <ServiceDetailClient
        service={{
          id: service.id,
          title,
          description: service.description,
          longDescription: service.longDescription,
          icon: service.icon as ServiceDetailData['icon'],
          iconColor: 'iconColor' in service ? service.iconColor : undefined,
          gradient: 'gradient' in service ? service.gradient : undefined,
          gallery: service.gallery,
          type: service.type,
        }}
        kindergartenData={kindergartenData}
      />
    </>
  );
}
