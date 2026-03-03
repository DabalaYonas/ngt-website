/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
  },
  async redirects() {
    return [
      {
        source: '/index.php/contact',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/index.php/projects',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/index.php/about',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/index.php/services',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/index.php/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },
}

export default nextConfig