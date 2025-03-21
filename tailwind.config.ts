import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import tailwindAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(to left, var(--accent-emerald), var(--accent-cyan))",
        "secondary-gradient":
          "linear-gradient(to left, hsl(156, 72%, 67%, 20%), hsl(188, 86%, 53%, 20%))",
        "card-gradient":
          "linear-gradient(to left, var(--card), var(--popover))",
        "radial-gradient-primary-green":
          "radial-gradient(circle at 40% 20%, white, var(--accent-green), black);",
        "radial-gradient-primary-cyan":
          "radial-gradient(circle at 40% 20%, white, var(--accent-cyan), black);",
        "radial-gradient-accent-yellow":
          "radial-gradient(circle at 40% 20%, white, var(--accent-lime), black);",
        "radial-gradient-accent-green":
          "radial-gradient(circle at 40% 20%, white, var(--accent-green), black);",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        "accent-emerald": "var(--accent-emerald)",
        "accent-cyan": "var(--accent-cyan)",
        "accent-green": "var(--accent-green)",
        "accent-lime": "var(--accent-lime)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },
    },
  },
  plugins: [tailwindAnimate],
} satisfies Config;
