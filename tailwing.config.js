/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // A deep, sophisticated slate instead of bright blue
        brand: {
          dark: "#0F172A", // Deep Navy
          gold: "#C5A059", // Champagne Gold (Accent)
          muted: "#64748B", // Slate Gray
          light: "#F8FAFC", // Off-white background
        },
      },
      fontFamily: {
        // High-end Serif for headings, clean Sans for body
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Inter"', "sans-serif"],
      },
      letterSpacing: {
        superwide: "0.3em",
      },
    },
  },
  plugins: [],
};
