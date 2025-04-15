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
        eyesomeScript: "EyesomeScript",
        eyesomeRegular: "EyesomeRegular",
        spinnaker: ['"Spinnaker"']
      },
      colors: {
        ang: {
          50: "#transparent", //trasparente
          100: "#42490d", //verde bosque
          200: "#5d6712", //verde
          300: "#cdcdcd", //gris
          400: "#eee0c9", //beige
          500: "#000000bf", //negro transparente
          600: "#FFFFFFbf", //blanco transparente
          700: "#33b990", //verde budget
          800: "#cdcdcdbf", //gris transparente
          900: "#eee0c9bf", //beige transparente
        },
        brand: {
          100: "#aaab80", //verdeClaro
          200: "#39350f", //verdeOscuro
          300: "#919236", //verdeBicho
          400: "#f2e2bc", //beigeClaro
          500: "#5a4130", //marron
          500: "#42490dbf", //verdeBosque transp
        },
        projects: {
          100: "#EBB2A3", //rosadoMariana
          200: "#969CA3", //grisJoshua
        }
      },
    },
  },
  plugins: [],
});