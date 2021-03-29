module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'layout': {
          'body': '#F1F1F1',
          'sidebar': '#F6F6F6',
        },
        'theme': {
          'primary': '#FF9A3B',
          'secondary': '#D97A00',
          'striped': '#FF9A3B11',
        }
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['even', 'odd'],
    },
  },
  plugins: [],
}
