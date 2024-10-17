/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    screens: {
      'sm': '600px', 
      'md': '768px', 
      'lg': '1024px', 
      'xl': '1280px', 
    },
  },
};
export const plugins = [];


