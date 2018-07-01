module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  baseUrl: '/',
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
