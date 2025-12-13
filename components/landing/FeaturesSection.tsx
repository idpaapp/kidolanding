'use client';

import { motion } from 'framer-motion';
import type { KindergartenLanding } from '@/lib/kindergarten-data';

interface FeaturesSectionProps {
  data: KindergartenLanding;
}

const borderColors = {
  yellow: 'border-pastel-yellow',
  cyan: 'border-pastel-cyan',
  pink: 'border-pastel-pink',
};

const borderColorsVibrant = {
  yellow: '#FACC15', // زرد پررنگ
  cyan: '#06B6D4', // فیروزه‌ای پررنگ
  pink: '#F97316', // نارنجی/صورتی پررنگ
};

const checkmarkCircleColors = {
  yellow: '#FACC15', // زرد پررنگ
  cyan: '#06B6D4', // فیروزه‌ای پررنگ
  pink: '#F97316', // نارنجی/صورتی پررنگ
};

export function FeaturesSection({ data }: FeaturesSectionProps) {
  return (
    <section id="features" className="py-20 md:py-24 relative overflow-hidden bg-gradient-to-b from-pastel-blue/20 via-pastel-blue/30 to-pastel-blue/20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Pink Teddy Bear */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute left-10 top-20"
        >
          <svg width="120" height="140" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 20C50 20 42 28 42 38C42 48 50 56 60 56C70 56 78 48 78 38C78 28 70 20 60 20Z" stroke="#FFD1DC" strokeWidth="3" fill="none"/>
            <path d="M50 30C48 30 46 32 46 34" stroke="#FFD1DC" strokeWidth="2" fill="none"/>
            <path d="M74 30C76 30 78 32 78 34" stroke="#FFD1DC" strokeWidth="2" fill="none"/>
            <path d="M58 42C58 44 59 46 60 46C61 46 62 44 62 42" stroke="#FFD1DC" strokeWidth="2" fill="none"/>
            <path d="M60 56C60 70 50 80 50 90C50 100 55 110 60 120" stroke="#FFD1DC" strokeWidth="3" fill="none"/>
            <path d="M45 70C45 75 40 80 35 85" stroke="#FFD1DC" strokeWidth="3" fill="none"/>
            <path d="M75 70C75 75 80 80 85 85" stroke="#FFD1DC" strokeWidth="3" fill="none"/>
          </svg>
        </motion.div>

        {/* Yellow Building Blocks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute right-20 top-10"
        >
          <div className="relative">
            <div className="w-16 h-16 border-3 border-pastel-yellow rounded-lg transform rotate-12">
              <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-pastel-yellow">1</span>
            </div>
            <div className="absolute top-8 right-8 w-12 h-12 border-3 border-pastel-yellow rounded-lg transform -rotate-6"></div>
            <div className="absolute top-4 left-12 w-10 h-10 border-3 border-pastel-yellow rounded-lg transform rotate-12"></div>
          </div>
        </motion.div>

        {/* White Cloud */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-10 right-10"
        >
          <svg width="150" height="100" viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 50C30 40 35 35 45 35C50 35 55 37 58 40C60 38 63 37 67 37C77 37 85 45 85 55C85 60 83 64 80 67C85 68 90 73 90 80C90 88 83 95 75 95H25C15 95 10 85 10 75C10 65 15 60 25 60C27 55 30 50 30 50Z" fill="white" opacity="0.9"/>
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
          <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
            امکانات
          </h2>
          <p className="text-base md:text-xl text-gray-600">آنچه ما ارائه می‌دهیم</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {data.features.map((feature, index) => {
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-3 md:p-4 shadow-md hover:shadow-lg transition-all"
              >
                {/* Inner Card with Dashed Border */}
                <div className="bg-white rounded-xl p-4 md:p-6 border-2 border-dashed relative h-full"
                  style={{ borderColor: borderColorsVibrant[feature.color] }}
                >
                  {/* Checkmark Icon with Circle - SVG */}
                  <div className="absolute top-4 left-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      version="1.1" 
                      width="28" 
                      height="28" 
                      viewBox="0 0 2.54 2.54" 
                      style={{ enableBackground: 'new 0 0 512 512' }}
                      fillRule="evenodd"
                    >
                      <g>
                        <circle 
                          cx="1.27" 
                          cy="1.27" 
                          r="1.27" 
                          fill={checkmarkCircleColors[feature.color]}
                          opacity="1"
                        />
                        <path 
                          fill="#ffffff" 
                          d="M.873 1.89.41 1.391a.17.17 0 0 1 .008-.24.17.17 0 0 1 .24.009l.358.383.567-.53a.17.17 0 0 1 .016-.013l.266-.249a.17.17 0 0 1 .24.008.17.17 0 0 1-.008.24l-.815.76-.283.263-.125-.134z" 
                          opacity="1"
                        />
                      </g>
                    </svg>
                  </div>

                  <h3 className="text-base md:text-xl font-bold mb-2 mt-6 md:mt-8 text-gray-800">{feature.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

