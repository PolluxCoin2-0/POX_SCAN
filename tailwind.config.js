/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors:{
      "black":"#000000",
      "green": "#C2FFC1",
      "white": "#FFFFFF",
      "dark-yellow": "#F3BB1C",
      "mid-yellow": "rgba(243, 187, 28, 0.4)",
      "mider-yellow": "rgba(243, 187, 28, 0.3)",
      "light-yellow": "rgba(243, 187, 28, 0.1)",
      "dark-red": "#C23631",
      "light-red": "rgba(194, 54, 49, 0.1)",
      "dark-brown": "#493808",
      "dark-skyblue": "#065BA1",
      "dark-blue": "#3A5AFE",
    },
    backgroundImage: {
      'purple-gradient': 'linear-gradient(to bottom, #B1B9F8 0%, #ADB7F9 100%)',
      'red-gradient': 'linear-gradient(to bottom, #F4A79D 0%, #F4A79D 100%)',
    },
    boxShadow: {
      'custom-shadow': '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
  },
  plugins: [],
}