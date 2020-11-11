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
    
  config.module.rules.unshift({
    test: /\.svg$/,
    use: ['preact-svg-loader']
  });
  
  if (config.performance) config.performance.maxAssetSize = 500000;
};
