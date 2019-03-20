const withPlugins = require('next-compose-plugins');
const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');

module.exports = withPlugins([
  // Typescript
  [withTypescript, {
    webpack(config, options) {
      // Do not run type checking twice:
      if (options.isServer) {
        const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
        config.plugins.push(new ForkTsCheckerWebpackPlugin({
          async: false,
        }));
      }
      
      return config;
    }
  }],

  // CSS
  [withCSS, {
    cssModules: true,
  }]
]);