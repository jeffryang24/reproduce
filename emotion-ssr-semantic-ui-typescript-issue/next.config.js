const withTypescript = require('@zeit/next-typescript')
const withCss = require('@zeit/next-css')

module.exports = withTypescript(withCss({
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/i,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          publicPath: './',
          outputPath: 'static/css/',
          name: '[name].[ext]'
        }
      }
    })
    console.log(config.module.rules);

    for(let i = 0; i < config.module.rules.length; i++) {
      const a = config.module.rules[i];
      console.log(a.test);
      console.log(a.use && a.use.loader);
      console.log(a.use && a.use.options);
      console.log('===========');
    }

    return config
  }
}))