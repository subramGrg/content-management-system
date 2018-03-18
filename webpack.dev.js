const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require('webpack');
const dotEnv = require("dotenv-webpack");

const config = merge(common, {
    devtool: "inline-source-map",
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new dotEnv()
    ]
});

module.exports = config;
