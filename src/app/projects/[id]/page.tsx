import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { makeMetadata } from "@/utils/metadata";

export async function generateMetadata({
  params,
}: {
  params: { id: string } | Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);
  if (!project) return { title: "Projet introuvable" };

  return makeMetadata({
    title: project.title,
    description: project.description,
    image: project.image || "/assets/og/default.svg",
    path: `/projects/${project.id}`,
    type: "website",
  });
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) return notFound();

  return (
    <main className="min-h-screen py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <Link href="/" className="text-blue-600 mb-6 inline-block">
          ← Retour
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          {project.image && (
            <div className="h-64 md:h-96 w-full relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="p-6">
            <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
              {project.title}
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
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

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Statut: {project.status}
            </p>

            <div className="flex gap-3">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Voir le code / démo
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
