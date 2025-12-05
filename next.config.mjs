/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ ALLOW YOUR LOGO URL HERE
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "occasional-moccasin-msnnhl2fjq.edgeone.app",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/services',
        permanent: false,
      },
    ];
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.(jsx|tsx)$/,
      exclude: [/node_modules/],
      use: [
        {
          loader: '@dhiwise/component-tagger/nextLoader',
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
