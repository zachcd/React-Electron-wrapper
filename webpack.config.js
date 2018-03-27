const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

var APP_DIR = path.resolve(__dirname, 'phone');

var config = {
  entry: path.resolve(__dirname, 'phone') + '/index.js',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
          {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader",
                options: { minimize: true }
              }
            ]
          }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./phone/index.html",
        filename: "./index.html"
      })
    ]
};

module.exports = config;
