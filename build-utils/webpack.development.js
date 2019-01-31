const path = require('path');
const webpackMerge = require('webpack-merge');

module.exports = (env) => {
  const commonConfig = require('./webpack.common')(env);

  return webpackMerge(commonConfig, {
    mode: 'development',
    output: {
      path: path.resolve(__dirname, '../src'),
      filename: 'main.js',
      publicPath: 'http://localhost:3001/',
    },
    devServer: {
      port: 3001,
      contentBase: './dist',
      hot: true,
      open: true,
      openPage: '',
    },
  })

};
