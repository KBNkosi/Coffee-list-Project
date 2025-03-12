/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pdark: "#1B1D1F",
        pdarker: "#111315",
        pgray: "#6F757C",
        pgreen: "#BEE3CC",
        pbrown: "#FEF7EE",
        porange: "#F6C768",
        pred: "#ED735D",
      },
      backgroundImage: {
        "custom-radial":
          "radial-gradient(#0f172a 1px, transparent 0), radial-gradient(#0f172a 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
