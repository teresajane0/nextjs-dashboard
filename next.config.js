/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/dashboard/sotto',
        destination: '/portfolio/index.html',
      },
    ];
  },
};

module.exports = nextConfig;