const resolve = require('path').resolve;
const merge = require('webpack-merge');

const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  entry: './demo/index.js',
  output: {
    path: resolve('./public'),
    filename: 'index.js'
  }
};

module.exports = merge(commonConfig, prodConfig);
