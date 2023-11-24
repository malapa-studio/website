const malapa_colors = {
	"malapa-primary": "#059669"
}

module.exports = {
	plugins: [require('daisyui')],
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors:	malapa_colors
		}
	}
}
