/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // safelist: [
  //   {
  //     pattern: /(bg|text|border|m)-./,
  //   },
  // ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "yellow-button": "rgb(255, 183, 15)",
        "editor-gray": "#F4F5F7",
        "primary-blue": "#007aff",
        "hover-blue": "#0062cc",
      },
    },
  },
  plugins: [],
};
