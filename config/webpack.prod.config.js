const resolve = require('path').resolve;
const merge = require("webpack-merge");

const commonConfig = require("./webpack.common");

const prodConfig = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: resolve('./dist'),
        library: '[name]',
        libraryTarget: 'umd',
        filename: "index.js"
    },
}

module.exports = merge(commonConfig, prodConfig)
