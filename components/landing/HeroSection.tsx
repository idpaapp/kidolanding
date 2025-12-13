'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { KindergartenLanding } from '@/lib/kindergarten-data';

interface HeroSectionProps {
  data: KindergartenLanding;
}

export function HeroSection({ data }: HeroSectionProps) {
  // Photos scattered like on a table - RTL layout
  // Mobile: 5 photos in two rows
  const mobilePhotos = [
    { src: '/res/photo_1.jpg', alt: 'فعالیت‌های آموزشی', rotate: -8, x: '5%', y: '5%', size: 'w-24 h-32', z: 20 },
    { src: '/res/photo_2.jpg', alt: 'بازی و سرگرمی', rotate: 12, x: '35%', y: '0%', size: 'w-24 h-32', z: 19 },
    { src: '/res/photo_3.jpg', alt: 'فعالیت‌های روزانه', rotate: -15, x: '65%', y: '8%', size: 'w-24 h-32', z: 18 },
    { src: '/res/photo_4.jpg', alt: 'کارگاه هنری', rotate: 10, x: '20%', y: '40%', size: 'w-24 h-32', z: 17 },
    { src: '/res/photo_5.jpg', alt: 'فعالیت‌های ورزشی', rotate: -5, x: '55%', y: '45%', size: 'w-24 h-32', z: 16 },
  ];
  
  // Desktop: 8 photos with more spacing
  const desktopPhotos = [
    { src: '/res/photo_1.jpg', alt: 'فعالیت‌های آموزشی', rotate: -8, x: '0%', y: '0%', size: 'w-48 h-60', z: 20 },
    { src: '/res/photo_2.jpg', alt: 'بازی و سرگرمی', rotate: 12, x: '22%', y: '35%', size: 'w-44 h-56', z: 17 },
    { src: '/res/photo_3.jpg', alt: 'فعالیت‌های روزانه', rotate: -15, x: '44%', y: '5%', size: 'w-52 h-64', z: 19 },
    { src: '/res/photo_4.jpg', alt: 'کارگاه هنری', rotate: 10, x: '-5%', y: '40%', size: 'w-40 h-52', z: 16 },
    { src: '/res/photo_5.jpg', alt: 'فعالیت‌های ورزشی', rotate: -5, x: '55%', y: '45%', size: 'w-36 h-48', z: 18 },
    { src: '/res/photo_6.jpg', alt: 'برنامه‌های فرهنگی', rotate: 8, x: '66%', y: '10%', size: 'w-42 h-54', z: 15 },
    { src: '/res/photo_7.jpg', alt: 'کارگاه‌های هنری', rotate: -12, x: '39%', y: '40%', size: 'w-38 h-50', z: 14 },
    { src: '/res/photo_8.jpg', alt: 'فعالیت‌های گروهی', rotate: 6, x: '77%', y: '30%', size: 'w-34 h-46', z: 13 },
  ];

  // Decorative elements for background - reduced by 50% for performance
  const decorativeElements = [
    // Clouds - Hero section (0-100%) - 6 instead of 12
    { type: 'cloud', x: '5%', y: '8%', size: 'w-24 h-18 md:w-32 md:h-24', color: 'pastel-pink', rotate: 0, scale: [1, 1.2, 1] },
    { type: 'cloud', x: '85%', y: '12%', size: 'w-28 h-20 md:w-36 md:h-26', color: 'pastel-blue', rotate: 5, scale: [1, 1.15, 1] },
    { type: 'cloud', x: '15%', y: '65%', size: 'w-22 h-16 md:w-30 md:h-22', color: 'pastel-yellow', rotate: -3, scale: [1, 1.1, 1] },
    { type: 'cloud', x: '75%', y: '75%', size: 'w-20 h-15 md:w-28 md:h-20', color: 'pastel-purple', rotate: 8, scale: [1, 1.25, 1] },
    { type: 'cloud', x: '50%', y: '3%', size: 'w-18 h-14 md:w-24 md:h-18', color: 'pastel-cyan', rotate: -5, scale: [1, 1.18, 1] },
    { type: 'cloud', x: '30%', y: '55%', size: 'w-24 h-18 md:w-32 md:h-24', color: 'pastel-orange', rotate: 3, scale: [1, 1.2, 1] },
    // Stars - Hero section (0-100%) - 7 instead of 15
    { type: 'star', x: '12%', y: '22%', size: 'w-12 h-12 md:w-16 md:h-16', color: 'pastel-yellow', rotate: 15, scale: [1, 1.3, 1] },
    { type: 'star', x: '72%', y: '28%', size: 'w-10 h-10 md:w-14 md:h-14', color: 'pastel-pink', rotate: 30, scale: [1, 1.25, 1] },
    { type: 'star', x: '28%', y: '82%', size: 'w-14 h-14 md:w-18 md:h-18', color: 'pastel-orange', rotate: 45, scale: [1, 1.35, 1] },
    { type: 'star', x: '82%', y: '62%', size: 'w-11 h-11 md:w-15 md:h-15', color: 'pastel-purple', rotate: 20, scale: [1, 1.2, 1] },
    { type: 'star', x: '48%', y: '18%', size: 'w-13 h-13 md:w-17 md:h-17', color: 'pastel-cyan', rotate: 60, scale: [1, 1.28, 1] },
    { type: 'star', x: '62%', y: '72%', size: 'w-12 h-12 md:w-16 md:h-16', color: 'pastel-blue', rotate: 25, scale: [1, 1.22, 1] },
    { type: 'star', x: '22%', y: '38%', size: 'w-10 h-10 md:w-14 md:h-14', color: 'pastel-green', rotate: 40, scale: [1, 1.3, 1] },
    // Balloons - Hero section
    { type: 'balloon', x: '12%', y: '30%', size: 'w-16 h-20 md:w-20 md:h-24', color: 'pastel-pink', rotate: -10, scale: [1, 1.15, 1] },
    { type: 'balloon', x: '88%', y: '25%', size: 'w-14 h-18 md:w-18 md:h-22', color: 'pastel-blue', rotate: 8, scale: [1, 1.2, 1] },
    { type: 'balloon', x: '20%', y: '70%', size: 'w-18 h-22 md:w-22 md:h-26', color: 'pastel-yellow', rotate: -5, scale: [1, 1.18, 1] },
    { type: 'balloon', x: '75%', y: '80%', size: 'w-16 h-20 md:w-20 md:h-24', color: 'pastel-purple', rotate: 12, scale: [1, 1.15, 1] },
    { type: 'balloon', x: '50%', y: '12%', size: 'w-14 h-18 md:w-18 md:h-22', color: 'pastel-cyan', rotate: -8, scale: [1, 1.2, 1] },
    // Bears - Hero section
    { type: 'bear', x: '8%', y: '50%', size: 'w-20 h-24 md:w-28 md:h-32', color: 'pastel-blue', rotate: -5, scale: [1, 1.1, 1] },
    { type: 'bear', x: '85%', y: '60%', size: 'w-18 h-22 md:w-24 md:h-28', color: 'pastel-pink', rotate: 8, scale: [1, 1.12, 1] },
    { type: 'bear', x: '35%', y: '20%', size: 'w-16 h-20 md:w-22 md:h-26', color: 'pastel-yellow', rotate: -3, scale: [1, 1.1, 1] },
    { type: 'bear', x: '65%', y: '75%', size: 'w-20 h-24 md:w-26 md:h-30', color: 'pastel-purple', rotate: 10, scale: [1, 1.15, 1] },
    // More elements for rest of page - reduced
    { type: 'cloud', x: '10%', y: '120%', size: 'w-18 h-14 md:w-24 md:h-18', color: 'pastel-pink', rotate: 10, scale: [1, 1.2, 1] },
    { type: 'star', x: '90%', y: '110%', size: 'w-9 h-9 md:w-13 md:h-13', color: 'pastel-yellow', rotate: 50, scale: [1, 1.25, 1] },
  ];

  const getColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      'pastel-pink': 'text-pastel-pink',
      'pastel-blue': 'text-pastel-blue',
      'pastel-yellow': 'text-pastel-yellow',
      'pastel-purple': 'text-pastel-purple',
      'pastel-cyan': 'text-pastel-cyan',
      'pastel-orange': 'text-pastel-orange',
      'pastel-green': 'text-pastel-green',
    };
    return colorMap[color] || 'text-pastel-pink';
  };

  return (
    <section
      id="home"
      className="relative min-h-screen md:min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-pastel-green/20 via-pastel-green/30 to-pastel-green/40 pt-24 overflow-hidden"
    >
      {/* Decorative Background Elements - fixed position, below all content */}
      <div className="fixed inset-0 pointer-events-none opacity-70 -z-10" style={{ minHeight: '300vh' }}>
        {decorativeElements.map((element, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: element.scale,
              rotate: [element.rotate, element.rotate + 15, element.rotate - 15, element.rotate],
            }}
            transition={{ 
              duration: 3 + (index % 3),
              delay: index * 0.15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute ${element.size} ${getColorClass(element.color)}`}
            style={{
              left: element.x,
              top: element.y,
            }}
          >
            {element.type === 'cloud' && (
              <svg viewBox="0 0 100 60" fill="currentColor" className="w-full h-full">
                <path d="M25 30C25 20 32 15 42 15C48 15 53 18 56 23C58 20 63 18 68 18C78 18 85 26 85 36C85 42 81 47 75 50C81 51 87 58 87 68C87 78 78 85 68 85H15C5 85 0 72 0 62C0 52 5 45 15 45C17 40 25 30 25 30Z" />
              </svg>
            )}
            {element.type === 'star' && (
              <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
                <path d="M50 5L60 35L90 35L68 55L78 85L50 65L22 85L32 55L10 35L40 35Z" />
              </svg>
            )}
            {element.type === 'balloon' && (
              <svg viewBox="0 0 100 120" fill="currentColor" className="w-full h-full">
                <ellipse cx="50" cy="45" rx="35" ry="40" />
                <path d="M50 85L50 120" stroke="currentColor" strokeWidth="3" fill="none" />
                <path d="M45 85L55 85" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            )}
            {element.type === 'bear' && (
              <svg viewBox="0 0 100 120" fill="currentColor" className="w-full h-full">
                <circle cx="50" cy="30" r="22" />
                <circle cx="42" cy="28" r="4" fill="white" />
                <circle cx="58" cy="28" r="4" fill="white" />
                <ellipse cx="50" cy="35" rx="4" ry="3" fill="white" />
                <path d="M50 50C50 65 40 75 40 85C40 95 45 105 50 115" stroke="currentColor" strokeWidth="4" fill="none" />
                <path d="M35 70C35 75 30 80 25 85" stroke="currentColor" strokeWidth="4" fill="none" />
                <path d="M65 70C65 75 70 80 75 85" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            )}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 md:py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          
          {/* Left Side - Text Content (RTL: text on left) - More space on desktop */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-3/5 lg:w-3/5 flex flex-col justify-center text-center md:text-right order-1"
          >
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-gray-900 mb-4 md:mb-6 leading-tight"
            >
              به خانواده <span className="text-primary-orange">ایده</span> خوش آمدید
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 md:mb-10 leading-relaxed font-medium"
            >
              {data.tagline}
            </motion.p>

            {/* CTA Buttons - Hidden on mobile, shown on desktop */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="hidden md:flex flex-col sm:flex-row gap-4 justify-start"
            >
              <a
                href={data.platformUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary-orange to-primary-orange-dark text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:shadow-2xl transition-all shadow-xl hover:scale-105 text-center"
              >
                ورود به پلتفرم کیدوبان
              </a>
              <a
                href="#contact"
                className="bg-white text-gray-800 border-2 border-pastel-pink px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-pastel-pink/20 transition-all shadow-xl hover:scale-105 text-center"
              >
                تماس با ما
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Photo Collage (RTL: collage on right) - Less space on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full md:w-2/5 lg:w-2/5 h-80 md:h-[600px] flex items-center justify-center order-2"
          >
            {/* Mobile photos */}
            {mobilePhotos.map((photo, index) => (
              <motion.div
                key={`mobile-${index}`}
                initial={{ 
                  opacity: 0, 
                  scale: 0.5,
                  rotate: photo.rotate * 2,
                  x: photo.rotate * 10,
                  y: photo.rotate * 10
                }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  rotate: photo.rotate,
                  x: 0,
                  y: 0
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className={`absolute md:hidden ${photo.size}`}
                style={{
                  left: photo.x,
                  top: photo.y,
                  zIndex: photo.z,
                  filter: 'drop-shadow(8px 8px 20px rgba(0,0,0,0.15))',
                }}
              >
                <div className="relative w-full h-full rounded-lg overflow-hidden bg-white p-1 shadow-xl">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover rounded-md"
                    priority={index < 2}
                  />
                </div>
              </motion.div>
            ))}
            
            {/* Desktop photos */}
            {desktopPhotos.map((photo, index) => (
              <motion.div
                key={`desktop-${index}`}
                initial={{ 
                  opacity: 0, 
                  scale: 0.5,
                  rotate: photo.rotate * 2,
                  x: photo.rotate * 10,
                  y: photo.rotate * 10
                }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  rotate: photo.rotate,
                  x: 0,
                  y: 0
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className={`hidden md:block absolute ${photo.size}`}
                style={{
                  left: photo.x,
                  top: photo.y,
                  zIndex: photo.z,
                  transform: `rotate(${photo.rotate}deg)`,
                  filter: 'drop-shadow(8px 8px 20px rgba(0,0,0,0.15))',
                }}
              >
                <div className="relative w-full h-full rounded-lg overflow-hidden bg-white p-1 shadow-xl">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover rounded-md"
                    priority={index < 2}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons - Mobile only, below collage */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="w-full md:hidden flex flex-col gap-4 justify-center order-3 mt-4"
          >
            <a
              href={data.platformUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary-orange to-primary-orange-dark text-white px-8 py-3 rounded-full font-bold text-base hover:shadow-2xl transition-all shadow-xl hover:scale-105 text-center"
            >
              ورود به پلتفرم کیدوبان
            </a>
            <a
              href="#contact"
              className="bg-white text-gray-800 border-2 border-pastel-pink px-8 py-3 rounded-full font-bold text-base hover:bg-pastel-pink/20 transition-all shadow-xl hover:scale-105 text-center"
            >
              تماس با ما
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
