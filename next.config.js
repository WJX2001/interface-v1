/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  // enabled: process.env.ANALYZE === 'true',
  enabled: true,
})
const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: ['prefixIds'],
            },
          },
        },
      ],
    })
    config.experiments = { topLevelAwait: true }
    return config
  },
}

module.exports = nextConfig
