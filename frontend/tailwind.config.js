/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bluegreen: "#354F4E",
        "green-light": "#373f2B",
        "green-dark": "#273C2B",
        white: "#fefefe",
        black: "#1f1f1f",
      },
    },
    fontFamily: {
      title: ["ElsieSwashCaps", "serif"],
      body: ["Ruluko", "sans-serif"],
    },
  },
  plugins: [],
};
