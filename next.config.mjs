/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/home", destination: "/en", permanent: false },
      { source: "/family/home", destination: "/family/en", permanent: false },
    ];
  },
};

export default nextConfig;
