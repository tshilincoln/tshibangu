"use client";

import { motion } from "framer-motion";

export default function About() {
  const strengths = [
    {
      title: "Esprit d'analyse",
      description: "Approche méthodique et rigoureuse des problèmes",
    },
    {
      title: "Formation numérique",
      description: "Expérience en pédagogie et transmission du savoir",
    },
    {
      title: "Innovation",
      description:
        "Passion pour les nouvelles technologies et la documentation",
    },
    {
      title: "Collaboration",
      description: "Capacité à travailler en équipe et à s'adapter",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            À propos
          </h2>

          <div className="mb-12">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
            >
              Je suis un développeur web et mobile basé à Mbuji-Mayi (RDC),
              diplômé en Génie Informatique. Passionné par la technologie et
              l&apos;éducation numérique, j&apos;aime concevoir des applications
              modernes, accessibles et à fort impact social.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              Je suis également porteur du projet InfoScool, visant à équiper
              les écoles de laboratoires informatiques pour favoriser
              l&apos;accès à la formation digitale.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                  {strength.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-blue-50 dark:bg-gray-800 p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              CV & Diplômes
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-6">
              <li>📚 Licence en Génie Informatique</li>
              <li>🌐 Formations en Django, Flutter, Python</li>
              <li>🚀 Certifications en développement web </li>
            </ul>
            <a
              href="/document/cv_AbrahamTshibangu.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Télécharger mon CV
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
