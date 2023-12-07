/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        vazir: ["Vazirmatn", "sans-serif"],
        lalezar: ["Lalezar", "sans-serif"],
      },
      colors: {
        "white-100": "#f6f6f6",
        "white-200": "#e7e7e7",
        "gold-50": "#fffcef",
        "gold-400": "#fdc816",
        "text-gray-600": "#707070",
        "text-gray-650": "#818181",
        "text-gray-700": "#626161",
      },
    },
  },
  plugins: [],
};
