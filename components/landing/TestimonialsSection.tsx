'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Star, ChevronRight, ChevronLeft } from 'lucide-react';
import type { KindergartenLanding } from '@/lib/kindergarten-data';

interface TestimonialsSectionProps {
  data: KindergartenLanding;
}

export function TestimonialsSection({ data }: TestimonialsSectionProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // تعیین پدر یا مادر بر اساس index (زوج = مادر، فرد = پدر)
  const getParentType = (index: number) => {
    return index % 2 === 0 ? 'مادر' : 'پدر';
  };

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    // Auto-play
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      emblaApi.off('select', onSelect);
      clearInterval(interval);
    };
  }, [emblaApi]);

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-pastel-yellow/15 via-white to-pastel-blue/15">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
            نظرات والدین
          </h2>
          <p className="text-base md:text-xl text-gray-600">تجربه والدین از مهد کودک ایده</p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {data.testimonials.map((testimonial, index) => {
                const borderColorsVibrant = ['#FACC15', '#06B6D4', '#F97316', '#3B82F6', '#A855F7'];
                const borderColor = borderColorsVibrant[index % borderColorsVibrant.length];
                return (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-2xl p-3 md:p-4 shadow-md hover:shadow-lg transition-all h-full"
                  >
                    {/* Inner Card with Dashed Border */}
                    <div className="bg-white rounded-xl p-4 md:p-6 border-2 border-dashed h-full"
                      style={{ borderColor }}
                    >
                      <div className="mb-3 md:mb-4">
                        <h3 className="font-bold text-base md:text-lg text-gray-800 mb-1">
                          {testimonial.parentName}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600">{getParentType(index)} {testimonial.childName}</p>
                      </div>

                      <div className="flex gap-1 mb-3 md:mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>

                      <p className="text-sm md:text-base text-gray-700 leading-relaxed">{testimonial.text}</p>
                    </div>
                  </motion.div>
                </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors z-10"
            aria-label="قبلی"
          >
            <ChevronRight className="w-6 h-6 text-primary-orange" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors z-10"
            aria-label="بعدی"
          >
            <ChevronLeft className="w-6 h-6 text-primary-orange" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {data.testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === selectedIndex
                  ? 'bg-primary-orange w-8'
                  : 'bg-gray-300'
              }`}
              aria-label={`اسلاید ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

