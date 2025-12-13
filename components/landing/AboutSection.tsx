'use client';

import { motion } from 'framer-motion';
import type { KindergartenLanding } from '@/lib/kindergarten-data';

interface AboutSectionProps {
  data: KindergartenLanding;
}

export function AboutSection({ data }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 md:py-24 bg-gradient-to-b from-pastel-purple/20 via-pastel-purple/30 to-pastel-purple/20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Small decorative clouds */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute top-10 left-10"
        >
          <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 30C20 24 24 20 30 20C34 20 38 23 40 27C42 24 46 22 50 22C58 22 62 30 62 38C62 44 59 49 54 52C59 53 64 59 64 67C64 75 57 80 47 80H15C5 80 0 70 0 60C0 50 5 43 15 43C17 38 20 30 20 30Z" fill="#B3E5FC" opacity="0.4"/>
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute bottom-10 right-10"
        >
          <svg width="100" height="70" viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 35C25 28 30 23 38 23C43 23 47 26 50 30C52 27 56 25 60 25C70 25 75 33 75 43C75 49 72 54 67 57C72 58 77 64 77 72C77 80 70 85 60 85H20C10 85 5 75 5 65C5 55 10 48 20 48C22 43 25 35 25 35Z" fill="#FFD1DC" opacity="0.4"/>
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
            درباره ما
          </h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
            مرکز آموزشی مدرن و پویا با فضایی شاد و خلاق برای رشد و یادگیری کودکان
          </p>
        </motion.div>

        <div className="max-w-3xl md:max-w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-pastel-purple/40 rounded-2xl md:rounded-3xl p-4 md:p-8 md:px-12 shadow-lg"
          >
            <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
              کودکستان و پیش دبستانی ایده در گیشا به عنوان یک مرکز آموزشی مدرن و پویا، فضایی شاد و خلاق برای کودکان فراهم می‌آورد. با استفاده از روش‌های آموزشی نوین و معلمان مجرب، کودکان در محیطی امن و حمایت‌گر به یادگیری و رشد می‌پردازند. فعالیت‌های متنوعی نظیر بازی‌های آموزشی، کارگاه‌های هنری و ورزشی، و برنامه‌های فرهنگی در این مرکز برگزار می‌شود تا کودکان استعدادهای خود را کشف و پرورش دهند.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

