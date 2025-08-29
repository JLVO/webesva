/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',
        secondary: '#1D4ED8',
        hover: '#2563EB',
        background: '#F8FAFC',
        text: '#1F2937',
        white: '#FFFFFF',
        black: '#000000',
        'vibrant-purple': '#9333ea',
        'vibrant-blue': '#3b82f6' 
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}