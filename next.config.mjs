/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: "img.clerk.com",
            pathname: '**',
          },
        ],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: "utfs.io",
            pathname: '**',
          },
        ],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: "images.unsplash.com",
            pathname: '**',
          },
        ],
      }
};

export default nextConfig;
