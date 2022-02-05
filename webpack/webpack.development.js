'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const development = {
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    port: 9000,
    hot: true,
    liveReload: true,
    watchFiles: path.resolve('../webpack-starter/src')
  },
};

module.exports = development;
