const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/takeda/gramping' : './',
  configureWebpack: { output: { filename: 'js/[name].js', chunkFilename: 'js/[name].js' } },
  css: { extract: { filename: 'css/[name].css' } },
})
