import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        morph: {
          '0%, 100%': { transform: 'rotate(0deg)', 'background-size': '100% 100%' },
          '50%': { transform: 'rotate(360deg)', 'background-size': '200% 200%' },
        },
        glow: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.2' },
        },
        colorChange: {
          '0%': { 'background-position': '0% 25%' },
          '50%': { 'background-position': '125% 25%' },
          '100%': { 'background-position': '0% 25%' },
        },
      },
      animation: {
        glow: 'glow 25s infinite alternate',
        morph: 'morph 25s infinite alternate',
        colorChange: 'colorChange 15s infinite alternate',
      },
    },
  },
  plugins: [],
};
export default config;
