/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        udemy: {
          purple: '#a435f0',
          darkPurple: '#8710d8',
          lightPurple: '#f7f1fc',
          charcoal: '#1c1d1f',
          gray: '#6a6f73',
          border: '#d1d7dc',
          bgLight: '#f7f9fa',
          star: '#b4690e',
          starBg: '#e59819'
        }
      }
    },
  },
  plugins: [],
}
