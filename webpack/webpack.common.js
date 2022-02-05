const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const paths = require('./paths');
const Dotenv = require('dotenv-webpack');

module.exports = {
  context: paths.src,
  mode: 'development',
  entry: {
    app: './scripts/index.ts',
  },
  output: {
    filename: `scripts/[name].[hash:8].js`,
    path: paths.build,
    clean: true
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader',
          },

        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.toml$/i,
        type: 'json',
        parser: {
          parse: toml.parse,
        },
      },
      {
        test: /\.yaml$/i,
        type: 'json',
        parser: {
          parse: yaml.parse,
        },
      },
      {
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse,
        },
      },
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".css", ".scss"]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new Dotenv(),
    new CopyWebpackPlugin({
      patterns: [{
        from: paths.static
      }]
    }),
  ],
}