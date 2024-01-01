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
      fontFamily: {},
      colors: {
        primary: {
          100: '#FFFCE1',
          200: '#E0E0E0',
        },
        secondary: {
          100: '#222222',
          200: '#171717',
        },
      },
    },
  },
  darkMode: 'class', 
  plugins: [],
};

export default config;


