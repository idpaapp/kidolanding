'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { MediaLightbox } from './MediaLightbox';
import { VideoPlayer } from './VideoPlayer';
import type { KindergartenLanding } from '@/lib/kindergarten-data';
import type { GalleryItem } from '@/lib/kindergarten-data';

interface GallerySectionProps {
  data: KindergartenLanding;
}

type FilterType = 'all' | 'image' | 'video';

interface VideoThumbnailProps {
  item: GalleryItem;
  size: 'normal' | 'large' | 'wide' | 'tall';
  sizeClasses: Record<string, string>;
  index: number;
  onSelect: () => void;
}

function VideoThumbnail({ item, size, sizeClasses, index, onSelect }: VideoThumbnailProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);

  useEffect(() => {
    if (item.type === 'video' && videoRef.current) {
      const video = videoRef.current;
      
      const handleLoadedMetadata = () => {
        // برو به وسط ویدیو
        if (video.duration && video.duration > 0) {
          video.currentTime = video.duration / 2;
        } else {
          // اگر duration در دسترس نبود، به 1 ثانیه برو
          video.currentTime = 1;
        }
      };

      const handleSeeked = () => {
        // وقتی به موقعیت رسید، فریم را بگیر
        if (canvasRef.current && video) {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext('2d');
          if (ctx && video.videoWidth > 0 && video.videoHeight > 0) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const url = canvas.toDataURL('image/jpeg', 0.8);
            setThumbnailUrl(url);
          }
        }
      };

      const handleCanPlay = () => {
        // وقتی ویدیو آماده پخش است
        if (video.duration && video.duration > 0) {
          video.currentTime = video.duration / 2;
        } else {
          video.currentTime = 1;
        }
      };

      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('seeked', handleSeeked);
      video.addEventListener('loadeddata', handleCanPlay);

      // اگر metadata قبلاً لود شده بود
      if (video.readyState >= 1) {
        handleCanPlay();
      }

      return () => {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('seeked', handleSeeked);
        video.removeEventListener('loadeddata', handleCanPlay);
      };
    }
  }, [item.type, item.src]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      className={`relative ${sizeClasses[size]} rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-all aspect-square`}
      onClick={onSelect}
    >
      {item.type === 'video' ? (
        <>
          <video
            ref={videoRef}
            src={item.src}
            className="hidden"
            muted
            playsInline
            preload="metadata"
            crossOrigin="anonymous"
          />
          <canvas ref={canvasRef} className="hidden" />
          {thumbnailUrl ? (
            <Image
              src={thumbnailUrl}
              alt={item.title || 'گالری'}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              unoptimized
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <div className="animate-pulse text-gray-400 text-sm">در حال بارگذاری...</div>
            </div>
          )}
        </>
      ) : (
        <Image
          src={item.thumbnail}
          alt={item.title || 'گالری'}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
        {item.type === 'video' && (
          <>
            <div className="bg-white/90 rounded-full p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <Play className="w-8 h-8 text-primary-orange fill-primary-orange" />
            </div>
            {item.duration && (
              <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {item.duration}
              </div>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
}

export function GallerySection({ data }: GallerySectionProps) {
  const [filter, setFilter] = useState<FilterType>('all');
  const [selectedItem, setSelectedItem] = useState<{
    src: string;
    title?: string;
    type: 'image' | 'video';
  } | null>(null);

  const filters = [
    { label: 'همه', value: 'all' as FilterType },
    { label: 'تصاویر', value: 'image' as FilterType },
    { label: 'ویدیوها', value: 'video' as FilterType },
  ];

  const filteredItems = data.gallery.filter(
    (item) => filter === 'all' || item.type === filter
  );

  return (
    <section id="gallery" className="py-20 md:py-24 bg-gradient-to-b from-white via-pastel-pink/15 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
            گالری تصاویر و ویدیوها
          </h2>
          <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8">لحظات زیبای کودکان ما</p>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-4">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-4 py-1.5 md:px-6 md:py-2 rounded-full text-sm md:text-base font-medium transition-colors ${
                  filter === f.value
                    ? 'bg-primary-orange text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid - 2 rows of 5 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {filteredItems.map((item, index) => {
            // All items same size
            const size = 'normal';
            const sizeClasses = {
              normal: 'col-span-1 row-span-1',
              large: 'col-span-1 row-span-1',
              wide: 'col-span-1 row-span-1',
              tall: 'col-span-1 row-span-1',
            };
            
            return (
            <VideoThumbnail
              key={item.id}
              item={item}
              size={size}
              sizeClasses={sizeClasses}
              index={index}
              onSelect={() =>
                setSelectedItem({
                  src: item.src,
                  title: item.title,
                  type: item.type,
                })
              }
            />
            );
          })}
        </div>
      </div>

      {/* Lightbox/Video Player */}
      {selectedItem && (
        <>
          {selectedItem.type === 'image' ? (
            <MediaLightbox
              isOpen={!!selectedItem}
              onClose={() => setSelectedItem(null)}
              src={selectedItem.src}
              title={selectedItem.title}
              type="image"
            />
          ) : (
            <VideoPlayer
              src={selectedItem.src}
              title={selectedItem.title}
              onClose={() => setSelectedItem(null)}
              isOpen={!!selectedItem}
            />
          )}
        </>
      )}
    </section>
  );
}

