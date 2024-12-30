// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

import withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        shantell: ['"Shantell Sans"'], //quitar
        spinnaker: ['"Spinnaker"'] //creo que es la normal
      },
      colors: {
        ang: {
          50: "#transparent", //trasparente
          100: "#d496a7", //rosa oscuro
          200: "#156064", //verde
          300: "#cdcdcd", //gris
          400: "#facaca", //rosa claro
          500: "#000000bf", //negro transparente
          600: "#FFFFFFbf", //blanco transparente
          700: "#33b990", //verde budget
          800: "#cdcdcdbf", //fris transparente
        },
      },
    },
  },
  plugins: [],
});