/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: "Raleway, sans-serif",
        inter: "Inter, sans-serif",
      },
      colors: {
        main: "#73ce7f",
        second: "#caece0",
        third: "#66ae3d",
      },
    },
  },
  plugins: [require("daisyui")],
};
