/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          500: 'var(--dc-green-500)',
        },
        'phuong-color': 'var(--dc-blue-500)',
      },
    },
  },
  plugins: [],
};
