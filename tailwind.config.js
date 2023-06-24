/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	theme: {
		extend: {
			fontFamily: {
				DM: ['DM Serif Display, serif'],
				Public: ['Public Sans, sans-serif'],
			},
			colors: {
				// Primary
				'primary-dark-pink': '#ba4270',
				'primary-link-water-white': '#fbfcfe',

				// Secondary
				'secondary-san-juan-blue': '#36536b',
				'secondary-mirage-blue': '#1b262f',
				'secondary-charm-pink': '#da6d97',
				'secondary-light-san-juan-blue': '#6c8294',

				// Border
				'custom-border-gray': 'rgba(251, 252, 254, 0.15)',
			},
		},
	},
	plugins: [],
};
