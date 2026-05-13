/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        glow: '0 20px 60px rgba(59,130,246,0.18)'
      }
    }
  },
  plugins: []
}
