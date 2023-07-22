/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        custom: " 0px 16px 30px -10px rgba(70, 96, 187, 0.20)",
      },
    },

    fontFamily: {
      "space-mono": ["Space Mono", "monospace"],
    },

    colors: {
      "White-Lavender": "#F6F8FF",
      "Pure-White": "#FEFEFE",
      "Bright-Blue": "#0079FF",
      "Sky-Blue": "#60ABFF",
      "Steel-Blue": "#4B6A9B",
      "Light-Red": "#F74646",
      "Dark-Blue": "#2B3442",
      "Deep-Black": "#222731",
      "Slate-Blue": "#1E2A47",
      "Midnight-Blue": "#141D2F",
    },
  },
  plugins: [],
};
