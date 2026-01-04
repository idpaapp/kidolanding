'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Handshake, Sparkles, Target, Languages, Palette, Activity, Music, Scissors, BookOpen, Film, Mic, Puzzle, Swords, ChevronRight } from 'lucide-react';
import servicesDataRaw from '@/lib/services-data.json';
import { getKindergartenBySlug } from '@/lib/kindergarten-data';
import { LandingHeader } from '@/components/landing/LandingHeader';
import { LandingFooter } from '@/components/landing/LandingFooter';
import { MediaLightbox } from '@/components/landing/MediaLightbox';

const servicesData = servicesDataRaw as {
  specialServices: any[];
  supplementaryClasses: any[];
  extraClasses: any[];
};

const iconMap = {
  Handshake,
  Sparkles,
  Target,
  Languages,
  Palette,
  Activity,
  Music,
  Scissors,
  BookOpen,
  Film,
  Mic,
  Puzzle,
  Swords,
};

const getIconColor = (iconColor: string) => {
  if (iconColor.includes('pink')) return { text: 'text-pink-600', border: 'border-pink-400', bg: 'from-pink-400 to-pink-600' };
  if (iconColor.includes('blue')) return { text: 'text-blue-600', border: 'border-blue-400', bg: 'from-blue-400 to-blue-600' };
  if (iconColor.includes('yellow')) return { text: 'text-yellow-600', border: 'border-yellow-400', bg: 'from-yellow-400 to-yellow-600' };
  if (iconColor.includes('purple')) return { text: 'text-purple-600', border: 'border-purple-400', bg: 'from-purple-400 to-purple-600' };
  if (iconColor.includes('green')) return { text: 'text-green-600', border: 'border-green-400', bg: 'from-green-400 to-green-600' };
  if (iconColor.includes('orange')) return { text: 'text-orange-600', border: 'border-orange-400', bg: 'from-orange-400 to-orange-600' };
  if (iconColor.includes('red')) return { text: 'text-red-600', border: 'border-red-400', bg: 'from-red-400 to-red-600' };
  return { text: 'text-gray-700', border: 'border-gray-300', bg: 'from-gray-400 to-gray-600' };
};

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const id = params?.id as string;
  
  // دریافت داده‌های مهد کودک
  const kindergartenData = getKindergartenBySlug('ideh');
  
  // جستجو در همه بخش‌ها
  const allServices = [
    ...servicesData.specialServices,
    ...servicesData.supplementaryClasses,
    ...servicesData.extraClasses,
  ];
  
  const service = allServices.find((s: any) => s.id === id);
  
  if (!service) {
    return (
      <main className="min-h-screen">
        {kindergartenData && <LandingHeader data={kindergartenData} />}
        <div className="min-h-screen flex items-center justify-center pt-24">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">خدمت پیدا نشد</h1>
            <button
              onClick={() => router.back()}
              className="text-pink-600 hover:text-pink-700"
            >
              بازگشت
            </button>
          </div>
        </div>
        {kindergartenData && <LandingFooter data={kindergartenData} />}
      </main>
    );
  }

  // تشخیص نوع
  const type = servicesData.specialServices.find((s: any) => s.id === id) ? 'service' :
               servicesData.supplementaryClasses.find((s: any) => s.id === id) ? 'class' :
               'extra';
  
  const Icon = iconMap[service.icon as keyof typeof iconMap];
  const colors = type === 'extra' && 'gradient' in service 
    ? { text: service.icon === 'Swords' ? 'text-red-600' : service.icon === 'Music' ? 'text-purple-600' : 'text-blue-600', 
        border: service.icon === 'Swords' ? 'border-red-400' : service.icon === 'Music' ? 'border-purple-400' : 'border-blue-400',
        bg: service.gradient }
    : getIconColor(service.iconColor || '');
  
  const paragraphs = service.longDescription?.split('\n\n') || [];

  if (!kindergartenData) {
    return null;
  }

  return (
    <main className="min-h-screen">
      <LandingHeader data={kindergartenData} />
      <div className="bg-gradient-to-b from-white via-pastel-pink/10 to-white pt-24 pb-12 md:pb-20">
      <div className="container mx-auto px-6 md:px-4">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-pink-600 hover:text-pink-700 mb-6 md:mb-8 transition-colors group"
        >
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          <span className="font-medium">بازگشت</span>
        </button>

        {/* Icon - Top Center */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-2 flex items-center justify-center shadow-lg ${colors.border}`}>
            <Icon className={`w-10 h-10 md:w-12 md:h-12 ${colors.text}`} />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-5xl font-bold text-gray-800 text-center mb-6 md:mb-6 px-2">
          {service.title || service.name}
        </h1>

        {/* Long Description */}
        <div className="max-w-4xl mx-auto mb-8 md:mb-12">
          {paragraphs.map((paragraph: string, index: number) => (
            <p key={index} className="text-sm md:text-lg text-gray-700 leading-relaxed mb-4 text-justify px-2">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Gallery */}
        {service.gallery && service.gallery.length > 0 && (
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl md:text-4xl font-bold text-gray-800 text-center mb-6 md:mb-8 px-2">
              گالری تصاویر
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {service.gallery.map((image: string, index: number) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group hover:scale-105 transition-transform"
                >
                  <Image
                    src={image}
                    alt={`گالری ${index + 1}`}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lightbox */}
        {selectedImage && (
          <MediaLightbox
            isOpen={!!selectedImage}
            onClose={() => setSelectedImage(null)}
            src={selectedImage}
            type="image"
          />
        )}
        </div>
      </div>
      <LandingFooter data={kindergartenData} />
    </main>
  );
}

