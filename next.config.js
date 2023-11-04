/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/About",
        destination: "/About/about",
      },
    ];
  },
};

module.exports = nextConfig;
