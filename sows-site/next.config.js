/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true },
  async redirects() {
    return [
      // Example: redirect old Wix path to new contact section
      { source: "/contact-us", destination: "/#contact", permanent: true },
    ];
  },
};
module.exports = nextConfig;
