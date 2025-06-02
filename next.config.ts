import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true, // Полное отключение проверки типов при сборке
  },
  eslint: {
    ignoreDuringBuilds: true, // Отключение ESLint проверок
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      }
    ]
  }
};

export default nextConfig;
