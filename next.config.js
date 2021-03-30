const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');
const withPWA = require('next-pwa');
const withBundleAnalyzer = require('@next/bundle-analyzer');

module.exports = withPlugins(
  [
    withFonts,
    [
      withBundleAnalyzer,
      {
        enabled: process.env.ANALYZE === 'true',
      },
    ],
    [
      withPWA,
      {
        pwa: {
          dest: 'public',
          disable: process.env.NODE_ENV !== 'production',
          buildExcludes: [/static\/images\/.*$/],
        },
      },
    ],
  ],
  {
    future: {
      webpack5: true,
    },
    images: {
      deviceSizes: [320, 420, 768, 1024, 1200],
      iconSizes: [],
      domains: [],
      path: '/_next/image',
      loader: 'default',
    },
  },
);
