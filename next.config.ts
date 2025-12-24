import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/commerce",
  images: {
    unoptimized: true,
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
};

export default nextConfig;
