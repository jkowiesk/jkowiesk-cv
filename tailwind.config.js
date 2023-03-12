module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: {
          primary: '#7F5AF0',
          secondary: '#647DEE',
        },
        background: '#16161a',
        headline: '#fffffe',
        paragraph: '#94a1b2',
        contrast: '#2cb67d',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
