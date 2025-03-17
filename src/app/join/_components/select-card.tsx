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
        "grid cursor-pointer place-items-center rounded-2xl border-2 border-muted-foreground bg-background p-6 text-muted-foreground",
        {
          "border-primary-cyan bg-primary-cyan/10 text-foreground": isSelected,
          "border-destructive": error,
        },
        className,
      )}
      {...props}
    >
      <Icon
        className={cn("h-6 w-6", {
          "scale-110 stroke-primary-cyan transition-transform duration-300 ease-in-out":
            isSelected,
        })}
      />
      <h3
        className={cn("text-center text-lg font-semibold", {
          "scale-110 text-primary-cyan transition-transform duration-300":
            isSelected,
        })}
      >
        {label}
      </h3>
    </div>
  );
}
