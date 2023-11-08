/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL
  },
  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: `${process.env.API_URL}/images/:path*`
      }
    ]
  },
  images: {
    domains: ['localhost']
  }
}

module.exports = nextConfig
