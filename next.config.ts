import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oat-project-img.sirasith.net",
        port: "",
        pathname: "/**", // อนุญาตทุกโฟลเดอร์ใน R2 นี้
      },
    ],
  },
};

export default nextConfig;
