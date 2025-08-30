import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow ngrok tunnel origin in dev
  allowedDevOrigins: ["*"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "testimonialshub.s3.ap-south-1.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
