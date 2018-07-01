var vuxLoader = require('vux-loader')
module.exports = {
  lintOnSave: false,
  compiler: true,
  baseUrl: '/',
  configureWebpack: config => {
    vuxLoader.merge(config, {
      plugins: ['vux-ui']
    })
  },
  devServer: {
     proxy: {
       '/api': {
           target: 'http://musiclife.app-echo.com/api',
           changeOrigin: true,
           pathRewrite: {
             '^/api': ''
           }
       }
     }
   }
}
