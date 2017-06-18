let ExtractTextPlugin = require('extract-text-webpack-plugin');

let path = require('path');

module.exports = {
  entry: './frontend/js/app.js',
  output: {
    path: path.resolve(__dirname, "public"),
    filename: 'js/app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"],
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          "eslint-loader",
        ],
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: [
          "file-loader?name=[name].[ext]&publicPath=../&outputPath=images/"
        ],
      },
    ]
  },
  devServer: {
    compress: true,
    port: 3310,
    open: true
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "css/style.css",
      disable: false,
      allChunks: true
    })
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
};