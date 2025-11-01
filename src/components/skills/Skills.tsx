"use client";

import { skills } from "@/data/skills";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

export default function Skills() {
  const categories = [
    { title: "Langages", data: skills.languages },
    { title: "Frameworks & Outils", data: skills.frameworks },
    { title: "Outils de développement", data: skills.tools },
    { title: "Soft Skills", data: skills.softSkills },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Mes Compétences
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Un aperçu de mes compétences techniques et personnelles, développées
            au fil de mes projets et expériences.
          </p>
        </motion.div>

        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <div key={category.title}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white"
              >
                {category.title}
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.data.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    level={skill.level}
                    index={index + categoryIndex * 4}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
