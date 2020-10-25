const { merge } = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const TerserPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfigCommon = require('./webpack.config.common')
const { SRC_DIR } = require('./constants')

module.exports = merge(webpackConfigCommon, {
  mode: 'production',
  output: {
    filename: 'static/[name].[contenthash].js',
    chunkFilename: 'static/[name].[contenthash].chunk.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      title: process.env.APP_TITLE,
      metadata: {
        ogDesc: process.env.APP_OG_DESC,
        ogImage: process.env.APP_OG_IMAGE,
        region: process.env.REGION,
      },
      favicon: `${SRC_DIR}/assets/favicon.ico`,
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'analyze.html',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            comparisons: false,
          },
          parse: {},
          mangle: true,
          output: {
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
        cache: true,
        sourceMap: true,
      }),
    ],
    sideEffects: true,
    concatenateModules: true,
    runtimeChunk: 'single',
    moduleIds: 'hashed',
    splitChunks: {
      chunks: 'all',
      minChunks: 1,
      maxInitialRequests: 10,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
            )[1]
            return `npm.${packageName.replace('@', '')}`
          },
        },
      },
    },
  },
  performance: {
    assetFilter: assetFilename =>
      !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
  },
})
