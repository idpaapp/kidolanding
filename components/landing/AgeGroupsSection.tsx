'use client';

import { motion } from 'framer-motion';
import { Baby, Baby as Toddler, Users, BookOpen, GraduationCap } from 'lucide-react';
import type { KindergartenLanding } from '@/lib/kindergarten-data';

interface AgeGroupsSectionProps {
  data: KindergartenLanding;
}

const iconMap = {
  pink: Baby,        // شیرخوار - Baby icon
  yellow: Toddler,  // نوپا - Baby/Toddler icon
  green: Users,      // کودکستان - Users/Group icon
  blue: BookOpen,    // پیش دبستان ۱ - Book icon
  purple: GraduationCap, // پیش دبستان ۲ - Graduation cap
};

const colorClasses = {
  pink: 'bg-pastel-pink border-pastel-pink/50 text-gray-800',
  yellow: 'bg-pastel-yellow border-pastel-yellow/50 text-gray-800',
  green: 'bg-pastel-green border-pastel-green/50 text-gray-800',
  blue: 'bg-pastel-blue border-pastel-blue/50 text-gray-800',
  purple: 'bg-pastel-purple border-pastel-purple/50 text-gray-800',
};

export function AgeGroupsSection({ data }: AgeGroupsSectionProps) {
  return (
    <section id="age-groups" className="py-20 md:py-24 bg-gradient-to-b from-pastel-red/40 via-pastel-red/50 to-pastel-red/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
            گروه‌های سنی
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            هر کودک در هر سن نیازهای خاص خود را دارد. ما با برنامه‌ریزی دقیق و تخصصی برای هر گروه سنی، 
            محیطی مناسب و امن فراهم کرده‌ایم که در آن کودکان بتوانند با توجه به سن و توانایی‌هایشان 
            رشد کنند و مهارت‌های لازم را کسب نمایند. از مراقبت ویژه برای شیرخواران تا آماده‌سازی کامل 
            برای ورود به دبستان، ما در کنار فرزندان شما هستیم.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {data.ageGroups.map((group, index) => {
            const Icon = iconMap[group.color] || Baby;
            return (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: Math.min(index * 0.03, 0.15), ease: [0.25, 0.1, 0.25, 1] }}
                className={`${colorClasses[group.color]} rounded-2xl md:rounded-3xl p-4 md:p-6 border-2 cursor-pointer transition-shadow shadow-md hover:shadow-xl relative overflow-hidden group`}
              >
                {/* Decorative gradient background */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${colorClasses[group.color].split(' ')[0]}/20 rounded-full blur-2xl group-hover:opacity-30 transition-opacity`} />
                
                <div className="relative z-10">
                  {/* Icon with background circle */}
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/80 flex items-center justify-center shadow-lg`}>
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-gray-800" />
                    </div>
                  </div>
                  
                  <h3 className="text-base md:text-xl font-bold mb-2 text-center text-gray-800">{group.name}</h3>
                  <p className="text-xs md:text-sm text-center mb-2 font-semibold text-gray-700">{group.ageRange}</p>
                  {group.description && (
                    <p className="text-xs md:text-sm text-center text-gray-600 leading-relaxed">{group.description}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

