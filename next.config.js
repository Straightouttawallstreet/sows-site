/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/contact-us", destination: "/#contact", permanent: true },
    ];
  },
};

module.exports = nextConfig;
