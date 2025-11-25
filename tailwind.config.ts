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
        'nature-light': '#F2F8F6',
        'earth-brown': '#D4A373',
        'sand': '#FAF9F6',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Assuming prose class was used, need to check if we installed this or if I need to mock it/install it.
    // Wait, I didn't see typography in package.json. I should check if it was there or if I should add it.
  ],
};
export default config;
