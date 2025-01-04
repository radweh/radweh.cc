/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				light: {
					primary: "#cb432d",
					"primary-focus": "#48604f",
					"primary-content": "#ffffff",

					secondary: "#ca7a3d",
					"secondary-focus": "#cde2c1",
					"secondary-content": "#24321a",

					accent: "#606e3d",
					"accent-focus": "#f4bebe",
					"accent-content": "#322020",

					neutral: "#d9cab7",
					"neutral-focus": "#272525",
					"neutral-content": "#e9e7e7",

					"base-100": "#e9e7e7",
					"base-200": "#d1cccc",
					"base-300": "#b9b1b1",
					"base-content": "#100f0f",

					info: "#1c92f2",
					success: "#009485",
					warning: "#ff9900",
					error: "#ff5724",

					"--rounded-box": "1rem",
					"--rounded-btn": ".5rem",
					"--rounded-badge": "1.9rem",

					"--animation-btn": ".25s",
					"--animation-input": ".2s",

					"--btn-text-case": "uppercase",
					"--navbar-padding": ".5rem",
					"--border-btn": "1px",
				},
				dark: {
					primary: "#cb432d",
					"primary-focus": "#48604f",
					"primary-content": "#ffffff",

					secondary: "#ca7a3d",
					"secondary-focus": "#cde2c1",
					"secondary-content": "#24321a",

					accent: "#606e3d",
					"accent-focus": "#f4bebe",
					"accent-content": "#322020",

					neutral: "#d9cab7",
					"neutral-focus": "#272525",
					"neutral-content": "#111111",

					"base-100": "#141414",
					"base-200": "#202020",
					"base-300": "#303030",
					"base-content": "#ffffff",

					info: "#66c7ff",
					success: "#87cf3a",
					warning: "#e1d460",
					error: "#ff6b6b",

					"--rounded-box": "0.4rem",
					"--rounded-btn": "0.4rem",
					"--rounded-badge": "1.9rem",

					"--animation-btn": ".25s",
					"--animation-input": ".2s",

					"--btn-text-case": "uppercase",
					"--navbar-padding": ".5rem",
					"--border-btn": "1px",
				},
			},
		],
	},
};
