import { env } from "@/env";
import { type Post } from "../data/posts";
import type { WithContext, BlogPosting } from "schema-dts";

export function generatePostJsonLd(post: Post): WithContext<BlogPosting> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.createdAt.toDateString(),
    dateModified: post.createdAt.toDateString(),
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    image: post.image,
    url: `${env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`,
    },
    publisher: {
      "@type": "Organization",
      name: "Web Join",
      logo: {
        "@type": "ImageObject",
        url: `${env.NEXT_PUBLIC_BASE_URL}/icon.ico`,
      },
    },
  };
}
