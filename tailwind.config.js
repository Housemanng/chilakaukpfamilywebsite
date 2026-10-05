/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        uhie: "#7a1f1f",
        oxblood: "#4a0e0e",
        nzu: "#f6f1e6",
        odo: "#c4a15a",
        uli: "#1c1410",
        palm: "#1e3a2a",
        clay: "#efe4d2",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        body: ["Outfit", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
};
