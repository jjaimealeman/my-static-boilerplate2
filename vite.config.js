// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
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
