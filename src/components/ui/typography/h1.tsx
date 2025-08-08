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
        "text-start text-[min(48px,15vw)] font-bold leading-[min(48px,16vw)] tracking-tighter sm:text-[min(60px,15vw)] sm:leading-[min(60px,16vw)] lg:text-7xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}
