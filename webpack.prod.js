const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const uglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");

const config = merge(common, {
    plugins: [
        new uglifyjsWebpackPlugin(),
    ]
});

module.exports = config;
