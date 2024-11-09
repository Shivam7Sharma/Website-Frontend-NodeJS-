/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#F9FAFB',
        success: '#34D399',
        danger: '#EF4444',
        warning: '#F59E0B',
        neutral: {
          100: '#F3F4F6',
          200: '#E5E7EB',
          800: '#1F2937',
          900: '#111827',
        }
      },
    },
  },
  plugins: [],
}
