module.exports = {
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "eslint-loader"
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
        }
      }, {
        test: /\.scss$/,
        use: [ "style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
}