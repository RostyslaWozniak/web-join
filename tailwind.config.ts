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
          "linear-gradient(to left, var(--primary-green), var(--primary-cyan))",
        "secondary-gradient":
          "linear-gradient(to left, var(--primary-green) / 10%), var(--primary-cyan) / 10%)",
        "card-gradient":
          "linear-gradient(to left, var(--card), var(--popover))",
        "radial-gradient-primary-green":
          "radial-gradient(circle at 40% 20%, white, var(--primary-green), black);",
        "radial-gradient-primary-cyan":
          "radial-gradient(circle at 40% 20%, white, var(--primary-cyan), black);",
        "radial-gradient-accent-yellow":
          "radial-gradient(circle at 40% 20%, white, var(--accent-yellow), black);",
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
        "primary-green": "var(--primary-green)",
        "primary-cyan": "var(--primary-cyan)",
        "accent-green": "var(--accent-green)",
        "accent-yellow": "var(--accent-yellow)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
      },
    },
    animation: {
      spin: "spin 1s linear infinite",
    },
    keyframes: {
      spin: {
        to: {
          transform: "rotate(360deg)",
        },
      },
    },
  },
  plugins: [tailwindAnimate],
} satisfies Config;
