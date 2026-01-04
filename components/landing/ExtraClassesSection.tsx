'use client';

import { motion } from 'framer-motion';
import { memo } from 'react';
import { Swords, Music, Languages } from 'lucide-react';
import type { KindergartenLanding, ExtraClass } from '@/lib/kindergarten-data';

interface ExtraClassesSectionProps {
  data: KindergartenLanding;
}

const iconMap = {
  Swords,
  Music,
  Languages,
};

const gradientClasses = {
  Swords: 'from-red-400 via-orange-400 to-red-500',
  Music: 'from-purple-400 via-pink-400 to-purple-500',
  Languages: 'from-blue-400 via-cyan-400 to-blue-500',
};

const ExtraClassCard = memo(function ExtraClassCard({ 
  extraClass, 
  index 
}: { 
  extraClass: ExtraClass; 
  index: number;
}) {
  const Icon = iconMap[extraClass.icon];
  
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
          extraClass.icon === 'Swords' ? 'border-red-400' :
          extraClass.icon === 'Music' ? 'border-purple-400' :
          'border-blue-400'
        }`}>
          <Icon className={`w-7 h-7 ${
            extraClass.icon === 'Swords' ? 'text-red-600' :
            extraClass.icon === 'Music' ? 'text-purple-600' :
            'text-blue-600'
          }`} />
        </div>
        
        {/* Title - Left of Icon in RTL */}
        <h3 className="text-lg md:text-xl font-bold text-gray-800 flex-1">
          {extraClass.name}
        </h3>
      </div>

      {/* Description - Two lines */}
      <div className="flex-1 mb-4 relative z-10">
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
          {extraClass.description}
        </p>
      </div>
      
      {/* Read More Link - Bottom Left in RTL */}
      <div className="flex justify-end mt-auto relative z-10">
        <a
          href={`/services/${extraClass.id}`}
          className="text-sm font-semibold text-pink-600 hover:text-pink-700 transition-colors"
        >
          بیشتر بدانید
        </a>
      </div>
    </motion.div>
  );
});

export function ExtraClassesSection({ data }: ExtraClassesSectionProps) {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-white via-pastel-orange/10 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
            کلاس‌های تخصصی
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            با مربیان مجرب و حرفه‌ای، کلاس‌های تخصصی و خصوصی برای فرزندان دلبند شما! در محیطی امن و دوستانه، 
            استعدادهای کودکان را کشف و پرورش می‌دهیم. هر کلاس با برنامه‌ریزی دقیق و روش‌های نوین آموزشی طراحی شده است.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {data.extraClasses.map((extraClass, index) => (
            <ExtraClassCard key={extraClass.name} extraClass={extraClass} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

