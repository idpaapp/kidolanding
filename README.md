# KidoLanding - Kindergarten Landing Page

A modern RTL Persian kindergarten landing page built with Next.js 16, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- 🎨 Modern, playful, child-friendly design
- 🇮🇷 Full RTL (Right-to-Left) support for Persian
- 📱 Fully responsive mobile-first design
- ⚡ Next.js 16 with App Router
- 🎭 Framer Motion animations
- 🖼️ Image gallery with lightbox
- 🎥 Video player with controls
- 💬 Testimonials carousel
- 🎨 Custom rainbow wave decorations
- ☁️ Cloud shape decorations

## Tech Stack

- **Next.js**: 16.0.7
- **React**: 19.2
- **TypeScript**: 5.x
- **Tailwind CSS**: 4.x
- **Framer Motion**: 12.0.0
- **Embla Carousel**: 8.5.0
- **Lucide React**: Icons
- **Radix UI**: Dialog components

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
├── app/
│   ├── landing/
│   │   └── [slug]/
│   │       └── page.tsx      # Dynamic landing page
│   ├── layout.tsx            # Root layout with RTL
│   ├── globals.css           # Global styles
│   └── not-found.tsx         # 404 page
├── components/
│   └── landing/
│       ├── LandingHeader.tsx
│       ├── HeroSection.tsx
│       ├── AgeGroupsSection.tsx
│       ├── FeaturesSection.tsx
│       ├── ExtraClassesSection.tsx
│       ├── GallerySection.tsx
│       ├── MediaLightbox.tsx
│       ├── VideoPlayer.tsx
│       ├── TestimonialsSection.tsx
│       ├── ContactSection.tsx
│       ├── LandingFooter.tsx
│       ├── RainbowWave.tsx
│       └── CloudDecoration.tsx
└── lib/
    └── kindergarten-data.ts  # Data and types
```

## Usage

Visit `/landing/ideh` to see the landing page for "مهد کودک ایده".

## Design System

### Colors

- **Primary Orange**: #F97316 / #EA580C
- **Accent Cyan**: #06B6D4 / #0891B2
- **Secondary**: Red, Green, Yellow
- **Background**: Warm orange gradient (#FFF7ED to #FFEDD5)

### Typography

- **Font**: Vazirmatn (Google Fonts)
- **Direction**: RTL (Right-to-Left)

## License

MIT

