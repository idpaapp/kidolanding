import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import './globals.css';

const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  variable: '--font-vazirmatn',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'مهد کودک و پیش دبستانی ایده',
  description: 'جایی که کودکان با عشق رشد می‌کنند',
  openGraph: {
    title: 'مهد کودک و پیش دبستانی ایده',
    description: 'جایی که کودکان با عشق رشد می‌کنند',
    type: 'website',
    locale: 'fa_IR',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

