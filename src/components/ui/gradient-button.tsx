import { PlayCircle } from "lucide-react";
import { Button, type ButtonProps } from "./button";
import { cn } from "@/lib/utils";

type GradientButtonProps = {
  children: React.ReactNode;
  showIcon?: boolean;
  outline?: boolean;
  className?: string;
} & ButtonProps;

export function GradientButton({
  children,
  showIcon = false,
  outline = false,
  className,
  ...props
}: GradientButtonProps) {
  return (
    <Button
      size="lg"
      className={cn(
        "group relative isolate w-full bg-primary-gradient shadow transition-shadow duration-300 hover:shadow-[0px_0px_20px_2px_#22D3EE70] sm:w-auto",
        className,
      )}
      {...props}
    >
      {showIcon && (
        <PlayCircle
          className={cn(
            "relative z-30 min-h-5 min-w-5 text-background duration-300",
            {
              "stroke-accent-cyan": outline,
              "group-hover:-translate-x-0.5 group-hover:scale-105": !outline,
            },
          )}
        />
      )}
      {!outline && (
        <span
          className={cn(
            "group-hover:translate-x-0.2 relative z-30 flex items-center text-white duration-300 group-hover:scale-[1.02]",
          )}
        >
          {children}
        </span>
      )}
      {outline && (
        <span
          className={cn(
            "relative z-30 flex items-center bg-primary-gradient bg-clip-text tracking-wider text-transparent brightness-75",
          )}
        >
          {children}
        </span>
      )}
      {outline && (
        <div className="absolute inset-0.5 z-10 rounded-full bg-white duration-300" />
      )}
    </Button>
  );
}
