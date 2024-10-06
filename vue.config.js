const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:8081', // Java backend URL
        changeOrigin: true
      }
    }
  }
})
