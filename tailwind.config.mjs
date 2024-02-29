/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				Inter: ['"Inter"', 'regular'],
			},
			colors: {
				primary: {
					400: 'hsl(75, 94%, 57%)',
				},
				custom: {
					800: '#1f1f1f',
					900: '#141414',
				},
				secondary: {
					100: 'hsl(0, 0%, 100%)',
					200: 'hsl(0, 0%, 20%)',
					300: 'hsl(0, 0%, 12%)',
					400: 'hsl(0, 0%, 8%)',
				},
			},
		},
	},
	plugins: [],
};
