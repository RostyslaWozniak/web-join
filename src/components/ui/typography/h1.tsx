import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

export function H1({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        "text-center text-6xl font-bold tracking-tighter lg:text-8xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}
