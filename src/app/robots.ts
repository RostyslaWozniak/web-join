import { env } from "@/env";
import { type MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/join",
          "/join/*",
          "/blog/search",
          "/blog/search/*",
          "/blog/tags",
          "/blog/tags/*",
          "/success",
          "/api",
          "/api/*",
          "/vet-research-form",
        ],
      },
    ],
    sitemap: `${env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  };
}
