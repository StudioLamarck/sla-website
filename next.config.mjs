/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/codev',
        destination: '/jam-session',
        permanent: false,
      },
      {
        source: '/jam-sessions',
        destination: '/jam-session',
        permanent: false,
      },
      {
        source: '/v0',
        destination: '/',
        permanent: false,
      },
      {
        source: '/v1',
        destination: '/',
        permanent: false,
      },
      {
        source: '/v2',
        destination: '/',
        permanent: false,
      },
      {
        source: '/v3',
        destination: '/',
        permanent: false,
      },
      {
        source: '/v4',
        destination: '/',
        permanent: false,
      },
      {
        source: '/v5',
        destination: '/',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
