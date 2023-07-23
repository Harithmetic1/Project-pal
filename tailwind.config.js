/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-custom": "#23003C",
        "purple-secondary": "#8E1BE0",
        "red-custom": "CF0A0E",
        "red-secondary": "#EB4335",
        "text-color": "#000000",
        "background-color": "#FFFFFF",
        placeholder: "#999999",
      },
    },
  },
  plugins: [],
};
