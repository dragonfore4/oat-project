import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-89a7d3afd9574669a02c5f4fce069c51.r2.dev",
        port: "",
        pathname: "/**", // อนุญาตทุกโฟลเดอร์ใน R2 นี้
      },
    ],
  },
};

export default nextConfig;
