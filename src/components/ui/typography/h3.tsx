import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function H3({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        "text-xl font-semibold text-foreground sm:text-2xl",
        className,
      )}
    >
      {children}
    </h3>
  );
}
