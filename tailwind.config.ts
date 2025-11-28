import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'nature-green': '#3A6351',
        'nature-dark': '#2C4A3C', // darker shade for contrast
        'nature-light': '#F2F8F6',
        'earth-brown': '#D4A373',
        'earth-dark': '#B58B61',
        'sand': '#FAF9F6',
        'sand-dark': '#EBE9E4',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'title-part-1': 'fadeInOut 4s ease-in-out forwards',
        'title-part-2': 'fadeInSimple 1s ease-out 3.8s forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInSimple: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInOut: {
          '0%': { opacity: '0' },
          '15%': { opacity: '1' },
          '85%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-overlay': 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(58,99,81,0.8))',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
