'use client';

import { motion } from 'framer-motion';
import { Swords, Music, Languages } from 'lucide-react';
import type { KindergartenLanding } from '@/lib/kindergarten-data';

interface ExtraClassesSectionProps {
  data: KindergartenLanding;
}

const iconMap = {
  Swords,
  Music,
  Languages,
};

export function ExtraClassesSection({ data }: ExtraClassesSectionProps) {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-pastel-orange/20 via-pastel-orange/30 to-pastel-orange/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
            کلاس‌های فوق برنامه
          </h2>
          <p className="text-base md:text-xl text-gray-600">فرصت‌های بیشتر برای یادگیری</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.extraClasses.map((extraClass, index) => {
            const Icon = iconMap[extraClass.icon];
            return (
              <motion.div
                key={extraClass.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className={`rounded-2xl md:rounded-3xl p-6 md:p-8 text-gray-800 shadow-lg hover:shadow-2xl transition-all cursor-pointer ${
                  extraClass.icon === 'Swords' 
                    ? 'bg-pastel-red' 
                    : extraClass.icon === 'Music'
                    ? 'bg-pastel-purple'
                    : 'bg-pastel-blue'
                }`}
              >
                <div className="flex justify-center mb-4 md:mb-6">
                  <div className="bg-white/60 rounded-full p-3 md:p-4">
                    <Icon className="w-8 h-8 md:w-12 md:h-12" />
                  </div>
                </div>
                <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 text-center">{extraClass.name}</h3>
                <p className="text-sm md:text-base text-center text-gray-700 mb-3 md:mb-4">{extraClass.description}</p>
                {extraClass.name === 'نینجا' && (
                  <p className="text-xs md:text-sm text-center text-gray-600 leading-relaxed">
                    کلاس نینجا با هدف تقویت مهارت‌های حرکتی، هماهنگی بدن و ذهن، و افزایش اعتماد به نفس کودکان طراحی شده است. در این کلاس، کودکان با حرکات پایه‌ای هنرهای رزمی آشنا می‌شوند و در محیطی امن و سرگرم‌کننده به تمرین می‌پردازند.
                  </p>
                )}
                {extraClass.name === 'موسیقی' && (
                  <p className="text-xs md:text-sm text-center text-gray-600 leading-relaxed">
                    کلاس موسیقی به کودکان کمک می‌کند تا با ریتم، ملودی و آهنگ آشنا شوند. در این کلاس، کودکان با سازهای ساده و آواز خواندن، خلاقیت و مهارت‌های شنیداری خود را تقویت می‌کنند و از موسیقی لذت می‌برند.
                  </p>
                )}
                {extraClass.name === 'زبان انگلیسی' && (
                  <p className="text-xs md:text-sm text-center text-gray-600 leading-relaxed">
                    کلاس زبان انگلیسی با روش‌های بازی‌محور و تعاملی، کودکان را با زبان انگلیسی آشنا می‌کند. در این کلاس، کودکان با استفاده از بازی، داستان، آهنگ و فعالیت‌های سرگرم‌کننده، واژگان و ساختارهای پایه‌ای زبان را یاد می‌گیرند.
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

