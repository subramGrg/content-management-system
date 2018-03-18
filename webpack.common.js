const path = require("path");
// new html
const htmlWebpackPlugin = require("html-webpack-plugin");
// clean dist
const cleanWebpackPlugin = require("clean-webpack-plugin");
// extract css
const extractTextWebpackPlugin = require("extract-text-webpack-plugin");

const config = {
    entry: {
        main: "./src/index.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }, {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: extractTextWebpackPlugin.extract({
                    use: [
                        "css-loader?minimize=true&modules=true&localIdentName=[name]-[local]",
                        "sass-loader"
                    ]
                }),
            }
        ],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name]-[hash].js",
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/template/index.html"
        }),
        new cleanWebpackPlugin("dist", {
            watch: false,
        }),
        new extractTextWebpackPlugin("[name]-[hash].css"),
    ]
}

module.exports = config;
