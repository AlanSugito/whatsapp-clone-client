/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        montserrat: "Montserrat",
      },
      backgroundImage: {
        pattern: "url(./src/assets/bg-pattern.jpg)",
      },
    },
  },
  plugins: [],
};
