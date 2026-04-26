/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true, // Use false if this is only a temporary move
      },
    ]
  },
}

export default nextConfig;