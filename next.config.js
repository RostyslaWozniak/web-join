/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "njmm8e6312.ufs.sh",
        pathname: `/f/*`,
      },
    ],
  },
  headers: async () => [
    {
      source: "/_next/image",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable", // Strong cache rules
        },
      ],
    },
  ],
};

export default config;
