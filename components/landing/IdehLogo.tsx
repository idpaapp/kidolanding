'use client';

import { motion } from 'framer-motion';

interface IdehLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function IdehLogo({ className = '', width = 300, height = 200 }: IdehLogoProps) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Background Gradient */}
        <defs>
          <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="400" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF8C42" />
            <stop offset="100%" stopColor="#FF6B1A" />
          </linearGradient>
        </defs>
        <rect width="600" height="400" fill="url(#orangeGradient)" />

        {/* Cloud Speech Bubble with Children */}
        <g transform="translate(200, 40)">
          {/* Cloud Shape */}
          <path
            d="M100 30C100 20 105 15 115 15C120 15 125 17 128 20C130 18 133 17 137 17C147 17 155 25 155 35C155 40 153 44 150 47C155 48 160 53 160 60C160 68 153 75 145 75H55C45 75 40 65 40 55C40 45 45 40 55 40C57 35 60 30 60 30C60 20 65 15 75 15C80 15 85 17 88 20C90 18 93 17 97 17C107 17 115 25 115 35C115 40 113 44 110 47C115 48 120 53 120 60C120 68 113 75 105 75H15C5 75 0 65 0 55C0 45 5 40 15 40C17 35 20 30 20 30C20 20 25 15 35 15C40 15 45 17 48 20C50 18 53 17 57 17C67 17 75 25 75 35C75 40 73 44 70 47C75 48 80 53 80 60C80 68 73 75 65 75H100C110 75 115 65 115 55C115 45 110 40 100 40C98 35 100 30 100 30Z"
            fill="white"
            stroke="#06B6D4"
            strokeWidth="4"
          />
          
          {/* Children Figures - Green */}
          <circle cx="70" cy="50" r="8" fill="#22C55E" />
          <line x1="70" y1="58" x2="70" y2="70" stroke="#22C55E" strokeWidth="3" />
          <line x1="70" y1="70" x2="65" y2="75" stroke="#22C55E" strokeWidth="2" />
          <line x1="70" y1="70" x2="75" y2="75" stroke="#22C55E" strokeWidth="2" />
          <line x1="70" y1="65" x2="65" y2="68" stroke="#22C55E" strokeWidth="2" />
          <line x1="70" y1="65" x2="75" y2="68" stroke="#22C55E" strokeWidth="2" />

          {/* Orange */}
          <circle cx="90" cy="45" r="8" fill="#F97316" />
          <line x1="90" y1="53" x2="90" y2="65" stroke="#F97316" strokeWidth="3" />
          <line x1="90" y1="65" x2="85" y2="70" stroke="#F97316" strokeWidth="2" />
          <line x1="90" y1="65" x2="95" y2="70" stroke="#F97316" strokeWidth="2" />
          <line x1="90" y1="60" x2="85" y2="63" stroke="#F97316" strokeWidth="2" />
          <line x1="90" y1="60" x2="95" y2="63" stroke="#F97316" strokeWidth="2" />

          {/* Light Blue */}
          <circle cx="110" cy="50" r="8" fill="#06B6D4" />
          <line x1="110" y1="58" x2="110" y2="70" stroke="#06B6D4" strokeWidth="3" />
          <line x1="110" y1="70" x2="105" y2="75" stroke="#06B6D4" strokeWidth="2" />
          <line x1="110" y1="70" x2="115" y2="75" stroke="#06B6D4" strokeWidth="2" />
          <line x1="110" y1="65" x2="105" y2="68" stroke="#06B6D4" strokeWidth="2" />
          <line x1="110" y1="65" x2="115" y2="68" stroke="#06B6D4" strokeWidth="2" />

          {/* Red */}
          <circle cx="80" cy="60" r="8" fill="#EF4444" />
          <line x1="80" y1="68" x2="80" y2="80" stroke="#EF4444" strokeWidth="3" />
          <line x1="80" y1="80" x2="75" y2="85" stroke="#EF4444" strokeWidth="2" />
          <line x1="80" y1="80" x2="85" y2="85" stroke="#EF4444" strokeWidth="2" />
          <line x1="80" y1="75" x2="75" y2="78" stroke="#EF4444" strokeWidth="2" />
          <line x1="80" y1="75" x2="85" y2="78" stroke="#EF4444" strokeWidth="2" />

          {/* Dark Blue */}
          <circle cx="100" cy="60" r="8" fill="#1E3A5F" />
          <line x1="100" y1="68" x2="100" y2="80" stroke="#1E3A5F" strokeWidth="3" />
          <line x1="100" y1="80" x2="95" y2="85" stroke="#1E3A5F" strokeWidth="2" />
          <line x1="100" y1="80" x2="105" y2="85" stroke="#1E3A5F" strokeWidth="2" />
          <line x1="100" y1="75" x2="95" y2="78" stroke="#1E3A5F" strokeWidth="2" />
          <line x1="100" y1="75" x2="105" y2="78" stroke="#1E3A5F" strokeWidth="2" />
        </g>

        {/* Main Text "آیده" */}
        <g transform="translate(150, 140)">
          <text
            x="150"
            y="80"
            fontSize="80"
            fontWeight="bold"
            fill="white"
            stroke="#06B6D4"
            strokeWidth="3"
            textAnchor="middle"
            fontFamily="Vazirmatn, sans-serif"
            style={{ filter: 'drop-shadow(3px 3px 6px rgba(0,0,0,0.3))' }}
          >
            آیده
          </text>
          {/* Two circles below text */}
          <circle cx="120" cy="100" r="12" fill="white" stroke="#06B6D4" strokeWidth="3" />
          <circle cx="180" cy="100" r="12" fill="white" stroke="#06B6D4" strokeWidth="3" />
        </g>

        {/* Bottom Banner with Rainbow Stripes */}
        <g transform="translate(50, 320)">
          {/* Outer Green Stripe */}
          <rect x="0" y="0" width="500" height="50" rx="25" fill="#C8E6C9" />
          {/* Yellow Stripe */}
          <rect x="5" y="5" width="490" height="40" rx="20" fill="#FFF9C4" />
          {/* Orange Stripe */}
          <rect x="10" y="10" width="480" height="30" rx="15" fill="#FFE0B2" />
          {/* Pink Stripe */}
          <rect x="15" y="15" width="470" height="20" rx="10" fill="#FFD1DC" />
          {/* Inner Dark Green Stripe */}
          <rect x="20" y="20" width="460" height="10" rx="5" fill="#22C55E" />
          
          {/* Text inside banner */}
          <text
            x="250"
            y="28"
            fontSize="18"
            fontWeight="600"
            fill="white"
            textAnchor="middle"
            fontFamily="Vazirmatn, sans-serif"
          >
            مهد کودک و پیش دبستانی
          </text>
        </g>
      </svg>
    </motion.div>
  );
}

