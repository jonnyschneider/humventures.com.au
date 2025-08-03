import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-sans)", "sans-serif"],
      display: ["var(--font-display)", "sans-serif"],
      serif: ["ui-serif", "Georgia", "serif"],
      mono: ["ui-monospace", "SFMono-Regular", "monospace"],
    },
  },
  plugins: [],
};
export default config;