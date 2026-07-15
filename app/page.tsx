import { idehKindergarten } from '@/lib/kindergarten-data';
import { LandingHeader } from '@/components/landing/LandingHeader';
import { HeroSection } from '@/components/landing/HeroSection';
import { AboutSection } from '@/components/landing/AboutSection';
import { AgeGroupsSection } from '@/components/landing/AgeGroupsSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { SpecialServicesSection } from '@/components/landing/SpecialServicesSection';
import { ExtraClassesSection } from '@/components/landing/ExtraClassesSection';
import { GallerySection } from '@/components/landing/GallerySection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { FAQSection } from '@/components/landing/FAQSection';
import { ContactSection } from '@/components/landing/ContactSection';
import { LandingFooter } from '@/components/landing/LandingFooter';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  buildPageMetadata,
  buildPreschoolSchema,
  buildWebSiteSchema,
  buildOrganizationSchema,
  buildFAQSchema,
  buildReviewSchema,
  DEFAULT_KEYWORDS,
} from '@/lib/seo';
import type { Metadata } from 'next';

const data = idehKindergarten;

export const metadata: Metadata = buildPageMetadata({
  title: `${data.name} | شهرآرا، گیشا، تهران`,
  description:
    'مهد کودک و پیش دبستانی ایده در شهرآرا (گیشا) — بهترین مهدکودک منطقه با مربیان مجرب، فضای آموزشی مدرن، کلاس‌های تخصصی انگلیسی، نینجا و موسیقی. ثبت‌نام کودکان ۳ ماه تا ۶ سال.',
  path: '/',
  keywords: [
    ...DEFAULT_KEYWORDS,
    'بهترین مهدکودک شهرآرا',
    'بهترین پیش دبستانی گیشا',
    'ثبت نام مهدکودک تهران',
  ],
  image: '/res/photo_1.jpg',
});

export default function HomePage() {
  const reviewSchema = buildReviewSchema(data);
  const jsonLd = [
    buildWebSiteSchema(),
    buildOrganizationSchema(data),
    buildPreschoolSchema(data),
    buildFAQSchema(),
    ...(reviewSchema ? [reviewSchema] : []),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <main className="min-h-screen">
        <LandingHeader data={data} />
        <HeroSection data={data} />
        <AboutSection data={data} />
        <AgeGroupsSection data={data} />
        <FeaturesSection data={data} />
        <SpecialServicesSection data={data} />
        <ExtraClassesSection data={data} />
        <GallerySection data={data} />
        <TestimonialsSection data={data} />
        <FAQSection />
        <ContactSection data={data} />
        <LandingFooter data={data} />
      </main>
    </>
  );
}
