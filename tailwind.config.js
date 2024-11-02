/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'media', 
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#ffffff', // Light mode background
          dark: '#1f2937',  // Dark mode background
        },
        text: {
          light: '#1f2937', // Light mode text color
          dark: '#e5e7eb',  // Dark mode text color
        },
      },
    },
  },
  plugins: [],
};

