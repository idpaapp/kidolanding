'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import type { KindergartenLanding } from '@/lib/kindergarten-data';

interface ContactSectionProps {
  data: KindergartenLanding;
}

export function ContactSection({ data }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 md:py-24 bg-gradient-to-br from-pastel-orange via-pastel-yellow/40 to-pastel-pink/40 text-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-5xl font-bold mb-3 md:mb-4">تماس با ما</h2>
          <p className="text-base md:text-xl text-gray-700">ما اینجا هستیم تا به شما کمک کنیم</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border-2 border-pastel-orange shadow-lg"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">اطلاعات تماس</h3>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-pastel-orange rounded-full p-2 md:p-3">
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="font-semibold mb-1 text-sm md:text-base">تلفن</p>
                  <a
                    href={`tel:${data.phone}`}
                    className="text-sm md:text-base text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {data.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-pastel-orange rounded-full p-2 md:p-3">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="font-semibold mb-1 text-sm md:text-base">آدرس</p>
                  <p className="text-sm md:text-base text-gray-700">{data.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-pastel-orange rounded-full p-2 md:p-3">
                  <Clock className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="font-semibold mb-1 text-sm md:text-base">ساعات کاری</p>
                  <p className="text-sm md:text-base text-gray-700">{data.workingDays}</p>
                  <p className="text-sm md:text-base text-gray-700">{data.workingHours}</p>
                  <p className="text-xs md:text-sm text-gray-700">{data.extendedHours}</p>
                </div>
              </div>

              <a
                href={`https://wa.me/${data.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 md:px-6 md:py-3 rounded-full text-sm md:text-base font-bold transition-colors mt-4"
              >
                <MessageCircle className="w-5 h-5" />
                ارتباط در واتساپ
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-lg overflow-hidden"
          >
            <a
              href="https://neshan.org/maps/places/d52cf882007312d123e59d0f034213f0#c35.731-51.376-19z-0p"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden block cursor-pointer group"
            >
              <Image
                src="/res/map.png"
                alt="نقشه مهد کودک ایده"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <div className="bg-white/90 rounded-full px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-bold text-gray-800">مشاهده در نشان</span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

