'use client';

import { motion } from 'framer-motion';
import { memo } from 'react';
import { Handshake, Sparkles, Target, Languages, Palette, Activity, Music, Scissors, BookOpen, Film, Mic, Puzzle } from 'lucide-react';
import type { KindergartenLanding, SpecialService } from '@/lib/kindergarten-data';

interface SpecialServicesSectionProps {
  data: KindergartenLanding;
}

interface ServiceCardProps {
  service: SpecialService;
  index: number;
}

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
};

const ServiceCard = memo(function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon];
  
  // Extract color from gradient for icon
  const getIconColor = (iconColor: string) => {
    if (iconColor.includes('pink')) return 'text-pink-600';
    if (iconColor.includes('blue')) return 'text-blue-600';
    if (iconColor.includes('yellow')) return 'text-yellow-600';
    if (iconColor.includes('purple')) return 'text-purple-600';
    if (iconColor.includes('green')) return 'text-green-600';
    if (iconColor.includes('orange')) return 'text-orange-600';
    return 'text-gray-700';
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: Math.min(index * 0.03, 0.15), ease: [0.25, 0.1, 0.25, 1] }}
      className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow h-full relative overflow-hidden group flex flex-col"
    >
      {/* Header: Icon (Top Right) and Title (Left of Icon) - RTL Layout */}
      <div className="flex items-center gap-3 mb-4 relative z-10">
        {/* Icon Circle - Top Right in RTL */}
        <div className={`w-14 h-14 rounded-full bg-white border-2 flex items-center justify-center shadow-md flex-shrink-0 ${
          service.iconColor.includes('pink') ? 'border-pink-400' :
          service.iconColor.includes('blue') ? 'border-blue-400' :
          service.iconColor.includes('yellow') ? 'border-yellow-400' :
          service.iconColor.includes('purple') ? 'border-purple-400' :
          service.iconColor.includes('green') ? 'border-green-400' :
          service.iconColor.includes('orange') ? 'border-orange-400' :
          'border-gray-300'
        }`}>
          <Icon className={`w-7 h-7 ${getIconColor(service.iconColor)}`} />
        </div>
        
        {/* Title - Left of Icon in RTL */}
        <h3 className="text-lg md:text-xl font-bold text-gray-800 flex-1">
          {service.title}
        </h3>
      </div>

      {/* Description - Two lines */}
      <div className="flex-1 mb-4 relative z-10">
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
          {service.description}
        </p>
      </div>
      
        {/* Read More Link - Bottom Left in RTL */}
        <div className="flex justify-end mt-auto relative z-10">
          <a
            href={`/services/${service.id}`}
            className="text-sm font-semibold text-pink-600 hover:text-pink-700 transition-colors"
          >
            بیشتر بدانید
          </a>
        </div>
    </motion.div>
  );
});

export function SpecialServicesSection({ data }: SpecialServicesSectionProps) {
  return (
    <section id="special-services" className="py-20 md:py-24 bg-gradient-to-b from-white via-pastel-pink/10 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
            خدمات ویژه ما
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            در این قسمت می‌توانید بخشی از خدماتی که مهد کودک قصه من به فرزندان دلبند شما ارائه می‌کند را مطالعه نمایید.
          </p>
        </motion.div>

        {/* Special Services Grid */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.specialServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Supplementary Classes Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-16"
        >
          <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            کلاس‌های تکمیلی
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.supplementaryClasses.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

