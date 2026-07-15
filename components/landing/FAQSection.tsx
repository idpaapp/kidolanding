'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'مهد کودک ایده کجاست؟',
    answer:
      'مهد کودک و پیش دبستانی ایده در شهرآرا، محله گیشا، خیابان ۱۵ پلاک ۴۲ واقع شده است. دسترسی آسان از بزرگراه‌ها و خیابان‌های اصلی منطقه.',
  },
  {
    question: 'ساعات کاری مهد ایده چیست؟',
    answer:
      'شنبه تا چهارشنبه از ساعت ۸ صبح تا ۲ بعدازظهر. امکان تمدید حضور کودک تا ساعت ۴ بعدازظهر نیز برای خانواده‌های شاغل وجود دارد.',
  },
  {
    question: 'مهد ایده برای چه سنینی مناسب است؟',
    answer:
      'مهد کودک و پیش دبستانی ایده پذیرای کودکان از ۳ ماه تا ۶ سال در گروه‌های شیرخوار، نوپا، کودکستان و پیش‌دبستانی ۱ و ۲ است.',
  },
  {
    question: 'چه کلاس‌های تخصصی در مهد ایده برگزار می‌شود؟',
    answer:
      'کلاس‌های تخصصی شامل زبان انگلیسی، نینجا، موسیقی، هنر و خلاقیت، مهارت‌های اجتماعی، ژیمناستیک، ریتم و گیم، کاردستی و سینما کودک است.',
  },
  {
    question: 'شماره تماس مهد کودک ایده چیست؟',
    answer:
      'برای ثبت‌نام، بازدید و مشاوره رایگان می‌توانید با شماره ۰۲۱-۸۸۴۸۴۷۹۷ تماس بگیرید یا از طریق واتساپ با ما در ارتباط باشید.',
  },
  {
    question: 'آیا مهد ایده ناهار و صبحانه سرو می‌کند؟',
    answer:
      'بله، صبحانه مقوی و ناهار گرم و سالم برای کودکان تهیه می‌شود. تغذیه سالم و بهداشتی یکی از اولویت‌های مهد کودک ایده است.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-24 bg-gradient-to-b from-white to-pastel-blue/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
            سوالات متداول درباره مهد ایده
          </h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
            پاسخ سوالات رایج والدین درباره مهدکودک و پیش‌دبستانی ایده در شهرآرا
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl border border-pastel-blue/30 shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-right"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-base md:text-lg font-bold text-gray-800">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-pink-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6">
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
