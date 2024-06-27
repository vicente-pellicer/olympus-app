/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        display: ['Abel', ...fontFamily.serif]
      }
    }
  },

  plugins: [require('@tailwindcss/typography'), require('daisyui')],

  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['black'],
          teal: '#00b894',
          amber: '#ffbf00',
          blu: '#65b1e2',
          red: '#f35355'
        }
      }
    ]
  }
};
