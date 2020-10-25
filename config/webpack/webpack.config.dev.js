const { merge } = require('webpack-merge')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfigCommon = require('./webpack.config.common')
const { SRC_DIR, PUBLIC_PATH } = require('./constants')

module.exports = merge(webpackConfigCommon, {
  mode: 'development',
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'index.html',
      filename: 'index.html',
      title: process.env.APP_TITLE,
      metadata: {
        ogDesc: process.env.APP_OG_DESC,
        ogImage: process.env.APP_OG_IMAGE,
        region: process.env.REGION
      },
      favicon: `${SRC_DIR}/assets/favicon.ico`,
      inject: true,
      cache: true,
    }),
    new CircularDependencyPlugin({
      exclude: /[\\/]node_modules[\\/]/, // exclude node_modules
      failOnError: false, // show a warning when there is a circular dependency
    }),
  ],
  devServer: {
    hot: true,
    port: process.env.DEV_SERVER_PORT || '8008',
    host: process.env.DEV_SERVER_HOST || '0.0.0.0',
    compress: true,
    clientLogLevel: 'silent',
    historyApiFallback: true,
    inline: true,
    overlay: true,
    publicPath: PUBLIC_PATH,
  },
  devtool: process.env.DEV_SOURCE_MAP_TYPE || 'eval-source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  performance: {
    hints: false,
  },
})
