import type { Metadata } from "next";

const SITE_NAME = "Tshibangu Mukendi Abraham";
const SITE_DESCRIPTION =
  "Portfolio de Tshibangu Abraham — Développeur Web & Mobile. Projets, compétences et contact.";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const DEFAULT_OG = "/assets/og/default.svg";

export function makeMetadata({
  title,
  description,
  image,
  path,
  type = "website",
}: {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  type?: "website" | "article";
}): Metadata {
  const resolvedTitle = title ? `${title} — ${SITE_NAME}` : SITE_NAME;
  const resolvedDescription = description || SITE_DESCRIPTION;
  const url = path ? new URL(path, SITE_URL).toString() : SITE_URL;
  const imageUrl = image
    ? new URL(image, SITE_URL).toString()
    : new URL(DEFAULT_OG, SITE_URL).toString();

  const metadata: Metadata = {
    title: resolvedTitle,
    description: resolvedDescription,
    metadataBase: new URL(SITE_URL),
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url,
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title || SITE_NAME,
        },
      ],
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: [imageUrl],
    },
  };

  // (Note) we intentionally omit non-standard openGraph fields to keep TypeScript types clean.
  return metadata;
}
