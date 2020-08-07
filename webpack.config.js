const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const DotenvWebpackPlugin = require("dotenv-webpack");
const BundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    common: "./src/index.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "js/[name].[hash].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            js: [{ loader: "babel-loader", options: { presets: ["env"] } }]
          }
        }
      },
      {
        test: /\.css$/,
        loader: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.scss$/,
        loader: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./src/html/index.html"),
      chunks: ["common"],
      inject: "body",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "css/[contenthash].[name].[id].css",
      chunkFilename: "css/[contenthash].[name].[id].css"
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new DotenvWebpackPlugin(),
    new BundleAnalyzer(),
    new CopyWebpackPlugin({
      patterns: [
        {from: "./src/static"}
      ]
    })
  ],
  devServer: {
    historyApiFallback: true,
    hot: true
  },
  optimization: {
    runtimeChunk: "single",
    usedExports: true,
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            return `vendor/${packageName.replace("@", "")}`;
          }
        }
      }
    }
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": path.join(__dirname, "src")
    }
  },
  devtool: "inline-source-map"
};
