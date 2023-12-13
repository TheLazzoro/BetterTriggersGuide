const isProd = process.env.NODE_ENV === 'production';

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = {
  ...withNextra(),
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? "/GuideTest" : ".",
  basePath: isProd ? '/GuideTest' : '',
};

// module.exports = withNextra()