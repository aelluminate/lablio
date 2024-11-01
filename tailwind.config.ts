import defaultTheme from "tailwindcss/defaultTheme"
import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        light: "var(--color-light)",
        dark: "var(--color-dark)",
      },
      fontFamily: {
        "lexend-deca": ["var(--font-lexend-deca)", ...defaultTheme.fontFamily.sans],
        lora: ["var(--font-lora)", ...defaultTheme.fontFamily.serif],
        inter: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
export default config
