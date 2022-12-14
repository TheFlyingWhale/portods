const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js, jsx, ts,tsx, css}"],
	theme: {
		fontFamily: {
			primary: ["Josefin Sans", ...defaultTheme.fontFamily.sans],
			secondary: ["Heebo", ...defaultTheme.fontFamily.serif],
			mono: ["Space Mono", ...defaultTheme.fontFamily.mono],
		},
		colors: {
			neutral: {
				100: "#FAFAFA",
				150: "#F0F0F0",
				200: "#E0E0E0",
				300: "#C5C5C5",
				400: "#ABABAB",
				500: "#909090",
				600: "#767676",
				700: "#5B5B5B",
				800: "#404040",
				900: "#252525",
			},
			blue: {
				50: "#F2F5FD",
				100: "#C8D5F6",
				200: "#95AFF1",
				300: "#638AEC",
				400: "#4A77EA",
				500: "#3064E7",
				600: "#2E55B7",
				700: "#2B4586",
				800: "#283556",
				900: "#272D3E",
			},
			red: {
				50: "#FEF1F1",
				100: "#F9C5C7",
				200: "#F79094",
				300: "#F65B61",
				400: "#F54147",
				500: "#F4262D",
				600: "#DB262C",
				700: "#C1262B",
				800: "#8D2629",
				900: "#592627",
			},
			green: {
				50: "#F0FBF0",
				100: "#C3EFC1",
				200: "#8BE488",
				300: "#53D94F",
				400: "#37D333",
				500: "#1BCD16",
				600: "#1BCD16",
				700: "#1EA31A",
				800: "#20791E",
				900: "#234F22",
			},
			orange: {
				50: "#FEF5F1",
				100: "#F9D4C5",
				200: "#F7AD90",
				300: "#F6875B",
				400: "#F57441",
				500: "#F46026",
				600: "#DB5926",
				700: "#C15226",
				800: "#8D4326",
				900: "#593426",
			},
		},
		extend: {
			borderWidth: {
				1: "1px",
			},
			outlineWidth: {
				1: "1px",
			},
		},
	},
	plugins: [],
}
