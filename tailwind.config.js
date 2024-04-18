/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "300px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        ["2xl"]: "1536px",
      },
      invert: {
        25: '.25',
        50: '.5',
        75: '.75',
      },
      fontFamily: {
        cursive: ["cursive", "sans"],
        fantasy: ["fantasy", "sans"],
        delicious: ["Delicious Handrawn", "sans"],
        urban: ["Urbanist", "sans-serif"],
      },
      textColor: {
        yellow: "#345d9e",
      },
      backgroundColor: {
        yellow: "#345d9e",
      },
      borderColor: {
        yellow: "#345d9e",
      },
      outlineColor: {
        yellow: "#345d9e",
      }
    },
  },
  plugins: [],
};