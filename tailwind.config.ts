b import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        avika: {
          bg: "#111827",
          panel: "#1f2937",
          accent: "#06b6d4",
        },
      },
    },
  },
  plugins: [],
};

export default config;

