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
      keyframes: {
        glowingText: {
          from: {
            'text-shadow': '0px 0px 10px rgba(212, 0, 255, 1)',
          },
          to: {
            'text-shadow': ' 0px 0px 60px rgba(212, 0, 255, 1)',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
