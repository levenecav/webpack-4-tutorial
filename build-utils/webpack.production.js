const path = require('path');

const webpackMerge = require('webpack-merge');

module.exports = (env) => {
  const commonConfig = require('./webpack.common')(env);

  return webpackMerge(commonConfig, {
    mode: 'production',
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: '[name].[hash].js',
      // publicPath: '/dist',
    }
  })

};
