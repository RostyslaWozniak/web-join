import { PlayCircle } from "lucide-react";
import { Button, type ButtonProps } from "./button";
import { cn } from "@/lib/utils";

type GradientButtonProps = {
  children: React.ReactNode;
  showIcon?: boolean;
  outline?: boolean;
  className?: string;
  textSize?: string;
} & ButtonProps;

export function GradientButton({
  children,
  showIcon = false,
  outline = false,
  className,
  textSize = "text-2xl",
  ...props
}: GradientButtonProps) {
  return (
    <Button
      className={cn(
        "group relative isolate w-full bg-gradient-to-r from-cyan-400 to-emerald-300 shadow transition-shadow duration-300 hover:shadow-[0px_0px_20px_6px_#22D3EE70] md:w-auto",
        className,
      )}
      {...props}
    >
      {outline && (
        <div className="absolute inset-0.5 z-10 rounded-full bg-background duration-300 group-hover:bg-transparent" />
      )}
      {showIcon && (
        <PlayCircle
          className={cn(
            "relative z-30 min-h-8 min-w-8 text-background duration-300 group-hover:stroke-white",
            {
              "stroke-cyan-400": outline,
              "group-hover:-translate-x-0.5 group-hover:scale-105": !outline,
            },
          )}
        />
      )}
      {!outline && (
        <span
          className={cn(
            "group-hover:translate-x-0.2 relative z-30 flex items-center text-background duration-300 group-hover:scale-[1.02] group-hover:text-white",
            textSize,
          )}
        >
          {children}
        </span>
      )}
      {outline && (
        <span
          className={cn(
            "relative z-30 flex items-center bg-gradient-to-r from-cyan-400 to-emerald-300 bg-clip-text text-2xl text-transparent group-hover:text-white",
            textSize,
          )}
        >
          {children}
        </span>
      )}
    </Button>
  );
}
