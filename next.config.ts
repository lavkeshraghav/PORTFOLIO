import type { NextConfig } from "next";

const repoName = "PORTFOLIO";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: `/${repoName}`,
  images: {
    domains: ["localhost", "api.charlinasweeps.co.in"],
    unoptimized: true,
  },
  // output: "export",
};

export default nextConfig;
