/* eslint-disable import/no-extraneous-dependencies */
const withPlugins = require('next-compose-plugins');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const runtimeCaching = require('next-pwa/cache');

const withPWA = require('next-pwa')({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
});

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value:
      "default-src https://next-js-boilerplate-blue.vercel.app/ https://images.unsplash.com/ https://tailwindui.com/ https://randomuser.me/ 'self' data: 'unsafe-inline'",
  },
];

const nextConfig = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  images: {
    domains: ['source.unsplash.com'],
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
};

module.exports = withPlugins(
  [
    [withBundleAnalyzer],
    [withPWA],
    // your other plugins here
  ],
  nextConfig
);
