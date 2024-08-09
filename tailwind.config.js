module.exports = {
  darkMode: 'media',
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: "#355A20",
        texasGreen: "#059033",
        dollar: "#93CB56",
        palm: "#7BAA47",
        grey: "#D9D9D6",
        red: "#FF0000"
      },
      fontFamily: {
        primary: ['Source Sans Pro', 'sans-serif']
      },
      boxShadow: {
        inputInnerShadow: "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
        headerShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        footerShadow: "0px -4px 4px rgba(0, 0, 0, 0.25)",
        fabShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)"
      },
      height: {
        '18': '4.5rem',
        '85': '21rem'
      },
      width: {
        '18': '4.5rem',
        '542': '542px',
        '614': '614px'
      },
      lineHeight: {
        '11': '2.75rem'
      },
      screens: {
        xs: '300px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("daisyui"),
  ],
}