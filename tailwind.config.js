/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f7f6f3',
          100: '#edebe5',
          200: '#d8d4c7',
          300: '#b8b1a0',
          400: '#8f8775',
          500: '#6b6453',
          600: '#4f4939',
          700: '#3a3528',
          800: '#26231a',
          900: '#16140e',
          950: '#0c0b07',
        },
        navy: {
          50: '#f2f5f9',
          100: '#e3eaf2',
          200: '#c7d4e4',
          300: '#9cb4d0',
          400: '#6a8db6',
          500: '#466b98',
          600: '#34557e',
          700: '#2b4566',
          800: '#263a56',
          900: '#1f3046',
          950: '#172234',
        },
        cream: '#faf8f3',
        sand: '#f2eee4',
        gold: '#a87c3f',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
};
