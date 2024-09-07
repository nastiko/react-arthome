const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md-devices': '431px',
        // => @media (min-width: 420px) { ... }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
});

