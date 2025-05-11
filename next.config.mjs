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
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]__[hash:base64:5]",
  },
};

export default nextConfig;
