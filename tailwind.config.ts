import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#0A0F1E",
        "dark-card": "#111827",
        accent: "#3B82F6",
        accent2: "#8B5CF6",
        success: "#10B981",
        "light-bg": "#F8FAFC",
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        card: "var(--card)",
        muted: "var(--muted)",
      },
      boxShadow: {
        card: "var(--card-shadow)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains)"],
      },
      keyframes: {
        "mesh-float": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(3%, -4%) scale(1.05)" },
          "66%": { transform: "translate(-3%, 3%) scale(0.97)" },
        },
      },
      animation: {
        "mesh-float": "mesh-float 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
