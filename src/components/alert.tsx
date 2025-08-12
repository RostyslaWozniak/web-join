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
  iconClassName?: string;
} & AlertVariantsType) {
  return (
    <ShadcnAlert variant={variant} className={cn(className)}>
      {Icon ? (
        <div className="flex gap-x-4">
          <Icon size={iconSize} className="h-6 w-6 min-w-6" />
          <AlertDescription>{children}</AlertDescription>
        </div>
      ) : (
        children
      )}
    </ShadcnAlert>
  );
}
