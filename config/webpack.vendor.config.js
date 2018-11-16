const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const resolve = require('path').resolve;

const prodConfig = {
  mode: 'production',
  entry: './src/vendor.js',
  output: {
    path: resolve('./public'),
    filename: 'vendor.js'
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'resolve-url-loader' ]
      },  {
        test: /\.(png|jpg|gif|svg|woff|ttf|eot)/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [ new MiniCssExtractPlugin({ filename: 'vendor.css' }) ]
};

module.exports = prodConfig;
