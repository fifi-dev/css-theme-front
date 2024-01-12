/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
          primary: 'var(--primary)',
          secondary: 'var(--secondary)',
          highlight: 'var(--accent)',
      },
      fontFamily: {
        titles: 'var(--titles)',
        body: 'var(--body)',
      },
      fontSize: {
        landing: 'var(--landing)',
        h1: 'var(--h1)',
        h2: 'var(--h2)',
        h3: 'var(--h3)',
      },
      padding: {
        p0: 'var(--p0)',
        p1: 'var(--p1)',
        p2: 'var(--p2)',
        p3: 'var(--p3)',
        p4: 'var(--p4)',
        p5: 'var(--p5)',
        p6: 'var(--p6)',
        p8: 'var(--p8)',
        p10: 'var(--p10)',
        p12: 'var(--p12)',
        p16: 'var(--p16)',
        p20: 'var(--p20)',
        p24: 'var(--p24)',
        p32: 'var(--p32)',
        p40: 'var(--p40)',
        p48: 'var(--p48)',
        p56: 'var(--p56)',
        p64: 'var(--p64)',
      },
      borderRadius: 'var(--radius)',
      screens: {
        'max-2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }

        'max-xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }

        'max-lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }

        'max-md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }

        'max-sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }

        'max-xs': {'max': '475px'},

        'xs': {'min': '476px'},

        'max-header': {'max': '909px'},

        'min-header': {'min': '910px'},
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
