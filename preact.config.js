const path = require('path');

export default (config, env, helpers) => {
  const rules = helpers.getRules(config);

  rules
    .find(item => item.index === 2)
    .rule.use.push({
      loader: 'sass-resources-loader',
      options: {
        resources: path.resolve(__dirname, './src/style/main.scss')
      }
    });

    config.module.loaders[8].test = /\.(woff2?|ttf|eot|jpe?g|png|gif|mp4|mov|ogg|webm)(\?.*)?$/i,
    config.module.loaders.unshift({
      test: /\.svg$/,
      use: ['preact-svg-loader']
    });
};
