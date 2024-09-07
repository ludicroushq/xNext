import daisyui from "daisyui";
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        display: [
          "var(--font-inter-tight)",
          "var(--font-inter)",
          ...defaultTheme.fontFamily.sans,
        ],
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
    logs: false,
  },
};
export default config;
