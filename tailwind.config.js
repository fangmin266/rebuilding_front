/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_100: "#1ecfd9",
        // primary_60:""
      },
      backgroundColor: {
        primary_100: "#1ecfd9",
        primary_10: "#1ecfd9",
        unactive_100: "#efefef",
      },
      maxWidth: {
        layout: "1440px",
      },
    },
  },
  plugins: [],
};
