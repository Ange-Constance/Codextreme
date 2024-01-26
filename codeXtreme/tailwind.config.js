/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#11d171',
        secondary: '#1aed89',
        tertiary: '#1e1e1e',
        darkBlue: '#13231A'
      },
      visibility: {
        visible: 'visible',
        hidden: 'hidden',
      },
    },
  },
  plugins: [],
}
