const plugin = require("tailwindcss/plugin");
const { nextui } = require("@nextui-org/theme");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
			},
			colors: {
				"custom-yellow": "rgb(255 215 0)",
				"custom-blue": "rgb(0 0 255)",
			},
			textWrap: {
				balance: "balance",
				unset: "unset",
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			const newUtilities = {
				".text-wrap-balance": {
					textWrap: "balance",
				},
				".text-wrap-unset": {
					textWrap: "unset",
				},
			};
			addUtilities(newUtilities, ["responsive"]);
		}),
		nextui(),
	],
	darkMode: "class",
};
