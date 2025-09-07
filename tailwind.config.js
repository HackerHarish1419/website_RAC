/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#187E5F',
        secondary: '#0B5844',
        accent: '#00381F',
        background: '#FFFBEB',
        'text-dark': '#92400E',
        golden: '#FCD34D',
        'golden-light': '#FEF3C7',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Roboto', 'serif'],
      },
    },
  },
  plugins: [],
} 