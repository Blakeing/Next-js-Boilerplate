/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

const colors = require('tailwindcss/colors');
const { spacing } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        'primary-2': 'var(--primary-2)',
        secondary: colors.blueGray,
        'secondary-2': 'var(--secondary-2)',
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: colors.indigo[500],
              '&:hover': {
                color: colors.indigo[700],
              },
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32],
            },
            code: { color: colors.pink[500] },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
          },
        },
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('postcss-focus-visible'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
};
