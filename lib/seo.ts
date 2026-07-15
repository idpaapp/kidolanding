import type { Metadata } from 'next';
import type { KindergartenLanding } from './kindergarten-data';
import servicesDataRaw from './services-data.json';

export const SITE_URL = 'https://idehkids.ir';

export const SITE_NAME = 'مهد کودک و پیش دبستانی ایده';

export const DEFAULT_DESCRIPTION =
  'مهد کودک و پیش دبستانی ایده در شهرآرا (گیشا) تهران — مهدکودک و پیش‌دبستانی معتبر با مربیان مجرب، فضای آموزشی مدرن، کلاس‌های تخصصی و برنامه‌های آموزشی نوین برای کودکان ۳ ماه تا ۶ سال.';

export const DEFAULT_KEYWORDS = [
  'مهد ایده',
  'مهدکودک ایده',
  'مهد کودک ایده',
  'پیش دبستانی ایده',
  'مهدکودک شهرآرا',
  'مهد کودک شهرآرا',
  'پیش دبستانی شهرآرا',
  'مهدکودک گیشا',
  'مهد کودک گیشا',
  'پیش دبستانی گیشا',
  'مهدکودک تهران',
  'پیش دبستانی تهران',
  'کودکستان ایده',
  'idehkids',
  'ideh kindergarten',
];

export const GEO = {
  latitude: 35.731,
  longitude: 51.376,
  city: 'تهران',
  area: 'شهرآرا',
  neighborhood: 'گیشا',
  region: 'تهران',
  country: 'IR',
};

const servicesData = servicesDataRaw as {
  specialServices: {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    icon: string;
    iconColor: string;
    gallery: string[];
  }[];
  supplementaryClasses: {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    icon: string;
    iconColor: string;
    gallery: string[];
  }[];
  extraClasses: {
    id: string;
    name: string;
    description: string;
    longDescription: string;
    icon: string;
    gradient: string;
    gallery: string[];
  }[];
};

export type ServiceRecord =
  | (typeof servicesData.specialServices)[number] & { type: 'service' }
  | (typeof servicesData.supplementaryClasses)[number] & { type: 'class' }
  | (typeof servicesData.extraClasses)[number] & { type: 'extra'; title: string };

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function toPersianDigits(value: string): string {
  return value.replace(/\d/g, (digit) => '۰۱۲۳۴۵۶۷۸۹'[Number(digit)]);
}

export function buildWhatsAppUrl(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  const international = digits.startsWith('0') ? `98${digits.slice(1)}` : digits;
  return `https://wa.me/${international}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = DEFAULT_KEYWORDS,
  image = '/images/landing/ideh/logo.png',
  type = 'website',
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: 'website' | 'article';
}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'fa_IR',
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function getAllServiceIds(): string[] {
  return [
    ...servicesData.specialServices.map((s) => s.id),
    ...servicesData.supplementaryClasses.map((s) => s.id),
    ...servicesData.extraClasses.map((s) => s.id),
  ];
}

export function getServiceById(id: string): ServiceRecord | null {
  const special = servicesData.specialServices.find((s) => s.id === id);
  if (special) return { ...special, type: 'service' };

  const supplementary = servicesData.supplementaryClasses.find((s) => s.id === id);
  if (supplementary) return { ...supplementary, type: 'class' };

  const extra = servicesData.extraClasses.find((s) => s.id === id);
  if (extra) return { ...extra, title: extra.name, type: 'extra' };

  return null;
}

function parseWorkingHours(data: KindergartenLanding) {
  return {
    dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    opens: '08:00',
    closes: '14:00',
    description: `${data.workingDays} | ${data.workingHours} | ${data.extendedHours}`,
  };
}

export function buildPreschoolSchema(data: KindergartenLanding) {
  const hours = parseWorkingHours(data);

  return {
    '@context': 'https://schema.org',
    '@type': ['Preschool', 'ChildCare', 'LocalBusiness'],
    '@id': `${SITE_URL}/#preschool`,
    name: data.name,
    alternateName: ['مهد ایده', 'مهدکودک ایده', 'پیش دبستانی ایده', 'idehkids'],
    description: DEFAULT_DESCRIPTION,
    url: absoluteUrl('/'),
    logo: absoluteUrl('/images/landing/ideh/logo.png'),
    image: absoluteUrl('/res/photo_1.jpg'),
    telephone: data.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: data.address,
      addressLocality: GEO.area,
      addressRegion: GEO.region,
      addressCountry: 'IR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    hasMap: 'https://neshan.org/maps/places/d52cf882007312d123e59d0f034213f0',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: hours.dayOfWeek,
        opens: hours.opens,
        closes: hours.closes,
      },
    ],
    sameAs: [data.socialLinks.instagram].filter(Boolean),
    priceRange: '$$',
    areaServed: {
      '@type': 'City',
      name: GEO.city,
    },
    knowsAbout: [
      'مهدکودک',
      'پیش دبستانی',
      'آموزش کودک',
      'مهد کودک شهرآرا',
      'پیش دبستانی گیشا',
    ],
  };
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: ['مهد ایده', 'idehkids.ir'],
    url: SITE_URL,
    inLanguage: 'fa-IR',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function buildOrganizationSchema(data: KindergartenLanding) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: data.name,
    url: SITE_URL,
    logo: absoluteUrl('/images/landing/ideh/logo.png'),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: data.phone,
      contactType: 'customer service',
      areaServed: 'IR',
      availableLanguage: ['Persian', 'fa'],
    },
    sameAs: [data.socialLinks.instagram].filter(Boolean),
  };
}

export function buildBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'مهد کودک ایده کجاست؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'مهد کودک و پیش دبستانی ایده در شهرآرا، محله گیشا، خیابان ۱۵ پلاک ۴۲ واقع شده است.',
        },
      },
      {
        '@type': 'Question',
        name: 'ساعات کاری مهد ایده چیست؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'شنبه تا چهارشنبه از ساعت ۸ صبح تا ۲ بعدازظهر. امکان تمدید تا ساعت ۴ بعدازظهر نیز وجود دارد.',
        },
      },
      {
        '@type': 'Question',
        name: 'مهد ایده برای چه سنینی مناسب است؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'مهد کودک و پیش دبستانی ایده پذیرای کودکان از ۳ ماه تا ۶ سال در گروه‌های شیرخوار، نوپا، کودکستان و پیش‌دبستانی است.',
        },
      },
      {
        '@type': 'Question',
        name: 'شماره تماس مهد کودک ایده چیست؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'برای ثبت‌نام و مشاوره می‌توانید با شماره ۰۲۱-۸۸۴۸۴۷۹۷ تماس بگیرید.',
        },
      },
    ],
  };
}

export function buildReviewSchema(data: KindergartenLanding) {
  if (!data.testimonials.length) return null;

  const ratings = data.testimonials.map((t) => t.rating);
  const avg = ratings.reduce((a, b) => a + b, 0) / ratings.length;

  return {
    '@context': 'https://schema.org',
    '@type': 'Preschool',
    name: data.name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: avg.toFixed(1),
      reviewCount: data.testimonials.length,
      bestRating: '5',
      worstRating: '1',
    },
    review: data.testimonials.map((t) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: t.parentName },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: t.rating,
        bestRating: '5',
      },
      reviewBody: t.text,
    })),
  };
}

export function buildServiceSchema(
  service: { title: string; description: string; id: string },
  data: KindergartenLanding,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    url: absoluteUrl(`/services/${service.id}`),
    provider: {
      '@type': 'Preschool',
      name: data.name,
      url: absoluteUrl('/'),
    },
    areaServed: GEO.area,
  };
}
