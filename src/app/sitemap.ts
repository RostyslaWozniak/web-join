import { env } from "@/env";
import { type MetadataRoute } from "next";
import { posts } from "../features/blog/data/posts";
import { problemsData } from "@/features/problems/data";

const landingPages = [
  { id: 1, href: "/book-app", lastModified: new Date("12.09.2025") },
  {
    id: 2,
    href: "/book-app/weterynarze",
    lastModified: new Date("21.09.2025"),
    priority: 1,
  },
  {
    id: 3,
    href: "/book-app/dentysci",
    lastModified: new Date("21.09.2025"),
    priority: 1,
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postsSitemap = posts
    .filter((post) => post.published)
    .map((post) => ({
      url: `${env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.createdAt),
      priority: 0.7,
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
      lastModified: new Date("12.09.2025"),
      priority: 1,
    },
    ...landingPagesSitemap,
    {
      url: `${env.NEXT_PUBLIC_BASE_URL}/blog`,
      lastModified: new Date(
        posts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())[0]
          ?.createdAt ?? new Date(),
      ),
      priority: 0.6,
    },
    ...postsSitemap,
    ...problemsPagesSitemap,
  ];
}
