import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/nexuslabs-website',
  assetPrefix: '/nexuslabs-website/',
};

export default nextConfig;