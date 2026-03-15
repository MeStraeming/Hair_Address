/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#111827',
          accent: '#E11D48',
          secondary: '#F9FAFB',
          soft: '#FDF2F8',
          gold: '#F59E0B',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        luxe: '0 20px 80px rgba(17, 24, 39, 0.18)',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at top, rgba(225, 29, 72, 0.25), transparent 35%), radial-gradient(circle at bottom right, rgba(245, 158, 11, 0.18), transparent 28%)',
      },
    },
  },
  plugins: [],
};
