import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
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
        sans: ["Poppins", "sans-serif"], // Replace 'YourFontName',
      },
      colors: {
        "custom-yellow": "rgb(255 215 0)",
        "custom-blue": "rgb(0 0 255)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
