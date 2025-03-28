/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#111111', // Deep black
        'secondary': '#1E1E1E', // Anthracite gray
        'accent': '#D4AF37', // Gold accent
        'white': '#FFFFFF', // Optical white
        'dark': '#000000', // Pure black
      },
      fontFamily: {
        'display': ['Inter', 'Monument Extended', 'Gilroy Bold', 'sans-serif'],
        'body': ['Inter', 'Source Sans Pro', 'sans-serif'],
      },
      fontSize: {
        'headline': ['3.5rem', { lineHeight: '1.1' }],
        'subheadline': ['1.5rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
}
