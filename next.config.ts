import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            { hostname: "originui.com" },
            { hostname: "www.launchuicomponents.com" },
        ],
    },
};

export default nextConfig;
