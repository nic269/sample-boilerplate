require('dotenv').config()
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const {
  SRC_DIR,
  DEST_DIR,
  PUBLIC_PATH,
  APP_FILE_PATH,
  IE11_POLYFILL_PATH,
} = require('./constants')
const themeVariables = require('../../src/core/styles/theme/theme')

module.exports = {
  context: SRC_DIR,
  target: 'web',
  entry: {
    app: [
      IE11_POLYFILL_PATH,
      APP_FILE_PATH
    ]
  },
  output: {
    path: DEST_DIR,
    publicPath: PUBLIC_PATH
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'less-loader',
            options: {
              lessOptions: { // If you are using less-loader@5 please spread the lessOptions to options directly
                modifyVars: themeVariables,
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
              noquotes: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new Dotenv({
      path: './.env',
      systemvars: true,
      defaults: './.env.example'
    }),
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin()
  ],
  stats: {
    colors: true,
    chunks: false,
    chunkModules: false,
    modules: false,
    children: false
  },
}
