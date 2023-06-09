/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xxs: '9px',
      xs: '12px',
      base: '16px',
      lg: '18px',
      xl: '20px',
    },
    colors: {
      'main-color': '#F0C23A',
      'disabled-color': '#87712D',
      'grey-65': '#656565',
      'bg-color': '#1f1f1f',
      'bg-disabled': '#87712D',
    },
    extend: {},
  },
  plugins: [],
};
