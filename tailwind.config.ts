import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "cursive"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        hand: ["var(--font-hand)", "cursive"],
      },
      colors: {
        sand: "#F2E8D5",
        ocean: "#1A5F7A",
        wave: "#57B4D1",
        sunrise: "#E8752A",
        kelp: "#2D4A22",
        foam: "#FAFAF5",
        roast: "#3B1F0A",
        chalk: "#FFFFFF",
        dotLight: "#F2D972",
        dotMedium: "#E8752A",
        dotDark: "#5C3824",
      },
    },
  },
  plugins: [],
};
export default config;
