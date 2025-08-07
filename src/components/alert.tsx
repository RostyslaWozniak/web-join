import {
  Alert as ShadcnAlert,
  AlertDescription,
  type AlertVariantsType,
} from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

export function Alert({
  children,
  icon: Icon,
  variant,
  className,
  iconSize = 24,
}: {
  children: React.ReactNode;
  icon?: LucideIcon;
  iconSize?: number;
  className?: string;
} & AlertVariantsType) {
  return (
    <ShadcnAlert
      variant={variant}
      className={cn(
        {
          "flex gap-x-2": Icon,
        },
        className,
      )}
    >
      {Icon && (
        <>
          <div className="grid place-items-center">
            <Icon size={iconSize} />
          </div>
          <AlertDescription>{children}</AlertDescription>
        </>
      )}
      {children}
    </ShadcnAlert>
  );
}
