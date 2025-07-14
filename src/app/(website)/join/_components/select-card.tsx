"use client ";

import { Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { CheckCircleIcon, type LucideIcon } from "lucide-react";
import { DialogWrapper } from "@/components/dialog-wrapper";
import { Button } from "@/components/ui/button";
import { InfoIcon } from "lucide-react";
import { useState } from "react";
import { ToggleIconsAnimation } from "@/components/animations/toggle-icons-animation";

type SelectCardProps = {
  label: string;
  fullLabel?: string;
  error: boolean;
  isSelected: boolean;
  icon: LucideIcon;
  description?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function SelectCard({
  label,
  fullLabel,
  isSelected,
  error,
  icon: Icon,
  className,
  description,
  ...props
}: SelectCardProps) {
  return (
    <div className="relative">
      <div
        className={cn(
          "relative grid h-full cursor-pointer place-items-center space-y-1 rounded-2xl border-2 bg-background p-4 md:p-6",
          {
            "border-accent-cyan bg-[#22D3EE10] text-foreground": isSelected,
            "border-destructive": error,
          },
          className,
        )}
        {...props}
      >
        <div className="flex flex-col items-center gap-1">
          <div>
            <ToggleIconsAnimation
              icon1={Icon}
              icon2={CheckCircleIcon}
              isActive={isSelected}
              icon2ClassName="text-accent-cyan"
            />
          </div>
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
      <div className="md:hidden">
        {fullLabel && description && (
          <SelectCardIfo label={fullLabel} description={description} />
        )}
      </div>
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
        className="absolute -right-1 -top-1 p-5"
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
      >
        <InfoIcon className="min-h-5 min-w-5 text-gray-500" />
      </Button>
      <DialogWrapper
        isOpen={open}
        setIsOpen={setOpen}
        title={label}
        className="space-y-2"
        contentClassName="pb-10"
      >
        {description}
      </DialogWrapper>
    </>
  );
}
