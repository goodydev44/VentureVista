/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "300px",
        xs: "450px",
        md: "770px",
        "md2": "795px",
        "md3": "853px",
        "lg1": "1100px",
        "lg2": "1220px",
        "1xl": "1400px",
        "xl1": "1450px",
        "xl2": "1460px",
        "2xl": "1600px",
      }
    },
  },
  plugins: [],
}