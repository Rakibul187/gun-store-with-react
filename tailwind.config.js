/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  themes: [
    {
      mytheme: {

        "primary": "#82b20a",

        "secondary": "#044c6b",

        "accent": "#f28cf2",

        "neutral": "#293138",

        "base-100": "#343437",

        "info": "#6BA2EF",

        "success": "#239083",

        "warning": "#EC973C",

        "error": "#E6656C",
      },
    },
  ],
  plugins: [require("daisyui")],
}
