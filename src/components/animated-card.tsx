"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type AnimatedCardProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function AnimatedCard({
  children,
  className,
  delay,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -200px 0px" }}
      transition={{ duration: 0.3, delay }}
      className={cn(
        "bg-card-gradient space-y-4 rounded-3xl p-6 shadow-[0_0_0_1px_hsl(var(--primary)_/_30%)]",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
