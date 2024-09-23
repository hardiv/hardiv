/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#181818",
        secondary: "#e7e7e7",
        tertiary: "#353535",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #aa0000",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      textShadow: {
        sm: "0px 1px 2px rgba(0, 0, 0, 0.5)",
        DEFAULT: "0px 2px 4px rgba(0, 0, 0, 0.5)",
        lg: "0px 4px 6px rgba(0, 0, 0, 0.5)",
        redGlow: "0px 0px 8px #ff0000", // Custom red glow shadow
        whiteGlow: "0px 0px 8px #ffffff", // Custom white glow shadow
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        ".text-shadow-sm": {
          textShadow: theme("textShadow.sm"),
        },
        ".text-shadow": {
          textShadow: theme("textShadow.DEFAULT"),
        },
        ".text-shadow-lg": {
          textShadow: theme("textShadow.lg"),
        },
        ".text-shadow-red-glow": {
          textShadow: theme("textShadow.redGlow"),
        },
        ".text-shadow-white-glow": {
          textShadow: theme("textShadow.whiteGlow"),
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
