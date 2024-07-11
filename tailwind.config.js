/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
			padding: "16px",
		},
		extend: {
			colors: {
				primary: "#3a3a3a",
				secondary: "#dc3500",
				light: "#f4f4f4",
				dark: "#0f172a",
			},
			fontSize: {
				"5xl": ["3rem", { lineHeight: "3rem" }],
				"6xl": ["3.75rem", { lineHeight: "3.75rem" }],
				"7xl": ["4.5rem", { lineHeight: "4.5rem" }],
				"8xl": ["6rem", { lineHeight: "6rem" }],
				"9xl": ["8rem", { lineHeight: "8rem" }],
			},
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
				serif: ["Fraunces", "serif"],
				body: ["Inter", "sans-serif"],
			},
			screens: {
				"2xl": "1320px",
			},
		},
	},
	plugins: [],
};
