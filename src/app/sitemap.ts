import { env } from "@/env";
import { type MetadataRoute } from "next";
import { posts } from "./blog/data/posts";
import { tags } from "./blog/data/tags";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postsSitemap = posts.map((post) => ({
    url: `${env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.createdAt),
  }));

  const tagsSitemap = Object.values(tags).map((tag) => ({
    url: `${env.NEXT_PUBLIC_BASE_URL}/blog/tags/${tag.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: `${env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${env.NEXT_PUBLIC_BASE_URL}/vet-app`,
      lastModified: new Date(),
    },
    {
      url: `${env.NEXT_PUBLIC_BASE_URL}/blog`,
      lastModified: new Date(),
    },
    ...postsSitemap,
    ...tagsSitemap,
  ];
}
