/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'demo.adaired.com',
              pathname: '**',
            },
          ],
      },
};

export default nextConfig;
