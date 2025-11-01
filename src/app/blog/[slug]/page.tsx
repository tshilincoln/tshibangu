import { notFound } from "next/navigation";
import { articles } from "@/data/articles";
import { makeMetadata } from "@/utils/metadata";

export async function generateMetadata({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const article = articles.find((a) => a.slug === resolvedParams.slug);
  if (!article) return { title: "Article introuvable" };

  return makeMetadata({
    title: article.title,
    description: article.excerpt,
    image: "/assets/og/default.svg",
    path: `/blog/${article.slug}`,
    type: "article",
  });
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return notFound();

  return (
    <main className="min-h-screen py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <article className="prose dark:prose-invert max-w-3xl">
          <h1>{article.title}</h1>
          <p className="text-sm text-gray-500">
            {new Date(article.date).toLocaleDateString()}
          </p>
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </article>
      </div>
    </main>
  );
}
