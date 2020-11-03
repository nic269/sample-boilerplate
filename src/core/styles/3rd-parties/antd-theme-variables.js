/* eslint-disable no-underscore-dangle */
const _kebabCase = require('lodash/kebabCase')

const themeDefault = require('../theme/_default')

const antdThemeVariables = Object.keys(themeDefault).reduce((variables, key) => ({
  ...variables,
  [_kebabCase(key)]: themeDefault[key],
}), {})

module.exports = antdThemeVariables
