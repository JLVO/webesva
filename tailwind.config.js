/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
  primary: '#1E3A8A',
  secondary: '#1D4ED8',
  hover: '#2563EB',     // Este es el que se usa en hover
  background: '#F8FAFC',
  text: '#1F2937',
  white: '#FFFFFF',
  black: '#000000'
},
    },
  },
  plugins: [],
}
