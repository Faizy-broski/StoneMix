import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Site assets come from the GitHub repo via jsDelivr (see lib/site.ts).
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/gh/Faizy-broski/StoneMix@*/**",
      },
    ],
  },
};

export default nextConfig;
