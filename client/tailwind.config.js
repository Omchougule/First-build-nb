/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js}',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated'),
    require("@designbycode/tailwindcss-text-shadow"),
    ({
      shadowColor: "rgba(0, 0, 0, 0.55)",
      shadowBlur: "2px",
      shadowOffsetX: "2px",
      shadowOffsetY: "2px",
      experimental: true,
    })
    
  ],
}