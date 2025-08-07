import { env } from "@/env";
import { type MetadataRoute } from "next";
import { posts } from "../features/blog/data/posts";
import { tags } from "../features/blog/data/tags";
import { db } from "@/server/db";

const landingPages = [
  { id: 1, href: "/book-app" },
  { id: 2, href: "/book-app/weterynarze" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postsSitemap = posts.map((post) => ({
    url: `${env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.createdAt),
  }));

  const tagsSitemap = Object.values(tags).map((tag) => ({
    url: `${env.NEXT_PUBLIC_BASE_URL}/blog/tags/${tag.slug}`,
    lastModified: new Date(),
  }));

  const searchTerms = await db.searchTerm.findMany({
    where: {
      resultLenght: {
        gt: 0,
      },
    },
    select: {
      term: true,
    },
  });

  const termsSitemap = searchTerms.map(({ term }) => ({
    url: `${env.NEXT_PUBLIC_BASE_URL}/blog/search/${term}`,
    lastModified: new Date(),
  }));

  const landingPagesSitemap = landingPages.map(({ href }) => ({
    url: `${env.NEXT_PUBLIC_BASE_URL}${href}`,
    lastModified: new Date(),
    priority: 1,
  }));

  return [
    {
      url: `${env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${env.NEXT_PUBLIC_BASE_URL}/blog`,
      lastModified: new Date(),
    },
    ...landingPagesSitemap,
    ...postsSitemap,
    ...tagsSitemap,
    ...termsSitemap,
  ];
}
