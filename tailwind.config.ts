import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000", // Absolute Black
        foreground: "#ffffff", // Absolute White
        "spacex-gray": "#1a1a1a", // Subtle panel color
        "mars-red": "#cc0000", // The accent color (aggressive)
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      }
    },
  },
  plugins: [],
};
export default config;