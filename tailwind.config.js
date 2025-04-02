/** @type {import('tailwindcss').Config} */
import scrollbar from 'tailwind-scrollbar';

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      screens: {
        sm: "500px", // Changed small screen breakpoint from 640px to 500px
      },
    },
  },
  plugins: [scrollbar],
  corePlugins: {
    preflight: true,
  },
};
