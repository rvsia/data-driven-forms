const HtmlWebPackPlugin = require("html-webpack-plugin");
const resolve = require('path').resolve;
const merge = require("webpack-merge");

const commonConfig = require("./webpack.common");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./demo/index.html",
  filename: "./index.html"
});

const devConfig = {
  mode: "development",
  entry: "./demo/index.js",
  output: {
      path: resolve('../dist'),
      filename: "[name].[hash].js"
  },
  rules: [{
      enforce: "pre",
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: "eslint-loader"
  }],
  devtool: "source-map",
  plugins: [htmlPlugin]
}

module.exports = merge(commonConfig, devConfig)
