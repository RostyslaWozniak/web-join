import { PlayCircle } from "lucide-react";
import { Button, type ButtonProps } from "./button";
import { cn } from "@/lib/utils";

type GradientButtonProps = {
  children: React.ReactNode;
  showIcon?: boolean;
  outline?: boolean;
} & ButtonProps;

export function GradientButton({
  children,
  showIcon = false,
  outline = false,
  ...props
}: GradientButtonProps) {
  return (
    <Button
      className="group relative w-full bg-primary-gradient shadow transition-shadow duration-300 hover:shadow-[0px_0px_20px_6px_hsl(var(--primary-cyan)_/_70%)] md:w-auto"
      {...props}
    >
      {outline && (
        <div className="absolute inset-0.5 rounded-full bg-background duration-300 group-hover:bg-transparent" />
      )}
      {showIcon && (
        <PlayCircle
          className={cn(
            "relative min-h-8 min-w-8 stroke-background duration-300 group-hover:stroke-white",
            {
              "stroke-primary-cyan": outline,
              "group-hover:-translate-x-0.5 group-hover:scale-105": !outline,
            },
          )}
        />
      )}
      {!outline && (
        <span className="group-hover:translate-x-0.2 relative text-2xl text-background duration-300 group-hover:scale-105 group-hover:text-white">
          {children}
        </span>
      )}
      {outline && (
        <span className="relative bg-primary-gradient bg-clip-text text-2xl text-transparent group-hover:text-white">
          {children}
        </span>
      )}
    </Button>
  );
}
