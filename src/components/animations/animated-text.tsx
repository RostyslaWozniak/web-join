"use client";

import { cn } from "@/lib/utils";
import { motion, type MotionProps } from "framer-motion";
import { Text, type TextProps } from "../ui/typography";

type AnimatedTextProps = {
  children: string;
  className?: string;
  motionProps?: MotionProps;
  textProps?: TextProps;
};
export function AnimatedText({
  children,
  className,
  motionProps,
  textProps,
}: AnimatedTextProps) {
  return (
    <Text className={cn("", className)} {...textProps}>
      {children.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0.25 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.02, delay: 0.01 * index }}
          viewport={{ once: true }}
          className="inline-block"
          {...motionProps}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </Text>
  );
}
