/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
        },
        muted: "var(--muted)",
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        input: "var(--input)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Sora", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        fade: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        bounce: {
          "0%, 100%": { transform: "scale(0)" },
          "50%": { transform: "scale(1)" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "bounce-loading": "bounce-loading 1s infinite",
        "fade-in": "fadeIn 0.5s ease-in-out forwards",
        "fade-left": "fadeLeft 0.5s ease-in-out forwards",
        spin: "spin 1.5s linear infinite",
        fade: "fade 0.5s ease-in-out forwards",
        bounce: "bounce 1.5s ease-in-out infinite",
        "caret-blink": "caret-blink 1.2s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
