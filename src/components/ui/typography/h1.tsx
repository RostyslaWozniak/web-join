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
        "text-center text-[min(60px,15vw)] font-bold leading-[min(60px,16vw)] tracking-tighter lg:text-8xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}
