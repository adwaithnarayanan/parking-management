/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "rgb(0,86,145)",
        "secondary-punchPink": "#e46a76",
      },
    },
  },
  plugins: [],
};
