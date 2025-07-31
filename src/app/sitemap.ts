import { env } from "@/env";
import { type MetadataRoute } from "next";
import { posts } from "../features/blog/data/posts";
import { tags } from "../features/blog/data/tags";
import { db } from "@/server/db";

export const revalidate = 86400; // 1 day

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
    select: {
      term: true,
    },
  });

  const termsSitemap = searchTerms.map(({ term }) => ({
    url: `${env.NEXT_PUBLIC_BASE_URL}/blog/search/${term}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: `${env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${env.NEXT_PUBLIC_BASE_URL}/book-app`,
      lastModified: new Date(),
    },
    {
      url: `${env.NEXT_PUBLIC_BASE_URL}/blog`,
      lastModified: new Date(),
    },
    ...postsSitemap,
    ...tagsSitemap,
    ...termsSitemap,
  ];
}
