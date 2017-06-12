const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: '/var/www/webpack2/dist',
        filename: 'app.bundle.js'
    },
    plugins: [new HtmlWebpackPlugin()]
};