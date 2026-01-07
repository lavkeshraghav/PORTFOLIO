import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "api.charlinasweeps.co.in"],
    unoptimized: true,
  },
  // output: "export",
};

export default nextConfig;
