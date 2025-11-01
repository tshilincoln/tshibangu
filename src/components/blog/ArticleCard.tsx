"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ArticleCard({
  article,
}: {
  article: { slug: string; title: string; date: string; excerpt: string };
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
    >
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {article.title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        {new Date(article.date).toLocaleDateString()}
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{article.excerpt}</p>
      <Link
        href={`/blog/${article.slug}`}
        className="text-blue-600 dark:text-blue-400 font-medium"
      >
        {"Lire l'article →"}
      </Link>
    </motion.article>
  );
}
