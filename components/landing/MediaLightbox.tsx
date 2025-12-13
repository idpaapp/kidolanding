'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';

interface MediaLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  title?: string;
  type: 'image' | 'video';
}

export function MediaLightbox({ isOpen, onClose, src, title, type }: MediaLightboxProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          className="relative max-w-6xl max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-12 left-0 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors z-10"
            aria-label="بستن"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {type === 'image' ? (
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={title || 'تصویر'}
                width={1200}
                height={800}
                className="object-contain max-h-[90vh] rounded-lg"
              />
              {title && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                  <h3 className="text-white text-lg font-semibold">{title}</h3>
                </div>
              )}
            </div>
          ) : (
            <video
              src={src}
              controls
              autoPlay
              className="max-h-[90vh] rounded-lg"
            >
              مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
            </video>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

