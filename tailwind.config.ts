import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: '#FFB88C', // پاستیلی نارنجی
          'orange-dark': '#FFA66B',
        },
        accent: {
          cyan: '#A8E6CF', // پاستیلی فیروزه‌ای
          'cyan-dark': '#8DD9C4',
        },
        pastel: {
          pink: '#FFD1DC', // پاستیلی صورتی
          yellow: '#FFF9C4', // پاستیلی زرد
          green: '#C8E6C9', // پاستیلی سبز
          blue: '#B3E5FC', // پاستیلی آبی
          purple: '#E1BEE7', // پاستیلی بنفش
          red: '#FFCCCB', // پاستیلی قرمز
          orange: '#FFE0B2', // پاستیلی نارنجی
          cyan: '#A8E6CF', // پاستیلی فیروزه‌ای
        },
        blue: {
          dark: '#1E3A5F', // آبی تیره
          light: '#4A90E2', // آبی روشن
        },
      },
      fontFamily: {
        sans: ['var(--font-vazirmatn)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;

