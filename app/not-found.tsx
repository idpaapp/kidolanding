import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-cyan-50">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">صفحه پیدا نشد</h2>
        <p className="text-gray-600 mb-8">صفحه‌ای که دنبال آن هستید وجود ندارد.</p>
        <Link
          href="/"
          className="bg-primary-orange text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-orange-dark transition-colors"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
}

