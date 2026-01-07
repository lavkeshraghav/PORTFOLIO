import type { NextConfig } from "next";

const repoName = "PORTFOLIO"; // must match your GitHub repo name EXACTLY

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Required for GitHub Pages
  output: "export",

  // Required when repo is not username.github.io
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,

  images: {
    unoptimized: true, // required for next/image on GitHub Pages
  },
};

export default nextConfig;
