'use client';

import { useState, useRef, useEffect, memo, useMemo } from 'react';
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

const VideoThumbnail = memo(function VideoThumbnail({ item, size, sizeClasses, index, onSelect }: VideoThumbnailProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Intersection Observer - فقط وقتی در viewport است thumbnail بساز
  useEffect(() => {
    if (item.type !== 'video' || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isInView && !isLoading) {
            setIsInView(true);
            setIsLoading(true);
          }
        });
      },
      { rootMargin: '50px' } // 50px قبل از رسیدن به viewport شروع کن
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [item.type, isInView, isLoading]);

  // فقط وقتی در viewport است thumbnail بساز
  useEffect(() => {
    if (item.type !== 'video' || !isInView || !videoRef.current || isLoading) return;

    const video = videoRef.current;
    let isCancelled = false;
    
    const handleLoadedMetadata = () => {
      if (isCancelled) return;
      // برو به وسط ویدیو
      if (video.duration && video.duration > 0) {
        video.currentTime = video.duration / 2;
      } else {
        video.currentTime = 1;
      }
    };

    const handleSeeked = () => {
      if (isCancelled || !canvasRef.current) return;
      // وقتی به موقعیت رسید، فریم را بگیر
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx && video.videoWidth > 0 && video.videoHeight > 0) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const url = canvas.toDataURL('image/jpeg', 0.7); // کیفیت کمتر برای سرعت بیشتر
        setThumbnailUrl(url);
        setIsLoading(false);
      }
    };

    const handleCanPlay = () => {
      if (isCancelled) return;
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

    if (video.readyState >= 1) {
      handleCanPlay();
    }

    return () => {
      isCancelled = true;
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('seeked', handleSeeked);
      video.removeEventListener('loadeddata', handleCanPlay);
    };
  }, [item.type, item.src, isInView, isLoading]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: Math.min(index * 0.02, 0.1), ease: [0.25, 0.1, 0.25, 1] }}
      className={`relative ${sizeClasses[size]} rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-shadow aspect-square`}
      onClick={onSelect}
    >
      {item.type === 'video' ? (
        <>
          {isInView && (
            <video
              ref={videoRef}
              src={item.src}
              className="hidden"
              muted
              playsInline
              preload="metadata"
              crossOrigin="anonymous"
            />
          )}
          <canvas ref={canvasRef} className="hidden" />
          {thumbnailUrl ? (
            <Image
              src={thumbnailUrl}
              alt={item.title || 'گالری'}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              unoptimized
              priority={index < 4}
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
          loading={index < 4 ? "eager" : "lazy"}
          priority={index < 4}
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
});

export function GallerySection({ data }: GallerySectionProps) {
  const [filter, setFilter] = useState<FilterType>('all');
  const [selectedItem, setSelectedItem] = useState<{
    src: string;
    title?: string;
    type: 'image' | 'video';
  } | null>(null);

  const filters = useMemo(() => [
    { label: 'همه', value: 'all' as FilterType },
    { label: 'تصاویر', value: 'image' as FilterType },
    { label: 'ویدیوها', value: 'video' as FilterType },
  ], []);

  const filteredItems = useMemo(() => 
    data.gallery.filter(
      (item) => filter === 'all' || item.type === filter
    ),
    [data.gallery, filter]
  );

  return (
    <section id="gallery" className="py-20 md:py-24 bg-gradient-to-b from-white via-pastel-pink/15 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
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

