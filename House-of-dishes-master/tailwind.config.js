/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        dish_img:
          "url('https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2018/07/Food.jpg?fit=1200%2C643&ssl=1')",
      },
      fontFamily: {
        // eslint-disable-next-line no-undef
        montez: ["Montez"],
      },
    },
  },
  plugins: [],
};
