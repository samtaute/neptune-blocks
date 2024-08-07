/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, rgba(0, 3, 21, 0.85) 0%, rgba(0, 3, 21, 0) 70%, rgba(0, 3, 21, 0) 70%, rgba(0, 3, 21, 0) 100%)',
      },
    },
  },
  plugins: [],
}

