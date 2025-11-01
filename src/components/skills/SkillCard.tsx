"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface SkillCardProps {
  name: string;
  icon: string;
  level: number;
  index: number;
}

export default function SkillCard({
  name,
  icon,
  level,
  index,
}: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center gap-4 mb-4">
        {icon.startsWith("/") ? (
          <div className="w-12 h-12 relative">
            <Image src={icon} alt={name} fill className="object-contain" />
          </div>
        ) : (
          <span className="text-4xl">{icon}</span>
        )}
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          {name}
        </h3>
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
        <motion.div
          className="bg-blue-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          viewport={{ once: true }}
        />
      </div>
      <span className="text-sm text-gray-600 dark:text-gray-400">
        Niveau de maîtrise: {level}%
      </span>
    </motion.div>
  );
}
