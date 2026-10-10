/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  // Proxy Protection: Cloudflare Orange Cloud 104.x.x.x hides Vercel origin
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Forwarded-For', value: '104.x.x.x' },
          { key: 'X-Proxy-Protected', value: 'Cloudflare-Tunnel' }
        ]
      }
    ]
  }
}

module.exports = nextConfig
