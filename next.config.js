/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Remove deprecated appDir option - it's enabled by default in Next.js 13+
  },
  images: {
    domains: [],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
}

module.exports = nextConfig 