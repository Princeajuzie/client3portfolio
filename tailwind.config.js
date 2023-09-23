/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    backgroundColor: ["active"],
    keyframes: {
      sticky: {
        "0%": {
          transform: "translateY(-100%)",
        },
        "100%": {
          transform: "translateY(0%)",
        },
      },
    },
    animation: {
      sticky: "sticky 1s",
    },
    variants: {
      extend: {
        animation: ["motion-safe"],
      },
    },
    boxShadow: {
      custom: "2px 4px 8px rgba(140, 129, 129, 0.25)",
    },

    screens: {
      'Laptopmin': { 'min': '992px', 'max': '1199px' },

      'Laptopminbg': { 'max': '1024px' },

      'tabletmin': { 'max': '991px' },

      'tabletchild': { 'max': '856px' },
      'tabletSlick': { 'max': '880px' },

      'small': { 'max': '766px', },

      'smaller': { 'max': '575px' },
    },
    fontSize: {
      clamp: "clamp(15px, 20px, 18px)",
    },
  },
};
export const plugins = [];

