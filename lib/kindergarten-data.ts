export interface AgeGroup {
  name: string;
  ageRange: string;
  color: 'pink' | 'yellow' | 'green' | 'blue' | 'purple';
  description?: string;
  icon?: string;
}

export interface ExtraClass {
  name: string;
  description: string;
  icon: 'Swords' | 'Music' | 'Languages';
  gradient: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
  color: 'yellow' | 'cyan' | 'pink';
}

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  thumbnail: string;
  title?: string;
  duration?: string;
  size?: 'normal' | 'large' | 'wide' | 'tall';
}

export interface Testimonial {
  id: string;
  parentName: string;
  childName: string;
  avatar: string;
  rating: number;
  text: string;
}

export interface SocialLinks {
  instagram?: string;
  telegram?: string;
  whatsapp?: string;
}

export interface KindergartenLanding {
  slug: string;
  name: string;
  tagline: string;
  logo: string;
  phone: string;
  address: string;
  workingDays: string;
  workingHours: string;
  extendedHours: string;
  platformUrl: string;
  ageGroups: AgeGroup[];
  extraClasses: ExtraClass[];
  features: Feature[];
  gallery: GalleryItem[];
  testimonials: Testimonial[];
  socialLinks: SocialLinks;
}

export const idehKindergarten: KindergartenLanding = {
  slug: 'ideh',
  name: 'مهد کودک و پیش دبستانی ایده',
  tagline: 'جایی که کودکان با عشق رشد می‌کنند',
  logo: '/images/landing/ideh/logo.png',
  phone: '021-88484797',
  address: 'گیشا، خیابان ۱۵ پلاک ۴۲',
  workingDays: 'شنبه تا چهارشنبه',
  workingHours: '۸:۰۰ تا ۱۴:۰۰',
  extendedHours: 'تمدید تا ۱۶:۰۰',
  platformUrl: 'https://ideh.kidoban.ir',
  ageGroups: [
    {
      name: 'شیرخوار',
      ageRange: '۳ تا ۱۲ ماه',
      color: 'pink',
      description: 'مراقبت و پرورش نوزادان',
    },
    {
      name: 'نوپا',
      ageRange: '۱ تا ۲ سال',
      color: 'yellow',
      description: 'آموزش و بازی برای کودکان نوپا',
    },
    {
      name: 'کودکستان',
      ageRange: '۲ تا ۴ سال',
      color: 'green',
      description: 'آموزش مهارت‌های اولیه',
    },
    {
      name: 'پیش دبستان ۱',
      ageRange: '۴ تا ۵ سال',
      color: 'blue',
      description: 'آماده‌سازی برای مدرسه',
    },
    {
      name: 'پیش دبستان ۲',
      ageRange: '۵ تا ۶ سال',
      color: 'purple',
      description: 'آماده‌سازی کامل برای دبستان',
    },
  ],
  extraClasses: [
    {
      name: 'نینجا',
      description: 'ورزش و تربیت بدنی',
      icon: 'Swords',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      name: 'موسیقی',
      description: 'آموزش موسیقی کودک',
      icon: 'Music',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'زبان انگلیسی',
      description: 'آموزش زبان با بازی',
      icon: 'Languages',
      gradient: 'from-blue-500 to-cyan-500',
    },
  ],
  features: [
    {
      title: 'فضای آموزشی مدرن',
      description: 'کلاس‌های مجهز و محیطی امن برای یادگیری',
      icon: 'School',
      color: 'yellow',
    },
    {
      title: 'مربیان مجرب و مهربان',
      description: 'تیم متخصص با تجربه در آموزش کودکان',
      icon: 'Users',
      color: 'cyan',
    },
    {
      title: 'تغذیه سالم و بهداشتی',
      description: 'غذای تازه و سالم برای رشد کودکان',
      icon: 'Apple',
      color: 'pink',
    },
  ],
  gallery: [
    {
      id: '1',
      type: 'image',
      src: '/res/photo_1.jpg',
      thumbnail: '/res/photo_1.jpg',
      title: 'فعالیت‌های آموزشی',
      size: 'normal', // normal, large, wide, tall
    },
    {
      id: '2',
      type: 'image',
      src: '/res/photo_2.jpg',
      thumbnail: '/res/photo_2.jpg',
      title: 'بازی و سرگرمی',
      size: 'large',
    },
    {
      id: '3',
      type: 'video',
      src: '/res/video_1.mp4',
      thumbnail: '/res/video_1.mp4',
      duration: '0:45',
      title: 'فعالیت‌های روزانه',
      size: 'normal',
    },
    {
      id: '4',
      type: 'image',
      src: '/res/photo_4.jpg',
      thumbnail: '/res/photo_4.jpg',
      title: 'کارگاه هنری',
      size: 'wide',
    },
    {
      id: '5',
      type: 'image',
      src: '/res/photo_5.jpg',
      thumbnail: '/res/photo_5.jpg',
      title: 'کلاس درس',
      size: 'normal',
    },
    {
      id: '6',
      type: 'video',
      src: '/res/video_2.mp4',
      thumbnail: '/res/video_2.mp4',
      duration: '0:50',
      title: 'فعالیت‌های ورزشی',
      size: 'normal',
    },
    {
      id: '7',
      type: 'image',
      src: '/res/photo_7.jpg',
      thumbnail: '/res/photo_7.jpg',
      title: 'بازی در حیاط',
      size: 'tall',
    },
    {
      id: '8',
      type: 'image',
      src: '/res/photo_8.jpg',
      thumbnail: '/res/photo_8.jpg',
      title: 'فعالیت‌های گروهی',
      size: 'normal',
    },
    {
      id: '9',
      type: 'video',
      src: '/res/video_3.mp4',
      thumbnail: '/res/video_3.mp4',
      duration: '0:40',
      title: 'برنامه‌های فرهنگی',
      size: 'normal',
    },
    {
      id: '10',
      type: 'video',
      src: '/res/video_4.mp4',
      thumbnail: '/res/video_4.mp4',
      duration: '0:55',
      title: 'لحظات شاد',
      size: 'normal',
    },
  ],
  testimonials: [
    {
      id: '1',
      parentName: 'مریم احمدی',
      childName: 'آرش',
      avatar: '/images/avatars/1.jpg',
      rating: 5,
      text: 'آرش از وقتی به مهد ایده اومده خیلی تغییر کرده. قبلاً خیلی خجالتی بود ولی الان خیلی اجتماعی شده. مربی‌ها خیلی صبور و مهربانن.',
    },
    {
      id: '2',
      parentName: 'علی رضایی',
      childName: 'سارا',
      avatar: '/images/avatars/2.jpg',
      rating: 5,
      text: 'سارا هر روز صبح با ذوق به مهد میره. برنامه‌های آموزشی‌شون خیلی خوبه و بچه‌ها رو خسته نمی‌کنه. غذاها هم تازه و سالمه.',
    },
    {
      id: '3',
      parentName: 'فاطمه کریمی',
      childName: 'امیر',
      avatar: '/images/avatars/3.jpg',
      rating: 5,
      text: 'امیر عاشق کلاس نینجاشه. میگه هر روز چیزای جدید یاد می‌گیره. فضای مهد هم خیلی تمیز و مرتبه. خیالم راحته که اونجا هست.',
    },
  ],
  socialLinks: {
    instagram: 'https://www.instagram.com/ideh.kindergarten/',
  },
};

export function getKindergartenBySlug(slug: string): KindergartenLanding | null {
  if (slug === 'ideh') {
    return idehKindergarten;
  }
  return null;
}

