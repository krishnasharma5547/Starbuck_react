// module.exports = {
//   purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// };
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-500": "#1E3932",
        "primary-400": "#008248",
        "primary-300": "#D4E9E2",
        "primary-200": "#F1F8F5",
        "primary-100": "#F7F7F7",
        back: "#D5EAE3",
      },
      width: {
        large: "774px",
      },
      height: {
        large: "760px",
      },
      fontWeight: {
        primarybold: 650,
      },
      fontFamily: {
        primaryFamily: ["Helvetica Neue", "Helvetica", "Arial,sans-serif"],
      },
      zIndex: {
        "-1": "-1",
      },
      margin: {
        4.5: "1.10rem",
        35: "8.7rem",
      },
      padding: {
        35: "35rem",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/aspect-ratio")],
};
