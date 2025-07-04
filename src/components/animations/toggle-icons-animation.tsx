import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

export function ToggleIconsAnimation({
  icon1: Icon1,
  icon2: Icon2,
  isActive,
  className,
  icon1ClassName,
  icon2ClassName,
}: {
  icon1: LucideIcon;
  icon2: LucideIcon;
  isActive: boolean;
  className?: string;
  icon1ClassName?: string;
  icon2ClassName?: string;
}) {
  return (
    <div className={cn("relative h-6 w-6", className)}>
      <Icon1
        className={cn("absolute h-full w-full duration-300", icon1ClassName, {
          "rotate-180 scale-0": isActive,
          "scale-100": !isActive,
        })}
      />
      <Icon2
        className={cn("absolute h-full w-full duration-300", icon2ClassName, {
          "rotate-0": isActive,
          "-rotate-180 scale-0": !isActive,
        })}
      />
    </div>
  );
}
