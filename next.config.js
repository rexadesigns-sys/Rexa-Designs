/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const shenuSachiUrl = process.env.SHENU_SACHI_URL || 'http://localhost:3001';
    return [
      {
        source: '/shenu-and-sachi-wedding-invitation',
        destination: `${shenuSachiUrl}/shenu-and-sachi-wedding-invitation`,
      },
      {
        source: '/shenu-and-sachi-wedding-invitation/:path*',
        destination: `${shenuSachiUrl}/shenu-and-sachi-wedding-invitation/:path*`,
      },
    ];
  },
};

export default nextConfig;
