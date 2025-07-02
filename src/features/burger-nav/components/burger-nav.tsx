"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { burgerNavigation } from "../data/navigation";
import { BurgerNavItem } from "./nav-item";
import { AnimatePresence, motion } from "framer-motion";

export function BurgerNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        variant="ghost"
        size="icon"
        className="relative z-50 mt-1 md:hidden"
      >
        <MenuIcon
          className={cn("absolute duration-300", {
            "min-h-6 min-w-6 scale-100": !open,
            "-rotate-180 scale-0": open,
          })}
        />
        <XIcon
          className={cn("absolute duration-300", {
            "min-h-6 min-w-6 scale-100": open,
            "rotate-180 scale-0": !open,
          })}
        />
        <span className="absolute -inset-2" />
      </Button>

      <div
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 top-14 -z-10 h-screen w-screen overflow-hidden",
        )}
      >
        <div
          className={cn(
            "absolute -top-8 right-10 -z-10 aspect-square w-0 rounded-full bg-card-gradient duration-1000",
            {
              "aspect-square w-10 scale-[50]": open,
            },
          )}
        />
        <AnimatePresence>
          {open && (
            <ul className="mt-12 flex flex-col items-center gap-8 p-4">
              {burgerNavigation.map(({ label, ...item }, i) => (
                <motion.li
                  className="relative w-full px-12 text-xl"
                  key={label}
                  transition={
                    open
                      ? { delay: i * 0.1, duration: 0.3 }
                      : { delay: i * 0.1, duration: 0.3 }
                  }
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                >
                  <BurgerNavItem {...item}>{label}</BurgerNavItem>
                </motion.li>
              ))}
            </ul>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
