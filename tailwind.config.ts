import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mango: {
          DEFAULT: '#FFD700',
          dark: '#E6C200'
        },
        peach: {
          DEFAULT: '#FFAA70',
          dark: '#FF9956'
        },
        bubblegum: {
          DEFAULT: '#FF9DB5',
          dark: '#FF83A1'
        },
        banana: {
          DEFAULT: '#FFE878',
          dark: '#FFE45E'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;