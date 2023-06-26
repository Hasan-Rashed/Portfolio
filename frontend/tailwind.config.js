/** @type {import('tailwindcss').Config} */
export default {
  content: [
   "./index.html",	
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
       'sm': '640px',
       'md': '768px',
       'lg': '1024px',
       'xl': '1280px',
    },
    extend: {
      colors: {
        // Custom color definitions
        primary: '#ff0000',   // Red
        secondary: '#00ff00', // Green
        tertiary: '#0000ff',  // Blue
        black: "#000000",
        magicBlue: "#00f6ff",
      },
      fontFamily: { 
        sans: ['Helvetica', 'Arial', 'sans-serif'], 
        serif: ['Georgia', 'serif'], mono: ['Menlo', 'Monaco', 'monospace']
      }
    },
  },
  plugins: [],
}