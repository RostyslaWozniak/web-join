import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

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
          "linear-gradient(to left, hsl(var(--primary-green)), hsl(var(--primary-cyan)))",
        "secondary-gradient":
          "linear-gradient(to left, hsl(var(--primary-green) / 10%), hsl(var(--primary-cyan) / 10%))",
        "card-gradient":
          "linear-gradient(to left, hsl(var(--card)), hsl(var(--popover)))",
        "radial-gradient-primary-green":
          "radial-gradient(circle at 40% 20%, white, hsl(var(--primary-green)), black);",
        "radial-gradient-primary-cyan":
          "radial-gradient(circle at 40% 20%, white, hsl(var(--primary-cyan)), black);",
        "radial-gradient-accent-yellow":
          "radial-gradient(circle at 40% 20%, white, hsl(var(--accent-yellow)), black);",
        "radial-gradient-accent-green":
          "radial-gradient(circle at 40% 20%, white, hsl(var(--accent-green)), black);",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        "primary-green": "hsl(var(--primary-green))",
        "primary-cyan": "hsl(var(--primary-cyan))",
        "accent-green": "hsl(var(--accent-green))",
        "accent-yellow": "hsl(var(--accent-yellow))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
    animation: {},
    keyframes: {},
  },
} satisfies Config;
