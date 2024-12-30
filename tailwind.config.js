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
          400: "#eee0c9", //beige claro
          500: "#000000bf", //negro transparente
          600: "#FFFFFFbf", //blanco transparente
          700: "#33b990", //verde budget
          800: "#cdcdcdbf", //gris transparente
          900: "#eee0c9bf", //beige transparente
        },
      },
    },
  },
  plugins: [],
});