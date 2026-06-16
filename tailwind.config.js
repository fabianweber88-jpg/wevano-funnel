/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Akzentfarbe der Marke (warmes, hochwertiges Indigo/Violett)
        accent: {
          DEFAULT: '#4f46e5',
          hover: '#4338ca',
          soft: '#eef2ff',
        },
        ink: '#0f1117', // dunkle Schriftfarbe
      },
      fontFamily: {
        // Große, klare Typografie
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
}
