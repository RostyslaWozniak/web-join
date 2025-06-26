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
        "text-start text-[min(40px,13vw)] font-bold leading-[min(44px,14vw)] text-foreground sm:text-center lg:text-4xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}
