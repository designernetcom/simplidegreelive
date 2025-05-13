/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "store.learningroutes.in",
        pathname: "/images/**",
      },
    ],
  },

};

export default nextConfig;
