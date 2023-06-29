/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      ribeye: ["Ribeye Marrow"],
      osita: ["Osita"],
      dm: ["DM"],
      sans: ["sans-serif"],
      big: ["Bigshot One"],
      man: ["Manrope"],
    },
    extend: {
      backgroundImage: {
        bgMain: "url('src/assets/images/poultrybg.jpg')",
      },
    },
  },
  plugins: [],
};
