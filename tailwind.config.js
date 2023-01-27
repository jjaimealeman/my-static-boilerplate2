const plugin = require('tailwindcss/plugin')

module.exports = {
	content: [
		"./index.html",
		"./**/*.html"
	],
	theme: {
		debugScreens: {
			position: ['top', 'right'],
		},

		// REMOVE EXTEND
		// TO DISABLE ASSET LOADING OF UNNCECESSARY LOADING
		// https://blog.logrocket.com/how-to-use-custom-fonts-tailwind-css/
		//
		// extend: {
		//     fontFamily: {
		//         'raleway': ['Raleway', 'sans-serif'],
		//         'montserrat': ['Montserrat', 'sans-serif']
		//     }
		// }

		fontFamily: {
			'raleway': ['Raleway', 'sans-serif'],
			'montserrat': ['Montserrat', 'sans-serif']
		}

	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/aspect-ratio'),
		require('tailwindcss-fluid-type'),
		require('tailwindcss-debug-screens')
	],
}
