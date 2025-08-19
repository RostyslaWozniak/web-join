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
        "text-start text-4xl font-bold tracking-tighter sm:text-5xl lg:text-7xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}
