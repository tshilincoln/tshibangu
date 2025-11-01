"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  techs: string[];
  category: string;
  status: string;
  link: string;
  image?: string;
}

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
    >
      <div className="h-44 md:h-56 bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-white overflow-hidden">
        {project.image ? (
          <div className="relative w-full h-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="text-center px-4">
            <h4 className="text-xl font-bold">{project.title}</h4>
            <p className="text-sm mt-1 opacity-90">{project.status}</p>
          </div>
        )}
      </div>

      <div className="p-4">
        <p className="text-gray-700 dark:text-gray-200 mb-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techs.map((t) => (
            <span
              key={t}
              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <Link
            href={`/projects/${project.id}`}
            className="text-blue-600 dark:text-blue-400 font-medium"
          >
            Voir les détails
          </Link>
          <a
            href={project.link ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            Code / Démo
          </a>
        </div>
      </div>
    </motion.article>
  );
}
