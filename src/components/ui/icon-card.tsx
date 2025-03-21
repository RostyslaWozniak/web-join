import React from "react";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Text } from "./typography";

type IconCardProps = {
  icon: LucideIcon;
  iconSize?: number;
  text: string;
  position?: keyof typeof positionClasses;
  rotate?: number;
  className?: string;
  col?: boolean;
  duration?: keyof typeof animations;
};

const positionClasses = {
  "top-left": "-top-24 left-2",
  "top-right": "-top-20 right-2",
  "top-center": "top-0 -translate-x-1/2 left-1/2",
  "bottom-center": "-bottom-20 -translate-x-1/2  left-1/2",
  "bottom-left": "-bottom-20 left-2",
  "bottom-right": "-bottom-10 right-2",
} as const;

const animations = {
  "0.5": "animate-slide-up-0.5",
  "0.8": "animate-slide-up-0.8",
  "1": "animate-slide-up-1",
  "1.4": "animate-slide-up-1.4",
} as const;

export function IconCard({
  icon: Icon,
  iconSize = 40,
  text,
  position = "top-left",
  rotate = -6,
  className,
  col = false,
  duration = "0.5",
}: IconCardProps) {
  return (
    <div
      className={cn(
        "absolute flex rotate-6 scale-[0.2] items-center justify-center gap-x-4 rounded-2xl bg-background px-8 py-3 shadow-xl md:scale-100",
        positionClasses[position],
        animations[duration],
        { "flex-col": col },
        className,
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <Icon size={iconSize} className="" />
      <Text size="sm">{text}</Text>
    </div>
  );
}
