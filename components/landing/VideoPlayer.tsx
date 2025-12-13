'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Maximize, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoPlayerProps {
  src: string;
  title?: string;
  onClose: () => void;
  isOpen?: boolean;
}

export function VideoPlayer({ src, title, onClose, isOpen = true }: VideoPlayerProps) {
  if (!isOpen) return null;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!document.fullscreenElement) {
      video.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="video-player"
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
          className="relative w-full max-w-5xl mx-auto bg-black rounded-lg overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            aria-label="بستن"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Video Container */}
          <div className="relative w-full aspect-video">
            <video
              ref={videoRef}
              src={src}
              className="w-full h-full object-contain"
              controls={false}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            />
          </div>

          {/* Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            {title && (
              <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
            )}
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
                aria-label={isPlaying ? 'توقف' : 'پخش'}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-white" />
                ) : (
                  <Play className="w-6 h-6 text-white" />
                )}
              </button>
              <button
                onClick={toggleFullscreen}
                className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
                aria-label="تمام صفحه"
              >
                <Maximize className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

