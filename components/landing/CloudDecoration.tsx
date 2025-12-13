'use client';

import { motion } from 'framer-motion';

interface CloudDecorationProps {
  className?: string;
  delay?: number;
}

export function CloudDecoration({ className = '', delay = 0 }: CloudDecorationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      <svg
        width="120"
        height="80"
        viewBox="0 0 120 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          d="M30 40C30 30 35 25 45 25C50 25 55 27 58 30C60 28 63 27 67 27C77 27 85 35 85 45C85 50 83 54 80 57C85 58 90 63 90 70C90 78 83 85 75 85H25C15 85 10 75 10 65C10 55 15 50 25 50C27 45 30 40 30 40Z"
          fill="white"
          fillOpacity="0.3"
        />
      </svg>
    </motion.div>
  );
}

