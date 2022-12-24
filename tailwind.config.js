module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    dark: false,
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#948DA9",
      },
      fontSize: {
        '4xl':'1.9rem',
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
