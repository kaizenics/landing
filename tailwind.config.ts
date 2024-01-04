// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        'montserrat-thin': ['Montserrat', 'sans-serif', '100'],
        'montserrat-regular': ['Montserrat', 'sans-serif', '400'],
        'montserrat-bold': ['Montserrat', 'sans-serif', '700'],
        'montserrat-semibold': ['Montserrat', 'sans-serif', '600'],
      },
      colors: {
        primary: {
          100: '#FFFCE1',
          200: '#960202',
        },
        secondary: {
          100: '#222222',
          200: '#171717',
        },
      },
      fontSize: {},
      spacing: {},
      width: {
        '13/13': '72%',
        '12/13': '96.3076923%',
      },
    },
  },
  darkMode: 'class', 
  plugins: [],
};

export default config;


