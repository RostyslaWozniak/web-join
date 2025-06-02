import { Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

type SelectCardProps = {
  label: string;
  error: boolean;
  isSelected: boolean;
  icon: LucideIcon;
  description?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function SelectCard({
  label,
  isSelected,
  error,
  icon: Icon,
  className,
  description,
  ...props
}: SelectCardProps) {
  return (
    <div
      className={cn(
        "grid cursor-pointer place-items-center space-y-2 rounded-2xl border-2 bg-background p-4 md:p-6",
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
          "scale-110 stroke-accent-cyan transition-transform duration-300 ease-in-out":
            isSelected,
        })}
      />
      <Text
        className={cn("text-center text-sm font-semibold md:text-lg", {
          "scale-110 text-accent-cyan transition-transform duration-300":
            isSelected,
        })}
      >
        {label}
      </Text>
      {description && (
        <Text className="text-center text-sm">{description}</Text>
      )}
    </div>
  );
}
