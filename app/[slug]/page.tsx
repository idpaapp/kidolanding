import { notFound } from 'next/navigation';
import { getKindergartenBySlug } from '@/lib/kindergarten-data';
import { LandingHeader } from '@/components/landing/LandingHeader';
import { HeroSection } from '@/components/landing/HeroSection';
import { AboutSection } from '@/components/landing/AboutSection';
import { AgeGroupsSection } from '@/components/landing/AgeGroupsSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { SpecialServicesSection } from '@/components/landing/SpecialServicesSection';
import { ExtraClassesSection } from '@/components/landing/ExtraClassesSection';
import { GallerySection } from '@/components/landing/GallerySection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { ContactSection } from '@/components/landing/ContactSection';
import { LandingFooter } from '@/components/landing/LandingFooter';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getKindergartenBySlug(slug);

  if (!data) {
    return {
      title: 'صفحه پیدا نشد',
    };
  }

  return {
    title: data.name,
    description: data.tagline,
    openGraph: {
      title: data.name,
      description: data.tagline,
      type: 'website',
      locale: 'fa_IR',
    },
  };
}

export default async function LandingPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getKindergartenBySlug(slug);

  if (!data) {
    notFound();
  }

  return (
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
      <ContactSection data={data} />
      <LandingFooter data={data} />
    </main>
  );
}

