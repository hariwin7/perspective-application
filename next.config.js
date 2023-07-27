/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "perspective.imgix.net",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
