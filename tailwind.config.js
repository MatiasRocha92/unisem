import path from 'path';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    path.join(__dirname, "./index.html"),
    path.join(__dirname, "./src/**/*.{js,jsx,ts,tsx}"),
  ],
  safelist: [
    'bg-unisem-gray-light',
    'text-unisem-blue-navy',
    'bg-unisem-blue-dark',
    'bg-unisem-blue-sky',
    'border-unisem-blue-sky',
    'bg-unisem-blue-medium',
    'border-unisem-blue-medium',
    'bg-unisem-orange',
    'border-unisem-orange',
    'bg-unisem-blue-navy',
    'text-gray-800',
    'text-white',
    'hover:text-gray-800',
  ],
  theme: {
    extend: {
      colors: {
        'unisem': {
          'orange': '#F38128',
          'blue-dark': '#0454A3',
          'gray-light': '#E1D7D2',
          'blue-sky': '#79A4CC',
          'blue-medium': '#558BBB',
          'blue-navy': '#045494'
        }
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif']
      }
    }
  },
  plugins: []
}
