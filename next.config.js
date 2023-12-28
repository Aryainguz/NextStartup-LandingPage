/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['images.unsplash.com', 'images.pexels.com'],
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
        ],
      },
}

module.exports = nextConfig
