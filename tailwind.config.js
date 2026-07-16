/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f2f8f6",
          100: "#dcece8",
          200: "#b9d8d1",
          300: "#8cbdb4",
          400: "#5c9d93",
          500: "#3f8278",
          600: "#2e6860",
          700: "#27544e",
          800: "#1d4540",
          900: "#123934",
          950: "#082622",
        },
        accent: {
          DEFAULT: "#ffc100",
          dark: "#e0a900",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
