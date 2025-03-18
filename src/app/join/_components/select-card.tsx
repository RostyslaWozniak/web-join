import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

type SelectCardProps = {
  label: string;
  error: boolean;
  isSelected: boolean;
  icon: LucideIcon;
} & React.HTMLAttributes<HTMLDivElement>;

export function SelectCard({
  label,
  isSelected,
  error,
  icon: Icon,
  className,
  ...props
}: SelectCardProps) {
  return (
    <div
      className={cn(
        "grid cursor-pointer place-items-center rounded-2xl border-2 bg-background p-6",
        {
          "border-accent-cyan bg-[#22D3EE10] text-foreground": isSelected,
          "border-destructive": error,
        },
        className,
      )}
      {...props}
    >
      <Icon
        className={cn("h-6 w-6", {
          "stroke-accent-cyan scale-110 transition-transform duration-300 ease-in-out":
            isSelected,
        })}
      />
      <h3
        className={cn("text-center text-lg font-semibold", {
          "text-accent-cyan scale-110 transition-transform duration-300":
            isSelected,
        })}
      >
        {label}
      </h3>
    </div>
  );
}
