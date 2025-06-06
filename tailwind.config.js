// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./public/**/*.{html,js}"], // 👈 Tells Tailwind where to look for class names
//   darkMode: 'class', // 👈 Enables dark mode toggle via class
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ✅ This line is mandatory!
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


