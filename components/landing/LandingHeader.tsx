'use client';

import { useState } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import type { KindergartenLanding } from '@/lib/kindergarten-data';

interface LandingHeaderProps {
  data: KindergartenLanding;
}

export function LandingHeader({ data }: LandingHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'خانه', href: '#home' },
    { label: 'درباره ما', href: '#about' },
    { label: 'گروه‌های سنی', href: '#age-groups' },
    { label: 'گالری', href: '#gallery' },
    { label: 'سوالات متداول', href: '#faq' },
    { label: 'تماس', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <nav className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between gap-2 md:gap-3">
          {/* Logo */}
          <div className="flex items-center gap-3 min-w-0 shrink">
            <div className="relative w-16 h-12 md:w-24 md:h-16 rounded-[10%] overflow-hidden shrink-0">
              <Image
                src="/images/landing/ideh/logo.jpg"
                alt={data.name}
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="hidden xl:block text-base font-bold text-gray-900 truncate whitespace-nowrap">
              {data.name}
            </p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center gap-4 2xl:gap-6 shrink-0">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-900 hover:text-primary-orange transition-colors font-medium text-sm 2xl:text-base whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA + menu button */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={data.platformUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-orange text-white px-3 sm:px-4 2xl:px-6 py-2 rounded-full hover:bg-primary-orange-dark transition-colors flex items-center gap-1.5 sm:gap-2 whitespace-nowrap text-xs sm:text-sm 2xl:text-base font-medium"
            >
              <span>ورود به کیدوبان</span>
              <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-gray-900 rounded-lg hover:bg-black/5"
              aria-label="منو"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden overflow-hidden mt-3 pb-2"
            >
              <div className="flex flex-col gap-1 rounded-2xl bg-white/95 shadow-lg border border-black/5 p-3">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-900 hover:text-primary-orange hover:bg-pastel-orange/20 transition-colors font-medium py-3 px-3 rounded-xl"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
