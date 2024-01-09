// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  server: {
    port: '3000',
  },
  preview: {
    port: '4000',
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        test: resolve(__dirname, '/test/index.html'),
        more: resolve(__dirname, '/more/index.html')
      }
    }
  }
})
