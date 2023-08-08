/** @type {import('tailwindcss').Config} */


 
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navbarColor: 'rgb(100, 150, 200)',
        chatGptColor: 'rgb(25, 195, 125)' // Replace with your desired RGB values
      },
    },
  },
  plugins: [],
};