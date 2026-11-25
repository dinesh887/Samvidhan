/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F7F4EC',
        'paper-dark': '#12161F',
        ink: '#1B2130',
        'ink-dark': '#E9E7DD',
        navy: {
          DEFAULT: '#16294D',
          light: '#233B66',
          dark: '#0C1730',
        },
        saffron: {
          DEFAULT: '#C17A2B',
          light: '#DDA35C',
          dark: '#8F5A1D',
        },
        leaf: {
          DEFAULT: '#2E5E45',
          light: '#437A5C',
          dark: '#1F4432',
        },
        gold: '#B7923C',
        'surface-dark': '#181D28',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        devSerif: ['"Noto Serif Devanagari"', 'serif'],
        devSans: ['"Noto Sans Devanagari"', 'sans-serif'],
      },
      backgroundImage: {
        chakra: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
