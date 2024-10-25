const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Include all relevant file types
    "./node_modules/@material-tailwind/react/**/*.js", // Include Material Tailwind components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
