import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/tuscan-city",
        destination: "/projects/tuscan-city",
        permanent: true,
      },
      {
        source: "/espania",
        destination: "/projects/espania",
        permanent: true,
      },
      {
        source: "/espania-royale",
        destination: "/projects/espania-royale",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eldeco-group.onrender.com",
        pathname: "/api/v1/website/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3007",
        pathname: "/uploads/**",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
