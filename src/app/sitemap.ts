import { env } from "@/env";
import { type MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date(),
    },
  ];
}
