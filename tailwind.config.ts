import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  // Include index.html and common script file extensions so Tailwind
  // can scan template and component files for class names.
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"] as any,
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        mono: ["Inconsolata", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontSize: {
        "display-xl": ["56px", { lineHeight: "1.1", fontWeight: "700" }],
        "display-lg": ["40px", { lineHeight: "1.1", fontWeight: "700" }],
        "display-md": ["32px", { lineHeight: "1.1", fontWeight: "700" }],
        "heading-lg": ["28px", { lineHeight: "1.2", fontWeight: "700" }],
        "heading-md": ["24px", { lineHeight: "1.2", fontWeight: "700" }],
        "heading-sm": ["20px", { lineHeight: "1.3", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "1.5", fontWeight: "500" }],
        "body-md": ["16px", { lineHeight: "1.5", fontWeight: "500" }],
        "body-sm": ["14px", { lineHeight: "1.5", fontWeight: "500" }],
      },
    },
  },
  plugins: [],
} satisfies Config;
