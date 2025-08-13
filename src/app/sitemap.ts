import { env } from "@/env";
import { type MetadataRoute } from "next";
import { posts } from "../features/blog/data/posts";
import { problemsData } from "@/features/problems/data";

const landingPages = [
  { id: 1, href: "/book-app" },
  { id: 2, href: "/book-app/weterynarze" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postsSitemap = posts.map((post) => ({
    url: `${env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.createdAt),
  }));

  const landingPagesSitemap = landingPages.map(({ href }) => ({
    url: `${env.NEXT_PUBLIC_BASE_URL}${href}`,
    lastModified: new Date(),
    priority: 1,
  }));

  const problemsPagesSitemap = problemsData.map(({ slug }) => ({
    url: `${env.NEXT_PUBLIC_BASE_URL}/problemy/${slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  return [
    {
      url: `${env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${env.NEXT_PUBLIC_BASE_URL}/blog`,
      lastModified: new Date(),
      priority: 0.6,
    },
    ...landingPagesSitemap,
    ...postsSitemap,
    ...problemsPagesSitemap,
  ];
}
