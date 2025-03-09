"use client";

import { motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { CardWrapper } from "../card-wrapper";

type CardWithAnimatedSphereProps = {
  children: React.ReactNode;
  color: string;
  className?: string;
} & MotionProps;

export function CardWithAnimatedSphere({
  children,
  color,
  className,
  ...props
}: CardWithAnimatedSphereProps) {
  return (
    <CardWrapper className={cn("relative overflow-hidden", className)}>
      <motion.div
        initial={{ y: -40, x: 40, opacity: 0 }}
        whileInView={{ y: 0, x: 0, opacity: 0.5 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        className={cn(
          "absolute -right-20 -top-10 aspect-square h-60 rounded-full",
          color,
        )}
        {...props}
      />

      {children}
    </CardWrapper>
  );
}
