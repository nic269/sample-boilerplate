const { getPath } = require('../utils/helpers')

const SRC_DIR = getPath('src')
const DEST_DIR = getPath('build')
const PUBLIC_PATH = '/'
const APP_LOADER_PATH = getPath('src/core/app-loader.js')
const IE11_POLYFILL_PATH = require.resolve('react-app-polyfill/ie11')

module.exports = {
  SRC_DIR,
  DEST_DIR,
  PUBLIC_PATH,
  APP_LOADER_PATH,
  IE11_POLYFILL_PATH
}
