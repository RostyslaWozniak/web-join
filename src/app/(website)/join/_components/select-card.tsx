"use client ";
import { DialogWrapper } from "@/components/dialog-wrapper";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { InfoIcon, type LucideIcon } from "lucide-react";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={cn(
          "relative grid cursor-pointer place-items-center space-y-1 rounded-2xl border-2 bg-background p-4 md:p-6",
          {
            "border-accent-cyan bg-[#22D3EE10] text-foreground": isSelected,
            "border-destructive": error,
          },
          className,
        )}
        {...props}
      >
        <Button
          size="icon"
          variant="ghost"
          className="absolute right-0 top-0"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(true);
          }}
        >
          <InfoIcon className="min-h-6 min-w-6" />
        </Button>
        <Icon
          className={cn("h-6 w-6", {
            "scale-110 stroke-accent-cyan transition-transform duration-300 ease-in-out":
              isSelected,
          })}
        />
        <Text
          className={cn("text-center font-semibold md:text-lg", {
            "scale-110 text-accent-cyan transition-transform duration-300":
              isSelected,
          })}
        >
          {label}
        </Text>
        {/* {description && (
          <Text className="text-center !text-sm">{description}</Text>
        )} */}
      </div>
      <DialogWrapper isOpen={open} setIsOpen={setOpen} title={label}>
        {description}
      </DialogWrapper>
    </>
  );
}
