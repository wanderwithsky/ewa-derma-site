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
        ewa: {
          teal: "var(--ewa-teal)",
          "teal-deep": "var(--ewa-teal-deep)",
          "teal-bg": "var(--ewa-teal-bg)",
          "teal-bg-2": "var(--ewa-teal-bg-2)",
          magenta: "var(--ewa-magenta)",
          "magenta-deep": "var(--ewa-magenta-deep)",
          green: "var(--ewa-green)",
          cyan: "var(--ewa-cyan)",
          white: "var(--ewa-white)",
          ink: "var(--ewa-ink)",
          mist: "var(--ewa-mist)",
          ivory: "var(--ewa-ivory)",
          line: "var(--ewa-line)",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        heading: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        script: ["'Alex Brush'", "'Caveat'", "cursive"],
      },
      boxShadow: {
        "ewa-sm": "0 2px 8px -1px rgba(14, 42, 50, 0.06), 0 1px 4px -1px rgba(14, 42, 50, 0.04)",
        "ewa-md": "0 8px 24px -4px rgba(14, 42, 50, 0.08), 0 4px 12px -2px rgba(14, 42, 50, 0.04)",
        "ewa-lg": "0 20px 40px -8px rgba(14, 42, 50, 0.12), 0 8px 20px -4px rgba(14, 42, 50, 0.06)",
        "ewa-glow-magenta": "0 0 25px -4px rgba(227, 28, 121, 0.45)",
        "ewa-glow-teal": "0 0 25px -4px rgba(20, 106, 128, 0.35)",
        "ewa-glow-green": "0 0 25px -4px rgba(79, 174, 124, 0.35)",
        "ewa-glow-cyan": "0 0 25px -4px rgba(46, 147, 168, 0.35)",
        "glass-inner": "inset 0 1px 1px 0 rgba(255, 255, 255, 0.35)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "ewa-hero-gradient": "linear-gradient(135deg, #0D4A5A 0%, #146A80 50%, #1B4B5C 100%)",
        "ewa-glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.45) 100%)",
        "ewa-dark-glass": "linear-gradient(135deg, rgba(20, 106, 128, 0.45) 0%, rgba(13, 74, 90, 0.75) 100%)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
