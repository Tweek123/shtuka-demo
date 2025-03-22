/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bubblegum: ['Bubblegum', 'sans-serif'],
      },
      colors: {
        'bubblegum-pink': '#FF69B4',
        'candy-purple': '#E31E54',
        'sweet-blue': '#40E0FF',
        'lemon-yellow': '#FFE45C',
        'mint-green': '#98FF98',
        'bubble-orange': '#FFB347',
        'text-dark': '#2D0C30',
        'text-light': '#FFFFFF',
        'dark-custom': '#24231E',
      },
      borderRadius: {
        'bubble': '30px',
      },
      boxShadow: {
        'bubble': '4px 4px 0 #2D0C30',
        'bubble-hover': '6px 6px 0 #2D0C30',
      },
      animation: {
        'bubble-float': 'bubble-float 3s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
        'border-rotate': 'borderRotate 4s linear infinite',
      },
      keyframes: {
        'bubble-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        borderRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
} 