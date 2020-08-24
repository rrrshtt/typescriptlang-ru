const path = require('path');

// eslint-disable-next-line import/no-unresolved
const pluginConfigFactory = require('@brainhubeu/gatsby-docs-kit/plugins');

module.exports = {
  siteMetadata: {
    title: 'TypeScript Handbook in Russian',
    description: 'TypeScript',
    image: 'https://www.typescriptlang.org/icons/icon-48x48.png?v=e0cca9b778c3248c7434bc3c68c0e8b2',
    url: 'https://rrrshtt.github.io/typescriptlang-ru',
    type: 'article',
    siteName: 'TypeScript Handbook in Russian',
    githubUrl: 'https://github.com/rrrshtt/typescriptlang-ru',
  },

  // URL prefix on production environment. For more info see https://www.gatsbyjs.org/docs/path-prefix/
  pathPrefix: process.env.PATH_PREFIX || '',

  plugins: pluginConfigFactory({
    config: `${__dirname}/gatsby-docs-kit.yml`,
    resources: path.resolve(__dirname, './docs'),
  }),
};
