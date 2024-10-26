import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true, // Required for static export since Next.js image optimization requires a server
  },
};

export default nextConfig;
