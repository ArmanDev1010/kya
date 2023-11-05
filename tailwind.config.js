/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F36967",
        secondary: "#FED501",
        thirdly: "#1FBDAF",
      },
      fontFamily: {
        montserratarm: ["Montserratarm", "sans-serif"],
      },
    },
    screens: {
      desktop: "1350px",
      tablet: "901px",
      small: "550px",
    },
  },
  plugins: [],
};
