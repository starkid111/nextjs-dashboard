import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: 'incremental'
  }
};

module.exports = {
  serverExternalPackages: ['bcrypt'],
};

export default nextConfig;
