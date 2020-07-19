const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const Compression = require("compression-webpack-plugin");

module.exports = {
  entry: {
    mainPage: "./src/index.js",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[contenthash].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        loader: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss/,
        loader: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        loader: "file-loader",
        options: {
          name: "assets/[name].[contenthash].asset.[ext]",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./src/html/index.html"),
      chunks: ["mainPage"],
      inject: "body",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin(),
    new webpack.BannerPlugin({
      banner: "This file is used by Nicory Frontend",
      exclude: /\/node_modules\/(\d|\w)+/
    }),
    new Compression()
  ],
  devServer: {
    historyApiFallback: true,
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `vendor/${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": path.join(__dirname, "src"),
    },
  },
  devtool: "inline-source-map"
};
