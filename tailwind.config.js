/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'student-primary': '#8EBBF7',
        'student-secondary': '#148CCC',
        custom: {
          lightest: "#FFF9EF", 
          light: "#ECF0F4", 
          sky: "#D0E4FF",
          blueLight: "#BAD6EB", 
          blueGray: "#6F96D1", 
          blue: "#354EAD", 
          navy: "#0A1E5B",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), 
  ],
};
