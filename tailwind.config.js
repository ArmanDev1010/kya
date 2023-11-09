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
      big: "1600px",
      desktop: "1350px",
      medium: "1024px",
      btablet: "900px",
      tablet: "801px",
      stablet: "701px",
      phone: "601px",
      small: "550px",
      smaller: "350px",
    },
  },
  plugins: [],
};
