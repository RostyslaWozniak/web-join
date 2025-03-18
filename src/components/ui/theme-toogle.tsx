"use client";
import { useTheme } from "next-themes";

import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  return (
    <>
      {isClient && (
        <button
          className="relative min-h-8 min-w-8"
          aria-label="Toggle dark mode"
        >
          <Sun
            className={cn(
              "stroke-accent-cyan absolute inset-0 h-full w-full scale-100 stroke-[1.5px] duration-500",
              {
                "rotate-90 scale-0": theme === "dark",
              },
            )}
          />

          <Moon
            className={cn(
              "stroke-accent-cyan absolute inset-0 h-full w-full scale-0 stroke-[1.5px] duration-300",
              {
                "scale-100": theme === "dark",
                "-rotate-90": theme === "light",
              },
            )}
          />

          <span
            className="absolute -inset-2 cursor-pointer"
            onClick={() =>
              theme === "dark" ? setTheme("light") : setTheme("dark")
            }
          />
        </button>
      )}
    </>
  );
}
