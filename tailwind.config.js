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
        yellow: "#F0B90B",
        gray: "#66666600",
        white:'#FFFFFF',
        grayDark: '#262626',
        black:'#000000',
        blackDark:'#1C1C1C',
        grayLight: '#B0B0B0',
        green: '#4DA14F',
        orange: '#FF8800'
      },
    },
  },
  plugins: [],
};
