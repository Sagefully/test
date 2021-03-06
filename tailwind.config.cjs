module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui'), require('@tailwindcss/typography')],
  daisyui: {
    styled: true,
    themes: "garden",
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    darkTheme: "dark",
  },
};
