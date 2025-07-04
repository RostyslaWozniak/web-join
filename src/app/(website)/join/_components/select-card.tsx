"use client ";

import { Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";
import { DialogWrapper } from "@/components/dialog-wrapper";
import { Button } from "@/components/ui/button";
import { InfoIcon } from "lucide-react";
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
  return (
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
      <div className="md:hidden">
        {description && (
          <SelectCardIfo label={label} description={description} />
        )}
      </div>
      <div className="flex flex-col items-center gap-1">
        <Icon
          className={cn("h-6 w-6 duration-300", {
            "scale-105 stroke-accent-cyan transition-transform ease-in-out":
              isSelected,
          })}
        />
        <Text
          className={cn("text-center font-semibold duration-300 md:text-lg", {
            "scale-105 text-accent-cyan transition-transform duration-300":
              isSelected,
          })}
        >
          {label}
        </Text>
      </div>
      {description && (
        <Text className="hidden text-center !text-sm md:block">
          {description}
        </Text>
      )}
    </div>
  );
}

function SelectCardIfo({
  label,
  description,
}: {
  label: string;
  description: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
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
        <InfoIcon className="min-h-5 min-w-5 text-gray-500" />
      </Button>
      <DialogWrapper isOpen={open} setIsOpen={setOpen} title={label}>
        {description}
      </DialogWrapper>
    </>
  );
}
