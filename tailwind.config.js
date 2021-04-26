module.exports = {
  purge: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        footer: {
          bg: "#E8E8E8",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
