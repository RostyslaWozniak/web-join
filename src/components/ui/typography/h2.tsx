import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function H2({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-start text-5xl font-bold text-foreground sm:text-center lg:text-5xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}
