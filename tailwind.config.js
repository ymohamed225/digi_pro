/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1A56F5',
          lightBlue: '#3B82F6',
          brightBlue: '#60A5FA',
          navy: '#0A1128',
          darkBlue: '#1E293B',
          slate: '#0F172A',
          softBg: '#F8FAFC',
          iceBg: '#EFF6FF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 20px 40px -15px rgba(26, 86, 245, 0.08)',
        'card-hover': '0 25px 50px -12px rgba(26, 86, 245, 0.15)',
      }
    },
  },
  plugins: [],
};
