/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#FFF3EE",
          100: "#FFE2D6",
          500: "#FF5A36",
          600: "#E94D2C",
        },

        surface: {
          DEFAULT: "#F8F9F6",
          card: "#FFFFFF",
        },

        text: {
          primary: "#171717",
          secondary: "#777777",
          muted: "#9A9A9A",
        },

        success: {
          500: "#22A06B",
        },
      },
    },
  },
  plugins: [],
};
