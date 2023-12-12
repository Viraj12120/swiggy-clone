/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./src/**/*.{html,js,ts,jsx,tsx}",
],
  theme: {
    extend: {animation: {
      'spin-slow': 'spin 30s linear infinite',
    }},
    objectPosition: {
      'center': 'center',
    },
  },
  plugins: [],
}

