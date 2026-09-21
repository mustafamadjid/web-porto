/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      colors: {
        primary: "#000000",
        secondary: "#FFFFFF",
      },
      boxShadow: {
        "offset-sm": "8px 8px 0 #111111",
        "offset-md": "10px 10px 0 #111111",
        "offset-lg": "12px 12px 0 #111111",
        "offset-light": "10px 10px 0 #d4d4d4",
      },
    },
  },
  plugins: [],
};
