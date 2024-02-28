/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "adaired.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
