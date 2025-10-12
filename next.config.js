/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/About",
        destination: "/About/about",
      },
      {
        source: "/Guide",
        destination: "/Guide/guide",
      },
    ];
  },
  images: {
    domains: ['s.mxmcdn.net'],
  },
};

module.exports = nextConfig;
