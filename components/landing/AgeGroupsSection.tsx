'use client';

import { motion } from 'framer-motion';
import { Baby, Sparkles, GraduationCap, BookOpen, School } from 'lucide-react';
import type { KindergartenLanding } from '@/lib/kindergarten-data';

interface AgeGroupsSectionProps {
  data: KindergartenLanding;
}

const iconMap = {
  pink: Baby,
  yellow: Sparkles,
  green: GraduationCap,
  blue: BookOpen,
  purple: School,
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
            گروه‌های سنی
          </h2>
          <p className="text-base md:text-xl text-gray-600">انتخاب مناسب برای هر سن</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {data.ageGroups.map((group, index) => {
            const Icon = iconMap[group.color] || Baby;
            return (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className={`${colorClasses[group.color]} rounded-2xl md:rounded-3xl p-4 md:p-6 border-2 cursor-pointer transition-all shadow-md hover:shadow-xl`}
              >
                <Icon className="w-8 h-8 md:w-12 md:h-12 mb-3 md:mb-4 mx-auto" />
                <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 text-center">{group.name}</h3>
                <p className="text-xs md:text-sm text-center mb-1 md:mb-2 font-medium">{group.ageRange}</p>
                {group.description && (
                  <p className="text-xs text-center opacity-80">{group.description}</p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

