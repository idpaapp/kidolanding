'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUp, Instagram, MessageCircle } from 'lucide-react';
import type { KindergartenLanding } from '@/lib/kindergarten-data';

interface LandingFooterProps {
  data: KindergartenLanding;
}

export function LandingFooter({ data }: LandingFooterProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-blue-dark text-white">

      <div className="container mx-auto px-4 py-12 pt-20">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="relative w-32 h-20 mb-4">
              <Image
                src="/images/landing/ideh/logo.jpg"
                alt={data.name}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">{data.name}</h3>
            <p className="text-white/90 text-sm">{data.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">لینک‌های سریع</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/80 hover:text-white transition-colors">
                  خانه
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">
                  درباره ما
                </a>
              </li>
              <li>
                <a href="#age-groups" className="text-white/80 hover:text-white transition-colors">
                  گروه‌های سنی
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white/80 hover:text-white transition-colors">
                  گالری
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                  تماس
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">اطلاعات تماس</h4>
            <ul className="space-y-2 text-white/80 text-sm mb-4">
              <li>{data.address}</li>
              <li>
                <a href={`tel:${data.phone}`} className="hover:text-white transition-colors">
                  {data.phone}
                </a>
              </li>
              <li>{data.workingDays}</li>
              <li>{data.workingHours}</li>
            </ul>
            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${data.phone.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors font-medium text-sm"
            >
              <MessageCircle className="w-5 h-5" />
              ارتباط در واتساپ
            </a>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">شبکه‌های اجتماعی</h4>
            <div className="flex gap-4">
              {data.socialLinks.instagram && (
                <a
                  href={data.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
                  aria-label="اینستاگرام"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center text-white/80 text-sm">
          <p>© {new Date().getFullYear()} {data.name}. تمامی حقوق محفوظ است.</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 bg-primary-orange text-white rounded-full p-4 shadow-lg hover:bg-primary-orange-dark transition-colors z-40"
          aria-label="بازگشت به بالا"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </footer>
  );
}

