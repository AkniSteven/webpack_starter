const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './frontend/js/app.js',
    output: {
        path: path.resolve(__dirname, "public"),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"],
                    publicPath: path.resolve(__dirname, "public/")
                })
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8080,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new ExtractTextPlugin({
            filename: "style.css",
            disable: false,
            allChunks: true
        })
    ]
};