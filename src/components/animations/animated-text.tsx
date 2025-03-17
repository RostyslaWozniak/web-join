"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function AnimatedText({
  text,
  className,
  accentWords,
}: {
  text: string;
  className?: string;
  accentWords?: string[];
}) {
  return (
    <div className={cn("flex flex-wrap gap-x-4 md:gap-x-6", className)}>
      {text.split(" ").map((w, wIndex) => {
        const isAccent = accentWords?.includes(w);

        return (
          <motion.div
            key={wIndex}
            className={cn("flex", {
              "bg-primary-gradient bg-clip-text pb-1 pr-1 text-transparent":
                isAccent,
            })}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: wIndex * 0.05 }}
          >
            {isAccent ? (
              // Wrap the whole accent word in a single motion element
              <span>{w}</span>
            ) : (
              // Animate normal words letter by letter
              w.split("").map((ch, chIndex) => (
                <motion.span
                  className="inline-block"
                  key={chIndex}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (wIndex + chIndex) * 0.02 }}
                >
                  {ch}
                </motion.span>
              ))
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
