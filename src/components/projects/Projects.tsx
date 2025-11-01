"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const categories = ["all", "web", "mobile", "data"];

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">
            Projets
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Projets phares et mini-projets montrant mes compétences sur
            différentes stacks.
          </p>
        </motion.div>

        <div className="flex justify-center gap-3 mb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full ${
                filter === c
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              }`}
            >
              {c === "all" ? "Tous" : c.charAt(0).toUpperCase() + c.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
