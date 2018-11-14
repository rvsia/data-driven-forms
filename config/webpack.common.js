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
        test: /\.(sa|sc|c)ss$/,
        use: [ "style-loader", "css-loader", "sass-loader", "resolve-url-loader"]
      }, {
        test: /\.(png|jpg|gif|svg|woff|ttf|eot)/,
        loader: 'url-loader',
      },
    ]
  },
}