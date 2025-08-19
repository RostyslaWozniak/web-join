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
        onClick={async () => {
          setOpen(!open);
        }}
        variant="ghost"
        size="icon"
        className="relative z-50 mt-1 bg-white"
        aria-label="menu button"
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
      <AnimatePresence>
        {open && (
          <motion.div
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              delay: 0,
            }}
            className={cn(
              "fixed inset-0 top-14 -z-10 h-screen w-screen bg-card-gradient",
            )}
          >
            <ul className="mx-auto mt-12 flex flex-col items-start px-4">
              {burgerNavigation.map(({ label, ...item }, i) => (
                <motion.li
                  onClick={(e) => (item.href ? null : e.stopPropagation())}
                  className="relative w-full"
                  key={item.id}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  initial={{
                    y: 50,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  exit={{
                    y: -50,
                    opacity: 0,
                    transition: { staggerChildren: 0.5, staggerDirection: 4 },
                  }}
                >
                  <BurgerNavItem {...item}>{label}</BurgerNavItem>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
