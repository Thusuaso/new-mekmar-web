// const { defineConfig } = require('@vue/cli-service')
const ManifestPlugin = require('webpack-manifest-plugin');
const nodeExternals = require('webpack-node-externals')
exports.chainWebpack = (webpackConfig) => {
  if (!process.env.SSR) return;
  webpackConfig.target('node')
  webpackConfig.output.libraryTarget('commonjs2')
  webpackConfig.plugin('manifest').use(new ManifestPlugin({ filename: 'ssr-manifest.json' }))
  webpackConfig.externals(nodeExternals({ whitelist: /\.(css|vue)$/ }))
  webpackConfig.optimization.splitChunks(false).minimize(false)
  webpackConfig.plugins.delete('hmr')
  webpackConfig.plugins.delete('preload')
  webpackConfig.plugins.delete('prefetch')
  webpackConfig.plugins.delete('friendly-errors')
  
}
// module.exports = defineConfig({
//   transpileDependencies: true,
  
// })
