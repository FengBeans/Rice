const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const path = require('path')

/**
 * @type {import('webpack').WebpackOptionsNormalized}
 */
const devServer = {
  static: {
    directory: path.join(__dirname, "public/"),
  },
  port: 3099,
  host: 'localhost',
  hot: true,
}

const devConfig = {
  mode: 'development',
  devServer: devServer,
}

module.exports = webpackMerge.merge(baseConfig, devConfig);
