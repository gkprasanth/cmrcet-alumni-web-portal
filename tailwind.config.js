module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4a90e2",
        secondary: "#f5a623",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
