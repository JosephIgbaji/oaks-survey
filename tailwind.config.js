/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    fontFamily: {
      Inter: ["Inter", "san-serif"],
      Montserrat: ["Montserrat", "san-serif"],
    },
    extend: {
      textColor: {},

      borderColor: {},

      backgroundColor: {},
      fontFamily: {
        "pt-serif": "'PT Serif Caption', serif",
        poppins: "'Poppins', sans-serif",
        inter: "'Inter', sans-serif",
      },
      boxShadow: {
        "primary-dark": "5px 7px 12px rgba(0,0,0,0.3)",
        "primary-dark-hovered": "7px 9px 14px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};
