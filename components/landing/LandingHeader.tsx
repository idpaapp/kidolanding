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
    { label: 'تماس', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-14 md:w-28 md:h-18 rounded-[10%] overflow-hidden">
              <Image
                src="/images/landing/ideh/logo.jpg"
                alt={data.name}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-gray-900">{data.name}</h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-900 hover:text-primary-orange transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href={data.platformUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-orange text-white px-6 py-2 rounded-full hover:bg-primary-orange-dark transition-colors flex items-center gap-2"
            >
              ورود به کیدوبان
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-900"
            aria-label="منو"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-900 hover:text-primary-orange transition-colors font-medium py-2"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href={data.platformUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-orange text-white px-6 py-2 rounded-full hover:bg-primary-orange-dark transition-colors flex items-center justify-center gap-2"
                >
                  ورود به کیدوبان
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

